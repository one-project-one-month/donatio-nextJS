import { Facebook, Instagram, Linkedin, LucideIcon } from "lucide-react";
import Link from "next/link";
import LogoName from "../common/logo-name";

const FOOTER_LINKS = [
  { name: "Organizations", href: "/donor/organizations" },
  { name: "Events", href: "/donor/events" },
  { name: "Activities", href: "/donor/activities" },
  { name: "Chat", href: "/donor/chat" },
];

const SOCIAL_LINKS: { href: string; icon: LucideIcon }[] = [
  { href: "/", icon: Facebook },
  { href: "/", icon: Linkedin },
  { href: "/", icon: Instagram },
];

const FooterContactInfo = () => (
  <div className="flex flex-col items-start space-y-5">
    <LogoName />
    <div className="text-neutral-700 dark:text-neutral-300">
      <p className="mb-5">
        No. 25, Kaba Aye Pagoda Road,
        <br /> Bahan Township, Yangon, Myanmar
      </p>
      <p className="mb-5">09 765 432 198</p>
      <p>donatio@gmail.com</p>
    </div>
  </div>
);

const FooterNav = () => (
  <div className="flex flex-col items-center justify-between space-y-8 pt-2 md:col-span-2 md:space-y-20">
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-neutral-700 dark:text-neutral-300 md:gap-y-4">
      {FOOTER_LINKS.map((link) => (
        <Link key={link.name} href={link.href} className="hover:text-primary">
          {link.name}
        </Link>
      ))}
    </div>
    <p className="text-center text-base">
      © {new Date().getFullYear()} Donatio. All rights reserved.
    </p>
  </div>
);

const FooterSocials = () => (
  <div className="flex items-start justify-center space-x-4 md:justify-end">
    {SOCIAL_LINKS.map((social, index) => (
      <Link
        key={index}
        href={social.href}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-110"
      >
        <social.icon size={20} />
        <span className="sr-only">{social.icon.displayName}</span>
      </Link>
    ))}
  </div>
);

function Footer() {
  return (
    <footer className="border-t bg-dodget-blue-25 py-8 text-sm dark:bg-neutral-950">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-8 px-5 py-8 md:grid-cols-4 md:px-8 lg:px-12">
        <FooterContactInfo />
        <hr className="md:hidden" />
        <FooterNav />
        <FooterSocials />
      </div>
    </footer>
  );
}

export default Footer;
