"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ImageDown, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import AppConfig from "@/lib/appConfig";

type TableImageHolderProps = {
  data: {
    id: string;
    file: string;
  }[] | null;
};

function TableImageHolder({ data }: TableImageHolderProps) {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    initial: 0,
  });

  const handleOpen = () => {
    if (data && data.length > 0) setOpen(true);
  };

  return (
    <>
      {/* Thumbnail */}
      <div className="relative cursor-pointer group" onClick={handleOpen}>
        {data && data.length !== 0 ? (
          <>
            <img
              src={`${data[0].file}`}
              alt="Preview"
              className="w-28 h-20 object-cover rounded-md"
            />
            {data.length > 1 && (
              <span className="absolute top-0 left-0 bg-black/50 z-10 text-white w-28 h-20 flex items-center justify-center text-sm">
                +{data.length - 1}
              </span>
            )}
          </>
        ) : (
          <div className="w-28 h-20 flex flex-col items-center justify-center text-gray-300 border border-dashed rounded-md">
            <ImageDown className="mb-1" />
            <p className="text-xs">No Images</p>
          </div>
        )}
      </div>

      {/* Fullscreen Carousel Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            <X size={30} />
          </button>

          {data && data.length > 0 && (
            <div
              className="relative w-full max-w-5xl px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div ref={sliderRef} className="keen-slider">
                {data.map((img) => (
                  <div
                    className="keen-slider__slide flex justify-center items-center"
                    key={img.id}
                  >
                    <div className="relative w-full h-[70vh]">
                      <Image
                        src={img.file}
                        alt={img.file}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              {data.length > 1 && (
                <>
                  <button
                    className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 text-white z-40 hover:text-gray-300"
                    onClick={() => instanceRef.current?.prev()}
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <button
                    className="absolute right-[-100px]  top-1/2 transform -translate-y-1/2 text-white z-40 hover:text-gray-300"
                    onClick={() => instanceRef.current?.next()}
                  >
                    <ChevronRight size={40} />
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default TableImageHolder;
