import { create } from "zustand";

type DonateFormData = {
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


export default useDonateStore;
