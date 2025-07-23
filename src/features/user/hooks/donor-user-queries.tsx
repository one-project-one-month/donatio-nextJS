import { useQuery } from "@tanstack/react-query"
import { getUserService } from "../services/donor-user-services"
import { User } from "@/types/User"


export const useGetUser = () => {

    return useQuery<User>({
        queryKey: ['user'],
        queryFn: getUserService,
        staleTime: Infinity,
        gcTime: Infinity,
    })
}