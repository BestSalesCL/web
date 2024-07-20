"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import menu from "@/public/assets/icons/menu.svg";
import { NavLinksData } from "@/constants/navLinksData";
import Link from "next/link";
import logo from "@/public/assets/icons/tbl-logo.png";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const router = usePathname();
  const isNotWebinarPage = !router.includes("/webinar");

  return (
    // This is a Sheet, a shadcn component that allows you to create the mobile menu sidebar
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Image src={menu} alt="hamburguer menu icon" className="size-11" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex h-full w-screen flex-col items-start justify-start border-none bg-background_color"
      >
        {/* Logo */}
        <SheetClose asChild>
          <Link href="/" className="h-12 w-auto">
            <Image src={logo} alt="the best level logo" className="h-12 w-11" />
          </Link>
        </SheetClose>
        <div className="mb-6 mt-[64px] flex size-full flex-col items-start justify-between">
          {/* Map function to render the navlinks */}
          <div className="flex-start-col w-full gap-10">
            {NavLinksData.map((item, i) => {
              return (
                <SheetClose key={i} asChild>
                  <Link href={item.link} className="w-fit whitespace-nowrap">
                    <p className="subtitle w-fit whitespace-nowrap text-white">
                      {item.name}
                    </p>
                  </Link>
                </SheetClose>
              );
            })}
          </div>

          {/* Button to take the test */}
          {isNotWebinarPage && (
            <SheetClose asChild>
              <Button
                asChild
                className="flex-center h-[56px] border-2 border-solid border-primary_color bg-background_color px-6 py-3 hover:border-primary_200 hover:bg-primary_color"
              >
                <Link
                  href="/contact"
                  className="flex-center size-full text-text_color hover:text-background_color"
                >
                  <p className="text-20-bold">Contáctanos</p>
                </Link>
              </Button>
            </SheetClose>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNav };
