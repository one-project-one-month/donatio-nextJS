// /hooks/useChatSocket.ts
import createSocket from "@/lib/api/socket";
import useChatStore from "@/store/chatStore";
import { useEffect, useRef } from "react";

export function useChatSocket(
  id: string,
) {

  const { addMessage } = useChatStore();
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = createSocket(id);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("✅ Socket opened");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      addMessage(data);
    };

    socket.onclose = () => {
      console.log("❌ Socket closed");
    };

    socket.onerror = (err) => {
      console.error("💥 Socket error", err);
    };

    return () => {
      socket.close();
    };
  }, [id]);

  const send = (data: any) => {
    const socket = socketRef.current;
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(data));
    } else {
      console.warn("❌ Cannot send, socket not open");
    }
  };

  return { send };
}
