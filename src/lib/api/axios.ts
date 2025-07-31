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
});

API.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
});

const { setAccessToken, logout } = useAuthStore.getState();

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {

      originalRequest._retry = true;

      const refreshToken = getRefreshToken();

      if (!refreshToken) {
        logout();
        return Promise.reject(error);
      }

      try {
        const response = await API.post(`/token/refresh/`, {
          refresh: refreshToken,
        });

        const newAccessToken = response.data.access;
        setAccessToken(newAccessToken, refreshToken);

        API.defaults.headers.Authorization = `JWT ${newAccessToken}`;
        originalRequest.headers.Authorization = `JWT ${newAccessToken}`;
        return API(originalRequest);
      } catch (err) {
        logout();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
