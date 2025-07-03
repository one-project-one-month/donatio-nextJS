import ChatNav from "./chat-nav"
import ChatInput from "./chat-input"
import ChatMessageBox from "./chat-message-box"


function ChatWindow() {
  return (
    <div className='h-full border rounded-2xl flex flex-col justify-between'>
        <ChatNav />
        <ChatMessageBox />
        <ChatInput />
    </div>
  )
}

export default ChatWindow