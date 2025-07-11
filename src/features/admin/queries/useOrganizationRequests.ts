import API from "@/lib/api/axios";
import {
  OrganizationRequest,
  OrganizationResponse,
  UpdatePayload,
  VerifiedOrganization,
} from "@/features/admin/types/admin";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const fetchOrganizationRequests = async <
  T extends OrganizationRequest | VerifiedOrganization
>(
  page: number
): Promise<OrganizationResponse<T>> => {
  const { data } = await API.get(
    `/organization-requests/?page=${page}&status=pending`
  );
  return data;
};

export const useOrganizationRequests = <
  T extends OrganizationRequest | VerifiedOrganization
>(
  page: number
) => {
  return useQuery<OrganizationResponse<T>>({
    queryKey: ["organization-requests", page],
    queryFn: () => fetchOrganizationRequests(page),
    placeholderData: (previousData) => previousData,
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
