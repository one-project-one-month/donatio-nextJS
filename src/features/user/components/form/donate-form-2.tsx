import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QRCodeSVG } from "qrcode.react";
import { useForm } from "react-hook-form";
import z from "zod";
import { FilePlus2 } from "lucide-react";
import { getDonateFormData } from "@/store/donateStore";
import { useGetOrganizationById } from "../../hooks/donor-organization-queries";

const formTwoSchema = z.object({
  screenShot: z.any().refine((val) => {
      return val && val.length > 0 && val.every((file: File) => file instanceof File);
    }, "Image shouldn't be empty"),
});

type formTwoValue = z.infer<typeof formTwoSchema>;

type DonateForm2Props = {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  setFormData: (data: any) => void;
  orgId: string;
};

function DonateForm2({ setFormIndex, setFormData, orgId }: DonateForm2Props) {
  const form = useForm<formTwoValue>({
    resolver: zodResolver(formTwoSchema),
    defaultValues: {
      screenShot: undefined,
    },
  });


  const { data: org, isLoading } = useGetOrganizationById(orgId);




  const handleContinue = (data: formTwoValue) => {


    const formData = {
      ...getDonateFormData(),
      screenShot: data.screenShot
    }


    setFormIndex(3);
    setFormData(formData);
  };

  return (
    <div>
      <h1 className="mb-2 font-semibold">Scan here for Payment</h1>
      { isLoading? (<div>Loading..</div>): (<div className="flex border rounded-lg p-3 space-x-4 mb-3">
        <QRCodeSVG
          value={org?.kpay_qr_url??""}
          size={100}
        ></QRCodeSVG>
        <div className="flex flex-col justify-between">
          <span>
            <p className="text-sm">{org?.name}</p>
            <p className="text-primary text-lg font-sans font-semibold">
              {org?.phone_number}
            </p>
          </span>
          <span className="text-xs text-neutral-500">
            Please use KBZ Pay scanner for your payment.
          </span>
        </div>
      </div>)}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleContinue)}>
          <FormFileDropZone
            name="screenShot"
            type="file"
            form={form}
            label={
              <span className="flex items-center gap-2">
                <FilePlus2 className="w-5 h-5 text-primary" />
                Upload Receipt Screenshot
              </span>
            }
            labelClass="mb-1 font-semibold text-base"
            wrapperClass="mb-3"
            required
          />
          <Button className="w-full rounded-full py-6 md:py-8 md:mt-5">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default DonateForm2;
