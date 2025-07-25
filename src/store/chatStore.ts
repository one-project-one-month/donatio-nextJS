import { MessageResponse, Sender } from "@/types/Chat";
import { create } from "zustand";

type ChatStore = {
  messages: MessageResponse[];
  addMessage: (message: MessageResponse) => void;
  setMessage: (messages: MessageResponse[]) => void;
};

const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (message: MessageResponse) => {
    set((state) => ({
      messages: [...state.messages, message]
    }))
  },
  setMessage: (messages: MessageResponse[]) => {
    set({ messages: messages });
  },
}));

export const getMessages = () => useChatStore.getState().messages;

export default useChatStore;
