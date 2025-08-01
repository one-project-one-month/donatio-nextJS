import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import AppConfig from "@/lib/appConfig";
import useUserStore from "@/store/userStore";
import {
  Building2Icon,
  LogOutIcon,
  SunMoon,
  UserCircleIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AvatarDropdown = () => {
  const { setTheme, theme } = useTheme();
  const { user, logout } = useAuth();
  const { setCurrentOrg } = useUserStore();
  const router = useRouter();

  const handleOrgSwitch = (orgId: string) => {
    setCurrentOrg(orgId);
    router.push(`/organization/events`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer outline-none">
        <div className="flex justify-center items-center space-x-3">
          <Avatar>
            <AvatarImage
              src={
                user?.profile?.profile_picture
                  ? `${AppConfig.BASE_ORIGIN}${user.profile.profile_picture}`
                  : "https://github.com/shadcn.png"
              }
              alt="@avatar"
            />
            <AvatarFallback>
              {user?.username?.charAt(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="hidden flex-1 text-left text-sm leading-tight md:grid">
            <span className="truncate font-medium">
              {user?.profile?.full_name
                ? user?.profile?.full_name
                : user?.username}
            </span>
            <span className="truncate text-xs text-muted-foreground">
              {user?.email}
            </span>
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/donor/profile" className="cursor-pointer">
              <UserCircleIcon className="mr-2 h-4 w-4" />
              Account
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        {/* Organization Role Switch */}
        {user && user?.organizations?.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Switch to Organization</DropdownMenuLabel>

            {user?.organizations.map((org: any) => (
              <DropdownMenuItem
                key={org.id}
                className="cursor-pointer"
                onClick={() => handleOrgSwitch(org.id)}
              >
                <Building2Icon className="mr-2 h-4 w-4" />
                {org.name}
              </DropdownMenuItem>
            ))}
          </>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunMoon className="mr-2 h-4 w-4" />
          <span>Toggle Theme</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={logout}>
          <LogOutIcon className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
