import ChatNav from "./chat-nav"
import ChatInput from "./chat-input"
import ChatMessageBox from "./chat-message-box"
import { ChatHistory, MessageInput } from "@/types/Chat"


type ChatWindowProps = {
  type: 'organization' | 'donor'
  sendMessage: (data: MessageInput) => void;
  history: ChatHistory[] |  null;
  navData: { name: string, logo: string}
}


function ChatWindow({ type, sendMessage, history, navData }: ChatWindowProps) {



  return (
    <div className='h-full border rounded-2xl flex flex-col justify-between'>
        <ChatNav data={navData} />
        <ChatMessageBox type={type} history={history} />
        <ChatInput sendMessage={sendMessage} type={type} />
    </div>
  )
}

export default ChatWindow