import FormInput from "@/components/common/form-inputs/form-inputs";
import FormPhoneNumberInput from "@/components/common/form-inputs/form-phone-number-input";
import { UseFormReturn } from "react-hook-form";
import { OnboardingFormValues } from "../onboarding-schema";

interface StepOneContactInfoProps {
  form: UseFormReturn<OnboardingFormValues>;
}

const StepOneContactInfo = ({ form }: StepOneContactInfoProps) => {
  return (
    <div className="grid gap-4 py-4">
      <FormInput
        form={form}
        name="email"
        label="Contact Email"
        type="email"
        placeholder="contact@myorg.com"
        required
      />
      <FormPhoneNumberInput
        form={form}
        name="phone_number"
        label="Phone Number"
        placeholder="123 456 789"
        required
      />
    </div>
  );
};

export default StepOneContactInfo;
