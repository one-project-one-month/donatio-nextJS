import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createEventService,
  updateEventService,
  getEventService,
  closeEventService,
} from "../services/organization-event-services";
import { CreateEventPayload, EventsResponse } from "@/types/Event";
import { showToast } from "@/lib/toast";

// Create Event Hook : Confirm Start Date
export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createEvent } = useMutation({
    mutationFn: (data: FormData) => createEventService({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events", "all"] });
    },
    onError: () => {
      showToast.error("Failed to create event. Please try again.");
    },
  });

  return { createEvent };
};

// Update Later
export const useCloseEvent = () => {
  const queryClient = useQueryClient();

  const { mutate: closeEvent } = useMutation({
    mutationFn: (id: string) => closeEventService({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"], exact: false });
    },
    onError: () => {
      showToast.error("Failed to close event. Please try again.");
    },
  });

  return { closeEvent };
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  const { mutate: updateEvent } = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateEventService({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"], exact: false });
    },
    onError: () => {
      showToast.error("Failed to update event. Please try again.");
    },
  });

  return { updateEvent };
};

export const useGetEvents = (
  page: number,
  pageSize: number,
  filter?: string | number
) => {
  return useQuery<EventsResponse>({
    queryKey: ["events", filter ?? "all", page],
    queryFn: () => getEventService({ page, page_size: pageSize }),
  });
};
