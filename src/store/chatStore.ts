import { Message } from "@/types/Chat";
import { create } from "zustand";


type ChatStore = {
    messages: Message[],
    addMessage: (message: Message) => void;
    setMessage: (messages: Message[]) => void;
}


const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (message: Message) => {
    set((state) => ({
      messages: [...state.messages, message]
    }))
  },
  setMessage: (messages: Message[]) => {
    set({messages: messages});
  }
}));


export const getMessages = () => useChatStore.getState().messages;


export default  useChatStore;