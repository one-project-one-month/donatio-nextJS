"use client";

import { getEvents } from "@/features/user/services/donor-event-services";
import { GetAllEventsResponse } from "@/types/Event";
import { useQuery } from "@tanstack/react-query";

export const useGetEvents = (page: number, size: number, search?: string) => {
  return useQuery<GetAllEventsResponse, Error>({
    queryKey: ["events", page, size, search],
    queryFn: () => getEvents(page, size, search),
  });
};
