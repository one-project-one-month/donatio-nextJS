import AppConfig from "@/lib/appConfig";
import { getAccessToken } from "@/store/useAuthStore";

const WEBSOCKET_URL = AppConfig.BASE_WEBSOCKET_URL || "ws://localhost:8000/ws/chat/";

const token = getAccessToken();

const createSocket = (params: string) => {
  return new WebSocket(`${WEBSOCKET_URL}${params}/?access_token=${token}`);
};

export default createSocket;
