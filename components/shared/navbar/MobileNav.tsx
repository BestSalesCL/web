"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "@/components/icons/menu-icon";

const MobileNav = () => {
  const router = usePathname();
  const isNotWebinarPage = router ? !router.includes("/webinar") : true;

  return (
    // This is a Sheet, a shadcn component that allows you to create the mobile menu sidebar
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 rounded-md">
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <nav>
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a href="/" className="block text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block text-lg">
                About
              </a>
            </li>
            {isNotWebinarPage && (
              <li>
                <a href="/contact" className="block text-lg">
                  Contact
                </a>
              </li>
            )}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
