import { ImageLightbox } from "@/components/common/image-lightbox";
import AppConfig from "@/lib/appConfig";
import { OrganizationProfile } from "@/types/Organization";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { CertificateListDialog } from "./certificate-list-dialog";

interface CertificationsProps {
  data: OrganizationProfile;
}

const Certifications = ({ data }: CertificationsProps) => {
  const { organization_request, kpay_qr_url, phone_number } = data;
  const allCertificates = organization_request.attachments;
  const visibleCertificates = allCertificates.slice(0, 3);
  const remainingCount = allCertificates.length - visibleCertificates.length;

  return (
    <section aria-labelledby="certifications-heading" className="space-y-4">
      <div className="flex justify-between items-center">
        <h2
          id="certifications-heading"
          className="text-xl md:text-2xl font-semibold"
        >
          Certifications
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:flex-1 grid grid-cols-3 gap-4">
          {visibleCertificates.map((certificate, index) => {
            const imageUrl = `${AppConfig.BASE_ORIGIN}${certificate.file}`;
            const isLastVisible = index === visibleCertificates.length - 1;
            const showRemainingCount = isLastVisible && remainingCount > 0;

            const imageContent = (
              <div className="relative w-full aspect-[16/10] rounded-md overflow-hidden cursor-pointer">
                <Image
                  src={imageUrl}
                  alt={`Certificate ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                {showRemainingCount && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-lg sm:text-2xl font-bold">
                      +{remainingCount}
                    </span>
                  </div>
                )}
              </div>
            );

            return showRemainingCount ? (
              <CertificateListDialog
                key={`${certificate.id}-dialog`}
                certificates={allCertificates}
              >
                {imageContent}
              </CertificateListDialog>
            ) : (
              <ImageLightbox
                key={certificate.id}
                imageUrl={imageUrl}
                altText={`Certificate ${index + 1}`}
              >
                {imageContent}
              </ImageLightbox>
            );
          })}
        </div>
        {(kpay_qr_url || phone_number) && (
          <div className="flex flex-row items-center gap-4 p-4 flex-shrink-0">
            {kpay_qr_url && (
              <>
                <div className="hidden md:block">
                  <QRCodeSVG value={kpay_qr_url} size={120} />
                </div>
                <div className="block md:hidden">
                  <QRCodeSVG value={kpay_qr_url} size={80} />
                </div>
              </>
            )}
            {phone_number && (
              <p className="text-base md:text-lg font-medium text-dodger-blue-600">
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
