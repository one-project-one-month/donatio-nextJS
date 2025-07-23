import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserStore = {
  user: string | null;
  currentOrg: string | null;
  setUser: (user: string) => void;
  setCurrentOrg: (org: string) => void;
  clearUserStore: () => void;
};

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      currentOrg: null,
      setUser: (user: string) => {
        set({ user: user });
      },
      setCurrentOrg: (org: string) => {
        set({ currentOrg: org });
      },
      clearUserStore: () => {
        set({ user: null, currentOrg: null });
      }
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);


export const getCurrentOrg = () => useUserStore.getState().currentOrg;
export const getUser = () => useUserStore.getState().user;


export default useUserStore;
