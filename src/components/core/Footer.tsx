import Link from "next/link";
import LogoName from "../common/logo-name";
import { Facebook, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="py-8 text-sm bg-dodget-blue-25 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-12 py-8">
        <div className="flex flex-col space-y-5 items-start">
          <LogoName />
          <div className="text-neutral-700">
            <p className="mb-5">
              No. 25, Kaba Aye Pagoda Road,
              <br /> Bahan Township, Yangon, Myanmar
            </p>
            <p className="mb-5">09 765 432 198</p>
            <p>donatio@gmail.com</p>
          </div>
        </div>
        <hr className="md:hidden" />
        <div className="md:col-span-2 flex flex-col items-center md:items-center justify-between space-y-8 md:space-y-20 pt-2">
          <div className="flex flex-wrap justify-center gap-4 md:flex md:space-x-0 md:space-y-2 text-neutral-700">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Organizations</Link>
            <Link href="/">Events</Link>
            <Link href="/">Activites</Link>
          </div>
          <p className="text-base text-center md:text-left">
            © {new Date().getFullYear()} Donatio. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-start space-x-5">
          <Link
            href="/"
            className="rounded-full bg-primary text-white h-10 w-10 flex justify-center items-center"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="/"
            className="rounded-full bg-primary text-white h-10 w-10 flex justify-center items-center"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="/"
            className="rounded-full bg-primary text-white h-10 w-10 flex justify-center items-center"
          >
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
