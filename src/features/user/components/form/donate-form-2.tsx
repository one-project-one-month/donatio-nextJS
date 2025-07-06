import FormFileDropZone from "@/components/common/form-inputs/form-file-drop";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QRCodeSVG } from "qrcode.react";
import { useForm } from "react-hook-form";
import z from "zod";
import { DonateFormData } from "./donate-form-popup";
import { FilePlus2 } from "lucide-react";
import { getDonateFormData } from "@/store/donateStore";

const formTwoSchema = z.object({
  screenShot: z
    .instanceof(File)
    .refine((file) => file.type === "image/jpeg" || file.type === "image/png", {
      message: "File must be a JPG or PNG image",
    }),
});

type formTwoValue = z.infer<typeof formTwoSchema>;

type DonateForm2Props = {
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  setFormData: (data: any) => void;
};

function DonateForm2({ setFormIndex, setFormData }: DonateForm2Props) {
  const form = useForm<formTwoValue>({
    resolver: zodResolver(formTwoSchema),
    defaultValues: {
      screenShot: undefined,
    },
  });

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
      <div className="flex border rounded-lg p-3 space-x-4 mb-3">
        <QRCodeSVG
          value="hQZLQlpQYXlhQE8C8FACEFECMTFXFgmVUxl5TSUHEBAfnwgEAQGfJAEwF6197ca0f5f80"
          size={100}
        ></QRCodeSVG>
        <div className="flex flex-col justify-between">
          <span>
            <p className="text-sm">Alu Myanmar</p>
            <p className="text-primary text-lg font-sans font-semibold">
              09955319794
            </p>
          </span>
          <span className="text-xs text-neutral-500">
            Please use KBZ Pay scanner for your payment.
          </span>
        </div>
      </div>
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
