import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getOrganizationActivities, getOrganizationById, getOrganizationEvents, getOrganizations, requestOrganizationAdmin } from "@/features/user/services/donor-organization-services"
import { GetAllOrganizationsResponse, Organization } from "@/types/Organization"
import { EventsResponse } from "@/types/Event"
import { ActivityResponse } from "@/types/Activity"
import { showToast } from "@/lib/toast"


export const useGetOrganizations = (page: number, pageSize?: number, search?: string) => {

    return useQuery<GetAllOrganizationsResponse>({
        queryKey: ['organizations', page, search],
        queryFn: () => getOrganizations(page, pageSize, search)
    })
}


export const useGetOrganizationById = (id: string) => {

    return useQuery<Organization>({
        queryKey: ['organizations', id],
        queryFn: () => getOrganizationById(id)
    })
}


export const useGetOrganizationEvents  = (id: string) => {

    return useQuery<EventsResponse>({
        queryKey: ['organizations', id, 'events'],
        queryFn: () => getOrganizationEvents(id),
    })
}

export const useGetOrganizationActivities = (id: string | null) => {
  return useInfiniteQuery<ActivityResponse>({
    queryKey: ['organizations', id, 'activities'],
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


export const useRequestOrganization = () => {

  const queryClient = useQueryClient();


    const { mutateAsync: requestOrganization} = useMutation({
      mutationFn: (data: FormData) => requestOrganizationAdmin(data),
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['organizations'], exact: false});
        showToast.success("Your application has been submitted.")
      },
      onError: () => {
        showToast.error("Failed to submit application. Please try again.")
      }
    });

    return { requestOrganization }
}

