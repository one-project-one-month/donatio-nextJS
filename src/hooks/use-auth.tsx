"use client";

import { useGetUser } from "@/features/user/hooks/donor-user-queries";
import useAuthStore from "@/store/useAuthStore";
import useUserStore from "@/store/userStore";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuth() {
  const { data: user, isLoading, isError, isSuccess } = useGetUser();
  const { logout: clearAuthStore } = useAuthStore();
  const { clearUserStore, setUser } = useUserStore();
  const queryClient = useQueryClient();
  const router = useRouter();


  useEffect(() => {

  setUser(user?.id??"");

  },[user]);

  const logout = () => {
    clearAuthStore();
    clearUserStore();
    queryClient.invalidateQueries({ queryKey: ["user"] });
    router.push("/");
  };

  return {
    user,
    isAuthenticated: isSuccess && !!user,
    isLoading,
    isError,
    logout,
  };
}
