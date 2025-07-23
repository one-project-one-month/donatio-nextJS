"use client";

import FormStepper from "@/components/common/form-stepper";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { showToast } from "@/lib/toast";
import { OrganizationProfile } from "@/types/Organization";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateOrganizationProfileMutation } from "../../../hooks/organization-profile-queries";
import {
  ONBOARDING_STEPS_CONFIG,
  isStepComplete,
} from "../../../utils/profile-completion";
import {
  OnboardingFormValues,
  onboardingFormSchema,
} from "./onboarding-schema";
import StepOneContactInfo from "./steps/step-one-contact-info";
import StepThreePaymentQr from "./steps/step-three-payment-qr";
import StepTwoProfileDetails from "./steps/step-two-profile-details";

interface OnboardingModalProps {
  organization: OrganizationProfile;
  isOpen: boolean;
  onClose: () => void;
}

const OnboardingModal = ({
  organization,
  isOpen,
  onClose,
}: OnboardingModalProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { mutateAsync: updateProfile, isPending } =
    useUpdateOrganizationProfileMutation();

  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingFormSchema),
    mode: "onChange",
    defaultValues: {
      email: organization.email || "",
      phone_number: organization.phone_number || "",
      description: organization.description || "",
      profile_image: organization.attachments?.[0]?.file
        ? [organization.attachments[0].file]
        : undefined,
      banner: organization.attachments?.[1]?.file
        ? [organization.attachments[1].file]
        : undefined,
      kpay_qr_image: organization.kpay_qr_url
        ? [organization.kpay_qr_url]
        : undefined,
    },
  });

  // FIX: Always show all steps, don't filter them out
  const allSteps = useMemo(() => [
    {
      id: "contact",
      caption: "Contact Info",
      component: <StepOneContactInfo form={form} />,
      fields: ONBOARDING_STEPS_CONFIG[0].fields,
    },
    {
      id: "branding",
      caption: "Profile Details",
      component: <StepTwoProfileDetails form={form} />,
      fields: ONBOARDING_STEPS_CONFIG[1].fields,
    },
    {
      id: "payment",
      caption: "Payment QR",
      component: <StepThreePaymentQr form={form} />,
      fields: ONBOARDING_STEPS_CONFIG[2].fields,
    },
  ], [form]);

  // Get only incomplete steps for navigation
  const incompleteSteps = useMemo(() => {
    return allSteps.filter(
      (step) => !isStepComplete(organization, step.id as any)
    );
  }, [organization, allSteps]);

  // Find the current step index in incomplete steps
  const currentIncompleteStepIndex = useMemo(() => {
    if (incompleteSteps.length === 0) return -1;
    
    const currentIncompleteStepId = incompleteSteps[0].id;
    return allSteps.findIndex(step => step.id === currentIncompleteStepId);
  }, [incompleteSteps, allSteps]);

  // Use the first incomplete step as current step
  const currentStep = incompleteSteps[0] || allSteps[0];
  const totalSteps = allSteps.length;

  const handleNext = async () => {
    if (!currentStep) return;

    const fieldsToValidate =
      currentStep.fields as (keyof OnboardingFormValues)[];
    const isValid = await form.trigger(fieldsToValidate);

    if (!isValid) return;

    const values = form.getValues();
    const dataToSubmit = fieldsToValidate.reduce((obj, field) => {
      obj[field] = values[field];
      return obj;
    }, {} as Partial<OnboardingFormValues>);

    try {
      await updateProfile(dataToSubmit as Partial<OrganizationProfile>);

      // Move to next incomplete step
      if (incompleteSteps.length > 1) {
        // Find next incomplete step
        const nextIncompleteStep = incompleteSteps[1];
        const nextIndex = allSteps.findIndex(step => step.id === nextIncompleteStep.id);
        setCurrentStepIndex(nextIndex);
      } else {
        showToast.success("Profile completed! Thank you.");
        onClose();
      }
    } catch (error) {
      showToast.error("Failed to save. Please try again.");
      console.error(error);
    }
  };

  const handleBack = () => {
    // Find previous incomplete step
    if (incompleteSteps.length > 1) {
      const currentIncompleteIndex = incompleteSteps.findIndex(
        step => step.id === currentStep.id
      );
      if (currentIncompleteIndex > 0) {
        const prevIncompleteStep = incompleteSteps[currentIncompleteIndex - 1];
        const prevIndex = allSteps.findIndex(step => step.id === prevIncompleteStep.id);
        setCurrentStepIndex(prevIndex);
      }
    }
  };

  // Check if current step is the first incomplete step
  const isFirstStep = incompleteSteps.length > 0 && 
    currentStep?.id === incompleteSteps[0]?.id;

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Complete Your Organization Profile
          </DialogTitle>
          <DialogDescription className="text-center">
            Fill in the details to build trust with your donors and get started.
          </DialogDescription>
        </DialogHeader>

        <div className="p-6">
          {/* FIX: Always show all steps in stepper */}
          <FormStepper
            formIndex={currentStepIndex}
            totalStep={totalSteps}
            captions={allSteps.map((s) => s.caption)}
          />
          <div className="mt-8">
            <Form {...form}>
              <form>{currentStep?.component}</form>
            </Form>
          </div>
        </div>

        <DialogFooter className="flex justify-between w-full">
          {/* FIX: Show back button appropriately */}
          {!isFirstStep && (
            <Button variant="outline" onClick={handleBack} disabled={isPending}>
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={isPending}
            className="ml-auto cursor-pointer"
          >
            {isPending
              ? "Saving..."
              : incompleteSteps.length <= 1
              ? "Finish"
              : "Next"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;