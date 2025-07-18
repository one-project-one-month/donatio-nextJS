"use client";

import createSocket from "@/lib/api/socket";
import { showToast } from "@/lib/toast";
import useChatStore from "@/store/chatStore";
import { Message } from "@/types/Chat";
import { useEffect, useRef } from "react";

function useChatSocket(id: string) {

  const { addMessage } = useChatStore();
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = createSocket(id);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Web socket connected");
    };

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      addMessage(data);
    };

    socket.onclose = () => {
      console.log("WebSocket closed ❌");
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
      showToast.error("Socket Error!!")
    };

    return () => socket.close();
  }, [id]);




  const sendMessage = (message: Message) => {
    if(socketRef.current?.readyState === WebSocket.OPEN) {
        socketRef.current.send(JSON.stringify({ message }));
    }
  }

  return { sendMessage };
}

export default useChatSocket;
