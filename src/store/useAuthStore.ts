import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AuthStore = {
  accessToken: string | null;
  refreshToken: string | null;
  userInfo: {
    id?: number;
    username?: string;
    email?: string;
    profile?: string;
  };
  setAccessToken: (
    accessToken: AuthStore["accessToken"],
    refreshToken?: AuthStore["refreshToken"]
  ) => void;
  setUserInfo: (user: AuthStore["userInfo"]) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      userInfo: {},
      setAccessToken: (
        accessToken: AuthStore["accessToken"],
        refreshToken?: AuthStore["refreshToken"]
      ) => {
        set({ accessToken, refreshToken });
      },
      setUserInfo: (user) => set({ userInfo: user }),
      logout: () => {
        set({ accessToken: null, refreshToken: null, userInfo: {} });
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
