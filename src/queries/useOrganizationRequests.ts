import API from "@/lib/api/axios";
import {
  OrganizationRequest,
  UpdatePayload,
  VerifiedOrganization,
} from "@/types/admin";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const fetchOrganizationRequests = async (): Promise<
  OrganizationRequest[]
> => {
  const { data } = await API.get("/organization-requests");
  return data.results;
};

export const useOrganizationRequests = () => {
  return useQuery({
    queryKey: ["organization-requests"],
    queryFn: fetchOrganizationRequests,
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

export const fetchVerifiedOrganizations = async (): Promise<
  VerifiedOrganization[]
> => {
  const { data } = await API.get("/organizations");
  return data.results;
};

export const useVerifiedOrganizations = () => {
  return useQuery({
    queryKey: ["verified-organization"],
    queryFn: fetchVerifiedOrganizations,
  });
};
