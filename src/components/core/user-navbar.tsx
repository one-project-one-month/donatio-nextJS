"use client";

import AvatarDropdown from "../common/avatar-dropdown";
import LogoName from "@/components/common/logo-name";

function UserNavbar() {
  return (
    <nav className="w-full flex justify-between px-5 md:px-12">
      <LogoName />
      <AvatarDropdown />
    </nav>
  );
}

export default UserNavbar;
