import { MessageCircle } from "lucide-react";

function Page() {
    



    return (
        <div className="flex flex-col border rounded-2xl items-center justify-center h-full w-full text-center">
            <MessageCircle size={64} className="text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Conversation Selected</h2>
            <p className="text-gray-500">Select a chat from the list or start a new conversation to begin messaging.</p>
        </div>
    );
}

export default Page;