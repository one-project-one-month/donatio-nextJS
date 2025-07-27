import { StaticImageData } from "next/image";

export const getRandomPlaceholder = (
  placeholderImages: StaticImageData[]
): StaticImageData => {
  const randomIndex = Math.floor(Math.random() * placeholderImages.length);
  return placeholderImages[randomIndex];
};
