import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/image/logo.svg";

function LogoName() {
  return (
    <>
      <Link
        href="/"
        className="flex flex-start md:justify-center items-center space-x-2"
      >
        <Image src={logo} alt="Donatio Logo" className="h-8 w-8" />
        <span className="hidden text-2xl font-semibold text-dodger-blue-600 md:block">
          Donatio
        </span>
      </Link>
    </>
  );
}

export default LogoName;
