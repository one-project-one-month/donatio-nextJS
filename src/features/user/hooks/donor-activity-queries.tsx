'use client'

import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getActivitiesByIdService, getActivitiesService } from "../services/donor-activity-services"
import { Activity, ActivityResponse } from "@/types/Activity";

export const useGetActivities = (pageSize: number = 10, search?: string) => {
  return useInfiniteQuery<ActivityResponse>({
    queryKey: ['activities', search],
    queryFn: ({ pageParam = 1 }) => getActivitiesService(pageParam as number, pageSize, search),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.next) {
        return pages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    staleTime: Infinity,
  });
};


export const useGetActivityById = (id: string) => {


  return useQuery<Activity>({
    queryKey: ['activities', id],
    queryFn: () => getActivitiesByIdService(id),
    staleTime: Infinity
  })
}


