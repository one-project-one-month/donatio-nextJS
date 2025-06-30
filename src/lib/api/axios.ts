import axios, { AxiosInstance } from "axios";
import AppConfig from "@/lib/appConfig";


const API: AxiosInstance = axios.create({
    baseURL: AppConfig.BASE_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});


export default API;