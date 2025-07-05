import { Captions, Check } from "lucide-react";

type FormStepperProps = {
  formIndex: number;
  totalStep: number;
  captions: string[];
};

function FormStepper({ formIndex, captions, totalStep }: FormStepperProps) {
  return (
    <>
      <div className="flex w-full justify-center items-center gap-4">
        {Array.from({length: totalStep}, (_,i) => i+1).map((step, i) => (
          <div key={i} className="flex items-center gap-4">
            <span
              className={`flex items-center justify-center p-1 text-sm w-8 h-8 rounded-full transition-colors ${
                formIndex > step - 1
                  ? "bg-primary text-white"
                  : "bg-gray-300 text-white"
              }`}
            >
              {formIndex > step ? <Check size={15} /> : step}
            </span>
            {step < totalStep && (
              <span
                className={`h-1 w-10 md:w-28 rounded-full transition-colors ${
                  formIndex > step ? "bg-primary" : "bg-gray-300"
                }`}
              ></span>
            )}
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center items-center gap-9 md:gap-4 text-[10px] md:text-sm my-4">
        {captions.map(
          (caption, index) => {
            return (
              <span
                key={index}
                className={`md:flex-1 text-center ${
                  formIndex > index ? "text-black" : "text-gray-300"
                }`}
              >
                {caption}
              </span>
            );
          }
        )}
      </div>
    </>
  );
}

export default FormStepper;
