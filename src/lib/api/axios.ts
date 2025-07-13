import axios, { AxiosInstance } from "axios";
import AppConfig from "@/lib/appConfig";
import { getAccessToken } from "@/store/useAuthStore";

const API: AxiosInstance = axios.create({
  baseURL: AppConfig.BASE_URL,
  timeout: 10000,
  withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

API.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
});

export default API;
