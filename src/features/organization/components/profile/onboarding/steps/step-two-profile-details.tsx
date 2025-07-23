import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { OnboardingFormValues } from "../onboarding-schema";

interface StepTwoProfileDetailsProps {
  form: UseFormReturn<OnboardingFormValues>;
}

const StepTwoProfileDetails = ({ form }: StepTwoProfileDetailsProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        <FormFileDropZone form={form} name="profile_image" label="Logo" />
        <FormFileDropZone form={form} name="banner" label="Banner" />
      </div>
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Organization Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us about your organization's mission and goals."
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default StepTwoProfileDetails;
