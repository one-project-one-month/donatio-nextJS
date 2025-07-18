'use client'

import { useQuery } from "@tanstack/react-query"
import { getEvents } from "@/features/user/services/donor-event-services"
import { GetAllEventsResponse } from "../../../types/Event";



export const useGetEvents = (page: number, size: number) => {

    return useQuery<GetAllEventsResponse>({
        queryKey: ['events', page],
        queryFn: () => getEvents(page, size),
    });
}