import ChatNav from "./chat-nav"
import ChatInput from "./chat-input"
import ChatMessageBox from "./chat-message-box"
import { ChatHistory, MessageInput } from "@/types/Chat"


type ChatWindowProps = {
  type: 'organization' | 'donar'
  sendMessage: (data: MessageInput) => void;
  history: ChatHistory[] |  null;
}


function ChatWindow({ type, sendMessage, history }: ChatWindowProps) {



  return (
    <div className='h-full border rounded-2xl flex flex-col justify-between'>
        <ChatNav />
        <ChatMessageBox type={type} history={history} />
        <ChatInput sendMessage={sendMessage} type={type} />
    </div>
  )
}

export default ChatWindow