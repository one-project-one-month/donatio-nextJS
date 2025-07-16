import { useQuery } from "@tanstack/react-query"
import { getOrganizations } from "@/features/user/services/donor-organization-services"


export const useGetOrganizations = (page: number) => {

    return useQuery({
        queryKey: ['organizations', page],
        queryFn: () => getOrganizations(page)
    })
}