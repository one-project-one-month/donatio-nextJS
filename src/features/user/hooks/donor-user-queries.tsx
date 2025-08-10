import { useQuery } from "@tanstack/react-query";
import { getUserService } from "../services/donor-user-services";
import { getAccessToken } from "@/store/useAuthStore";
import { User } from "@/types/User";

export const useGetUser = () => {
  const token = getAccessToken();
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: getUserService,
    enabled: !!token,
  });
};
