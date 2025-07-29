import Cookies from "js-cookie";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (
    accessToken: AuthStore["accessToken"],
    refreshToken?: AuthStore["refreshToken"]
  ) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setAccessToken: (
        accessToken: AuthStore["accessToken"],
        refreshToken?: AuthStore["refreshToken"]
      ) => {
        if (accessToken) {
          Cookies.set("accessToken", accessToken, {
            expires: 7, // 7 days
            // secure: process.env.NODE_ENV === "production",
          });
        }
        set({ accessToken, refreshToken });
      },
      logout: () => {
        Cookies.remove("accessToken");
        set({ accessToken: null, refreshToken: null });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const getAccessToken = () => useAuthStore.getState().accessToken;
export const getRefreshToken = () => useAuthStore.getState().refreshToken;

export default useAuthStore;
