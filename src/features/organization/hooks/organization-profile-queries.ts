import { OrganizationProfile } from "@/types/Organization";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getOrganizationProfile,
  updateOrganizationProfile,
} from "../services/organization-profile-services";

export const useOrganizationProfileQuery = (id: string | null) => {
  return useQuery<OrganizationProfile>({
    queryKey: ["organization-profile", id],
    queryFn: () => getOrganizationProfile(id ?? ""),
    enabled: !!id,
  });
};

export const useUpdateOrganizationProfileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateOrganizationProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organization-profile"] });
    },
  });
};
