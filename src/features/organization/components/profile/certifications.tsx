import AppConfig from "@/lib/appConfig";
import { OrganizationProfile } from "@/types/Organization";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

interface CertificationsProps {
  data: OrganizationProfile;
}

const Certifications = ({ data }: CertificationsProps) => {
  const { organization_request, kpay_qr_url, phone_number } = data;
  const certificates = organization_request.attachments;

  return (
    <section aria-labelledby="certifications-heading" className="space-y-4">
      <h2 id="certifications-heading" className="text-2xl font-semibold">
        Certifications
      </h2>
      <div className="flex justify-between items-center gap-8">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="relative w-full aspect-[4/3]">
              <Image
                src={`${AppConfig.BASE_ORIGIN}${certificate.file}`}
                alt="Certificate"
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        {(kpay_qr_url || phone_number) && (
          <div className="flex items-center gap-4">
            {kpay_qr_url && <QRCodeSVG value={kpay_qr_url} size={144} />}
            {phone_number && (
              <p className="text-xl font-medium text-dodger-blue-600">
                09{phone_number}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
