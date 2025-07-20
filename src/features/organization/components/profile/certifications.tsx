import certificate from "@/assets/image/certificate.png";
import qrCode from "@/assets/image/qr_code.png";
import Image from "next/image";

const Certifications = () => {
  return (
    <section aria-labelledby="certifications-heading" className="space-y-4">
      <h2 id="certifications-heading" className="text-2xl font-semibold">
        Certifications
      </h2>
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image src={certificate} alt="Certificate 1" className="rounded-lg" />
          <Image src={certificate} alt="Certificate 2" className="rounded-lg" />
          <Image src={certificate} alt="Certificate 3" className="rounded-lg" />
        </div>
        <div className="flex items-center gap-2">
          <Image src={qrCode} alt="QR Code" className="w-32 h-32" />
          <p className="text-xl font-medium text-dodger-blue-600">
            09 765 432 198
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
