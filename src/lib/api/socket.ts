import AppConfig from "@/lib/appConfig";

const WEBSOCKET_URL = AppConfig.BASE_WEBSOCKET_URL || "ws://localhost:8000/ws/chat/";

const createSocket = (params: string) => {
  return new WebSocket(`${WEBSOCKET_URL}${params}`);
};

export default createSocket;
