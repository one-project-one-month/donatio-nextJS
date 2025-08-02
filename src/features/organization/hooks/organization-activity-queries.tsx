import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createOrganizationActivityService, deleteOrganizationActivityService, getOrganizationActivityService, updateOrganizationActivityService } from "../services/organization-activity-services"
import { ActivityResponse } from "@/types/Activity"
import { showToast } from "@/lib/toast";


export const useCreateActivity = () => {

    const queryClient = useQueryClient();

    const { mutateAsync: createActivity} = useMutation({
        mutationFn: (data: FormData) => createOrganizationActivityService({ data }),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['activities', 'all']});
            showToast.success("Created activity successfully..")
        },
        onError: () => {
            showToast.error("Failed to create activity data. Please try again..")
        }
    });

    return { createActivity }
}


export const useDeleteActivity = () => {

    const queryClient = useQueryClient();
    
    const { mutate: deleteActivity } = useMutation({
        mutationFn: (id: string) => deleteOrganizationActivityService({ id }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['activities'], exact: false});
        },
        onError: () => {
            showToast.error("Failed to delete activity. Please try again..")
        }
    });

    return { deleteActivity }
}

export const useUpadateActivity = () => {

    const queryClient = useQueryClient();

    const { mutateAsync: updateActivity } = useMutation({
        mutationFn: ({ id, data}: {id: string, data: any}) => updateOrganizationActivityService({id, data}),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['activities'], exact: false});
        },
        onError: () => {
            showToast.error("Failed to update activity. Please try again..")
        }
    })

    return { updateActivity }
}


export const useGetActivity = (page: number, pageSize: number, filter?: number) => {


    return useQuery<ActivityResponse>({
        queryKey: ['activities', filter?? 'all', page],
        queryFn: () => getOrganizationActivityService({ page, page_size: pageSize})
    })
}

