import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import { UseFormReturn } from "react-hook-form";
import { OnboardingFormValues } from "../onboarding-schema";

interface StepThreePaymentQrProps {
  form: UseFormReturn<OnboardingFormValues>;
}

const StepThreePaymentQr = ({ form }: StepThreePaymentQrProps) => {
  return (
    <div className="grid gap-4 py-4">
      <FormFileDropZone
        form={form}
        name="kpay_qr_image"
        label="Donation QR Code"
        required
      />
    </div>
  );
};

export default StepThreePaymentQr;