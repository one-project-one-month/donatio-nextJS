"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideIcon, ChevronUp, ChevronDown } from "lucide-react";

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  children?: {
    title: string;
    url: string;
  }[];
};

export function NavMain({ items }: { items: NavItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleSection = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentRef = contentRefs.current[idx];
            const maxHeight = isOpen && contentRef ? `${contentRef.scrollHeight}px` : "0px";

            if (item.children?.length) {
              return (
                <React.Fragment key={item.title}>
                  <SidebarMenuItem>
                    <button
                      type="button"
                      className="flex items-center gap-4 py-2 px-4 w-full text-base focus:outline-none"
                      onClick={() => toggleSection(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`accordion-content-${idx}`}
                    >
                      {item.icon && <item.icon size={16} />}
                      <span className="flex-1 text-left">{item.title}</span>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </SidebarMenuItem>
                  <div
                    id={`accordion-content-${idx}`}
                    ref={(el) => {
                      contentRefs.current[idx] = el;
                    }}
                    className="ml-10 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight,
                      opacity: isOpen ? 1 : 0,
                      pointerEvents: isOpen ? "auto" : "none",
                    }}
                  >
                    {item.children.map((child) => (
                      <SidebarMenuItem key={child.title}>
                        <SidebarMenuButton asChild className="py-2 px-2 text-sm">
                          <Link href={child.url}>{child.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </React.Fragment>
              );
            }

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="flex items-center gap-4 py-5 px-4 text-base"
                >
                  <Link href={item.url}>
                    {item.icon && <item.icon size={16} />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
