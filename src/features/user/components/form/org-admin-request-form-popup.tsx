"use client";

import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import FormInput from "@/components/common/form-inputs/form-inputs";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { FilePlus2 } from "lucide-react";
import { useRequestOrganization } from "../../hooks/donor-organization-queries";

const requestFormSchema = z.object({
  name: z
    .string()
    .min(2, "Organization Name must be at least 2 characters")
    .nonempty("Organization Name shouldn't be empty"),
  type: z
    .string()
    .min(2, "Organization type must be at least 2 characters")
    .nonempty("This field shouldn't be empty"),
  attachment: z
      .any(),
});

type requestFormValues = z.infer<typeof requestFormSchema>;

type OrgAdminRequestFormPopUpProps = {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
};

function OrgAdminRequestFormPopUp({
  isVisible,
  setIsVisible,
}: OrgAdminRequestFormPopUpProps) {
  const form = useForm<requestFormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      name: "",
      type: "",
      attachment: undefined,
    },
  });

  const { requestOrganization } = useRequestOrganization();

  const handleRequestSubmit = async(data: requestFormValues) => {

    const formData = new FormData();
    formData.append('organization_name', data.name);
    for(const file of data.attachment) {
      formData.append('uploaded_attachments', file);
    }
    formData.append('type', data.type);

    console.log([...formData.entries()]);

    const result = await requestOrganization(formData);

    if(!result) return;

    setIsVisible(false);
    form.reset();
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={() => setIsVisible(false)}
          className="fixed bg-black/40 top-0 left-0 w-full h-dvh flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[35rem] bg-white rounded-2xl p-8 m-2"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleRequestSubmit)}>
                <h2 className="md:text-3xl text-xl font-extrabold tracking-tight text-center mb-8">
                  Organization Request Form
                </h2>
                <FormInput
                  form={form}
                  name="name"
                  label="Organization Name"
                  labelClass="mb-1 font-semibold text-base"
                  wrapperClass="mb-5 mb:mb-3"
                  className="h-12"
                  placeholder="Enter organization name"
                  required
                />
                <FormInput
                  form={form}
                  name="type"
                  label="Organization Type"
                  labelClass="mb-1 font-semibold text-base"
                  wrapperClass="mb-5 mb:mb-3"
                  className="h-12"
                  placeholder="Enter organization type"
                  required
                />
                <FormFileDropZone
                  name="attachment"
                  type="file"
                  form={form}
                  label={
                    <span className="flex items-center gap-2">
                      <FilePlus2 className="w-5 h-5 text-primary" />
                      Registration certificate
                    </span>
                  }
                  labelClass="mb-1 font-semibold text-base"
                  wrapperClass="mb-3"
                  required
                />
                <Button className="w-full rounded-full py-6 md:py-8 md:mt-5">
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}

export default OrgAdminRequestFormPopUp;
