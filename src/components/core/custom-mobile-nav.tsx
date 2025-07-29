"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedHamburgerIcon } from "./animated-hamburger-icon";

const NAV_LINKS = [
  { name: "Events", path: "/donor/events" },
  { name: "Activities", path: "/donor/activities" },
  { name: "Organizations", path: "/donor/organizations" },
  { name: "Chat", path: "/donor/chat" },
];

// A custom cubic-bezier for a 'bounce' effect on the menu panel
const TRANSITION_TIMING = "cubic-bezier(.62,.04,.3,1.56)";

/**
 * A custom mobile navigation component with a slide-out panel and animated icon.
 */
export function CustomMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* TRIGGER BUTTON */}
      <Button
        variant="link"
        className="fixed right-2 top-3.5 z-[100] rounded-full p-3 text-black dark:text-white transition-transform duration-200 ease-in-out lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <AnimatedHamburgerIcon isOpen={isOpen} />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* MENU PANEL */}
      <aside
        id="mobile-menu"
        className={cn(
          "fixed right-0 top-0 z-[95] h-full w-full transform border-none bg-background p-0 transition-transform duration-500 sm:max-w-sm lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ transitionTimingFunction: TRANSITION_TIMING }}
      >
        {/* Covers the 'bounce' overflow, preventing layout shifts */}
        <div className="absolute top-0 right-[-4rem] h-full w-[4rem] bg-background" />

        <nav className="relative z-10 flex h-full w-full flex-col items-end justify-center px-12">
          <ul className="text-right">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.name}
                className="mb-8 transform text-neutral-800 transition-all duration-500 dark:text-neutral-200"
                style={{
                  transitionDelay: `${150 + index * 50}ms`,
                  transform: isOpen ? "translateY(0)" : "translateY(100px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-3xl font-medium uppercase tracking-wider"
                >
                  {link.name.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
