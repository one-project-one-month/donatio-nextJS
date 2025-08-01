'use client'

import ChatWindow from '@/components/core/chat/chat-window'
import { useGetChatHistory } from '@/features/organization/hooks/organization-chat-queries'
import { useGetOrganizationById } from '@/features/user/hooks/donor-organization-queries'
import {useChatSocket} from '@/hooks/use-chat-socket'
import { getCurrentOrg } from '@/store/userStore'
import { useParams } from 'next/navigation'

function ChatPage() {

  const { chat_id } = useParams();
  const id = chat_id as string;

  const currentOrg = getCurrentOrg();


  const {data: org} = useGetOrganizationById(currentOrg??"");



  const { send } = useChatSocket(id);
  const { data: history } = useGetChatHistory(id);

  return (
    <div className='h-full w-full'>
      <ChatWindow sendMessage={send} type='organization' history={history?? null} navData={{name: org?.name??"", logo: org?.attachments[0].file??""}} />
    </div>
  );
}

export default ChatPage;
