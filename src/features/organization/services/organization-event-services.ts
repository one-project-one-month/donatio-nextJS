import API from "@/lib/api/axios";
import { getCurrentOrg } from "@/store/userStore";
import { CreateEventPayload } from "@/types/Event";

type CreateServiceProps = {
  data: FormData;
};

type GetServiceProps = {
  page: number;
  page_size: number;
};

type UpdateServiceProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

type DeleteServiceProps = {
  id: string;
};

const ORGANIZATION_ID = getCurrentOrg();

export const createEventService = async ({ data }: CreateServiceProps) => {
  try {
    const response = await API.post(
      `/organizations/${ORGANIZATION_ID}/events/`,
      data,
    );
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const getEventService = async ({ page, page_size }: GetServiceProps) => {
  try {
    const response = await API.get(
      `/organizations/${ORGANIZATION_ID}/events?page=${page ?? 1}&page_size=${page_size}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const updateEventService = async ({ id, data }: UpdateServiceProps) => {
  try {
    const response = await API.patch(
      `/organizations/${ORGANIZATION_ID}/events/${id}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

// confirm later
export const closeEventService = async ({ id }: DeleteServiceProps) => {
  try {
    const response = await API.delete(
      `/organizations/${ORGANIZATION_ID}/events/${id}/`,
    );
    return response.data;
  } catch (error) {
    console.error("Error closing event:", error);
    throw error;
  }
};
