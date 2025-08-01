interface AnimatedHamburgerIconProps {
  isOpen: boolean;
}

export const AnimatedHamburgerIcon = ({
  isOpen,
}: AnimatedHamburgerIconProps) => {
  return (
    <div className="relative h-5 w-5 cursor-pointer">
      <span
        className={`absolute block h-0.5 w-full transform bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "top-1/2 rotate-45" : "top-[20%]"
        }`}
      />
      <span
        className={`absolute top-1/2 block h-0.5 w-full transform bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute block h-0.5 w-full transform bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "top-1/2 -rotate-45" : "top-[80%]"
        }`}
      />
    </div>
  );
};
