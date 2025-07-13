import {
  OrganizationRequest,
  OrganizationResponse,
  UpdatePayload,
  VerifiedOrganization,
} from "@/features/admin/types/admin";
import API from "@/lib/api/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const fetchOrganizationRequests = async (
  page: number
): Promise<OrganizationResponse<OrganizationRequest>> => {
  const { data } = await API.get(
    `/organization-requests/?page=${page}&status=pending`
  );
  return data;
};

export const useOrganizationRequests = (page: number) => {
  return useQuery<OrganizationResponse<OrganizationRequest>>({
    queryKey: ["organization-requests", page],
    queryFn: () => fetchOrganizationRequests(page),
    placeholderData: (prev) => prev,
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

export const fetchVerifiedOrganizations = async (
  page: number
): Promise<OrganizationResponse<VerifiedOrganization>> => {
  const { data } = await API.get(`/organizations/?page=${page}`);
  return data;
};

export const useVerifiedOrganizations = (page: number) => {
  return useQuery<OrganizationResponse<VerifiedOrganization>>({
    queryKey: ["verified-organizations", page],
    queryFn: () => fetchVerifiedOrganizations(page),
    placeholderData: (prev) => prev,
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
