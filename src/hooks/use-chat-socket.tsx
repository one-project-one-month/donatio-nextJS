"use client";

import createSocket from "@/lib/api/socket";
import useChatStore from "@/store/chatStore";
import { useEffect, useRef } from "react";

function useChatSocket(id: string) {
  const { setSocket, clearSocket } = useChatStore();
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = createSocket(id);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Web socket connected");
    };

    socket.onclose = () => {
      console.log("WebSocket closed ❌");
      clearSocket();
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    setSocket(socket);

    return () => socket.close();
  }, [id]);

  return;
}

export default useChatSocket;
