import axios, { AxiosInstance } from "axios";
import AppConfig from "@/lib/appConfig";

const API: AxiosInstance = axios.create({
  baseURL: AppConfig.BASE_URL,
  timeout: 10000,
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
});

export default API;
