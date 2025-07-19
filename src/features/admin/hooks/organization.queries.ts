import {
  Events,
  OrganizationRequest,
  PaginatedResponse,
  UpdatePayload,
  VerifiedOrganization,
} from "@/features/admin/types";
import API from "@/lib/api/axios";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const fetchOrganizationRequests = async (
  page: number
): Promise<PaginatedResponse<OrganizationRequest>> => {
  const { data } = await API.get(
    `/organization-requests/?page=${page}&status=pending`
  );
  return data;
};

export const useOrganizationRequests = (page: number) => {
  return useQuery<PaginatedResponse<OrganizationRequest>>({
    queryKey: ["organization-requests", page],
    queryFn: () => fetchOrganizationRequests(page),
    placeholderData: keepPreviousData,
  });
};

export const useUpdateOrganizationRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: UpdatePayload) => {
      const formData = new FormData();
      formData.append("status", status);

      return API.put(`/organization-requests/${id}/`, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organization-requests"] });
    },
  });
};

const fetchVerifiedOrganizations = async (
  page: number
): Promise<PaginatedResponse<VerifiedOrganization>> => {
  const { data } = await API.get(`/organizations/?page=${page}`);
  return data;
};

export const useVerifiedOrganizations = (page: number) => {
  return useQuery<PaginatedResponse<VerifiedOrganization>>({
    queryKey: ["verified-organizations", page],
    queryFn: () => fetchVerifiedOrganizations(page),
    placeholderData: keepPreviousData,
  });
};

export const useDeleteOrganization = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => API.delete(`/organizations/${id}/`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["verified-organizations"] });
    },
  });
};

const fetchEvents = async (
  page: number
): Promise<PaginatedResponse<Events>> => {
  const { data } = await API.get(`/events/?page=${page}`);
  return data;
};

export const useEvents = (page: number) => {
  return useQuery<PaginatedResponse<Events>>({
    queryKey: ["events", page],
    queryFn: () => fetchEvents(page),
    placeholderData: keepPreviousData,
  });
};
