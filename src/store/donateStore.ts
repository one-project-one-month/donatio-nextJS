import { create } from "zustand";

type DonateFormData = {
  orgId: string;
  eventId: string;
  organization: string;
  event: string;
  amount: number;
  phoneNumber: string;
  screenShot: File | undefined;
};

type DonateStore = {
    donateFormData: DonateFormData | null;
    setDonateForm: (data: DonateFormData | null) => void;
};


const useDonateStore = create<DonateStore>((set) => ({
    donateFormData: null,
    setDonateForm: (data: DonateFormData | null) => {
        set({ donateFormData: data})
    }
}));

export const getDonateFormData = () => useDonateStore.getState().donateFormData;
export const getOrgId = () => useDonateStore.getState().donateFormData?.orgId;
export const getEventId = () => useDonateStore.getState().donateFormData?.eventId;


export default useDonateStore;
