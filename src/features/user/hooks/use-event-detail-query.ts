import API from "@/lib/api/axios";
import { Event } from "@/types/Event";
import { useQuery } from "@tanstack/react-query";

const fetchEventById = async (eventId: string): Promise<Event> => {
  const { data } = await API.get<Event>(`/events/${eventId}`);
  return data;
};

export const useEventDetailQuery = (eventId: string) => {
  return useQuery<Event, Error>({
    queryKey: ["event", eventId],
    queryFn: () => fetchEventById(eventId),
    enabled: !!eventId,
  });
};
