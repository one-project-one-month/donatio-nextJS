import ChatNav from "./chat-nav"
import ChatInput from "./chat-input"
import ChatMessageBox from "./chat-message-box"


type ChatWindowProps = {
  type: 'organization' | 'donor'
}


function ChatWindow({ type }: ChatWindowProps) {



  return (
    <div className='h-full border rounded-2xl flex flex-col justify-between'>
        <ChatNav />
        <ChatMessageBox type={type} />
        <ChatInput />
    </div>
  )
}

export default ChatWindow