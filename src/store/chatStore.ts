import { Message } from "@/types/Chat";
import { create } from "zustand";

type ChatStore = {
  chatSocket: WebSocket | null;
  setSocket: (socket: WebSocket) => void;
  clearSocket: () => void;
  messages: Message[];
  addMessage: (message: Message) => void;
  setMessage: (messages: Message[]) => void;
};

const useChatStore = create<ChatStore>((set) => ({
  chatSocket: null,
  setSocket: (socket: WebSocket) => {
    set({ chatSocket: socket });
  },
  clearSocket: () => {
    set({ chatSocket: null });
  },
  messages: [],
  addMessage: (message: Message) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
  setMessage: (messages: Message[]) => {
    set({ messages: messages });
  },
}));

export const getMessages = () => useChatStore.getState().messages;

export default useChatStore;
