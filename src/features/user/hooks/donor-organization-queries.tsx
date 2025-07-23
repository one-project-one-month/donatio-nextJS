import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getOrganizationActivities, getOrganizationById, getOrganizationEvents, getOrganizations } from "@/features/user/services/donor-organization-services"
import { GetAllOrganizationsResponse, Organization } from "@/types/Organization"
import { GetAllEventsResponse } from "@/types/Event"
import { ActivityResponse } from "@/types/Activity"


export const useGetOrganizations = (page: number) => {

    return useQuery<GetAllOrganizationsResponse>({
        queryKey: ['organizations', page],
        queryFn: () => getOrganizations(page)
    })
}


export const useGetOrganizationById = (id: string) => {

    return useQuery<Organization>({
        queryKey: ['organizations', id],
        queryFn: () => getOrganizationById(id)
    })
}


export const useGetOrganizationEvents  = (id: string) => {

    return useQuery<GetAllEventsResponse>({
        queryKey: ['organizations', id, 'events'],
        queryFn: () => getOrganizationEvents(id),
    })
}

export const useGetOrganizationActivities = (id: string | null) => {
  return useInfiniteQuery<ActivityResponse>({
    queryKey: ['activities'],
    queryFn: ({ pageParam = 1 }) => getOrganizationActivities(pageParam as number, 10, id??""),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.next) {
        return pages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    staleTime: Infinity,
    enabled: !!id,
  });
};

