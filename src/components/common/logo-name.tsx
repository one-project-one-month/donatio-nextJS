import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/image/logo.svg";

function LogoName() {
  return (
    <>
      <Link href="/" className="flex justify-center items-center space-x-2">
        <Image src={logo} alt="Donatio Logo" />
        <span className="text-2xl font-semibold text-dodger-blue-600">
          Donatio
        </span>
      </Link>
    </>
  );
}

export default LogoName;
