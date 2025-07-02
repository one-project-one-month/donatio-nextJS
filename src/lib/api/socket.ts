import AppConfig from "@/lib/appConfig";

const WEBSOCKET_URL = AppConfig.BASE_WEBSOCKET_URL || "localhost:5000";

const createSocket = () => {
  return new WebSocket(WEBSOCKET_URL);
};

const socket = createSocket();

export default socket;
