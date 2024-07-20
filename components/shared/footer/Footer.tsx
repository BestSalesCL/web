"use client";

import React from "react";
import instagram from "@/public/assets/icons/instagram.svg";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { fadeIn, show } from "@/utils/motion";
import useIsMobile from "@/hooks/useIsMobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <LazyMotion features={domAnimation}>
      <m.footer
        variants={isMobile ? show() : fadeIn("down", "tween", 0, 0.4)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true }}
        className="flex-center h-fit w-full border-t-2 border-solid border-t-secondary_200 bg-background_color px-6 md:px-[40px] lg:px-[100px]"
      >
        <div className="flex-start-col h-auto w-full max-w-[1240px] gap-12 py-12 sm:py-[56px]">
          {/* Redes Sociales y Contacto */}
          <div className="flex-begin-col h-fit w-full gap-8 sm:flex sm:items-center sm:justify-end md:flex-row md:justify-start">
            <div className="flex-start-col w-full gap-4">
              <Link href="mailto:contact@thebestsales.co" className="text-16 text-white hover:underline">
                contact@thebestsales.co
              </Link>
              <Link
                href="https://www.instagram.com/bestlevel_/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8"
              >
                <Image
                  src={instagram}
                  alt="instagram logo"
                  className="size-8"
                />
              </Link>
            </div>
            <div className="flex-begin-col w-full items-center justify-end gap-4 sm:flex sm:flex-row sm:items-center sm:justify-start">
              <p className="text-16 w-fit whitespace-nowrap text-white">
                @ 2024 All Rights Reserved
              </p>
              <Link
                href="/privacy-policy"
                className="w-fit whitespace-nowrap hover:underline"
              >
                <h6 className="text-16 w-fit whitespace-nowrap text-white hover:underline">
                  Privacy Policy
                </h6>
              </Link>
              <Link
                href="/terms-and-conditions"
                className="w-fit whitespace-nowrap hover:underline"
              >
                <h6 className="text-16 w-fit whitespace-nowrap text-white hover:underline">
                  Terms and Conditions
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </m.footer>
    </LazyMotion>
  );
};

export { Footer };
