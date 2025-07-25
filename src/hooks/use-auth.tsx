"use client";

import { useGetUser } from "@/features/user/hooks/donor-user-queries";
import { getAccessToken } from "@/store/useAuthStore";
import useUserStore, { getCurrentOrg } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useAuth() {
  const router = useRouter();
  const { setUser, clearUserStore } = useUserStore();
  const { data: user, isError, isLoading } = useGetUser();

  useEffect(() => {
    const token = getAccessToken();

    if (user && user.is_superuser) {
      router.push("/admin/dashboard");
      return;
    }

    if (!token) {
      clearUserStore();
      router.push("/login");
      return;
    }

    if (!isError && !isLoading && user?.id) {
      setUser(user.id);
    }
  }, [user, isError, isLoading, router, setUser, clearUserStore]);
}

export default useAuth;
