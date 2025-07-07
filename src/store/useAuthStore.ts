import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
        set({ accessToken, refreshToken });
      },
      logout: () => {
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
