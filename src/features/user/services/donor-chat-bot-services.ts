import { BOTAPI } from "@/lib/api/axios";



export const generateContent = async (msg: string) => {
    try {
        const response = await BOTAPI.post('/generate', { sender_role: 'user', question: msg});

        return response.data;

    } catch (err) {
        throw err;
    }
}