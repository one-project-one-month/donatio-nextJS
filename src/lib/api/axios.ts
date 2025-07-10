import axios, { AxiosInstance } from "axios";
import AppConfig from "@/lib/appConfig";
import useAuthStore, {
  getAccessToken,
  getRefreshToken,
} from "@/store/useAuthStore";

const API: AxiosInstance = axios.create({
  baseURL: AppConfig.BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `JWT ${token}`;
            return API(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = getRefreshToken();

      if (!refreshToken) {
        console.error("No refresh token found. Logging out.");
        useAuthStore.getState().logout();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(
          `${AppConfig.BASE_URL}/token/refresh/`,
          {
            refresh: refreshToken,
          }
        );

        const newAccessToken = response.data.access;

        // update Zustand store with new access token
        useAuthStore.getState().setAccessToken(newAccessToken, refreshToken);

        API.defaults.headers.Authorization = `JWT ${newAccessToken}`;
        originalRequest.headers.Authorization = `JWT ${newAccessToken}`;

        processQueue(null, newAccessToken);
        return API(originalRequest);
      } catch (err) {
        processQueue(err, null);
        console.error("Refresh token invalid. Logging out.");
        useAuthStore.getState().logout();
        window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default API;
