import { useMutation } from "@tanstack/react-query"
import { generateContent } from "../services/donor-chat-bot-services"


export const useGenerate = (setData: any) => {



    const { mutate: generate, isPending, isError } = useMutation({
        mutationFn: (msg: string) => generateContent(msg),
        onSuccess: (data) => {
            const res = {
                type: 'bot',
                message: data,
                time: new Date()
            }

            setData((prev: any) => {
                const newData = [...prev, res];
                return newData;
            });
        }
    });


    return { generate, isPending, isError}
}