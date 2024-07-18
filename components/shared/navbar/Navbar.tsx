"use client";
import React from "react";
import logo from "@/public/assets/icons/tbl-logo.png";
import Image from "next/image";
import Link from "next/link";
import { NavLinksData } from "@/constants/navLinksData";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";

const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: { type: "spring", sitffness: 200, damping: 120 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", sitffness: 100 },
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};
const show = {
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  const isMobile = useIsMobile();
  const router = usePathname();
  const isNotWebinarPage = !router.includes("/webinar");
  const isWebinarPage = router.includes("/webinar");

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        variants={isMobile ? show : navVariants}
        initial={isMobile ? "visible" : "hidden"}
        animate={"show"}
        viewport={{ once: true }}
        className="flex-center fixed z-10 h-fit w-full bg-background_color px-6 py-3 sm:px-[40px] lg:px-[100px]"
      >
        <nav className="flex-between relative h-auto w-full max-w-[1240px]">
          {/* Logo */}
          <Link href="/" className="h-12 w-11">
            <Image src={logo} alt="the best level logo" className="h-12 w-11" />
          </Link>

          {/* Map function to create the nav links in Pages that are not Webinar */}
          {isNotWebinarPage && (
            <div className="md:flex-center absolute left-1/2 top-1/2 hidden h-full w-fit -translate-x-1/2 -translate-y-1/2 gap-8">
              {NavLinksData.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={item.link}
                    className="w-fit whitespace-nowrap hover:underline"
                  >
                    <p className="text-20-bold w-fit whitespace-nowrap text-white hover:underline">
                      {item.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Map function to create the nav links in Pages that are from the Webinar */}
          {isWebinarPage && (
            <div className="md:flex-center hidden h-full w-fit gap-8">
              {NavLinksData.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={item.link}
                    className="w-fit whitespace-nowrap hover:underline"
                  >
                    <p className="text-20-bold w-fit whitespace-nowrap text-white hover:underline">
                      {item.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Button to take the test and redirects you to the questionaire */}
          {isNotWebinarPage && (
            <Button
              asChild
              className="md:flex-center hidden h-11 w-fit border-2 border-solid border-primary_color bg-background_color px-6 py-3 hover:border-primary_200 hover:bg-primary_color"
            >
              <Link
                href="/sports-survey"
                className="md:flex-center hidden size-full text-text_color hover:text-background_color"
              >
                <p className="text-20-bold">Select Your Sport</p>
              </Link>
            </Button>
          )}

          {/* Navigation component for mobile devices */}
          <MobileNav />
        </nav>
      </m.header>
    </LazyMotion>
  );
};

export { Navbar };
