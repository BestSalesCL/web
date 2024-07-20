"use client";
import React from "react";
import { ServiceCards } from "./ServiceCards";
import { textVariant, show } from "@/utils/motion";
import { m } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <section id="services" className="flex-center-col w-full gap-[32px] bg-background_color px-6 py-[48px] sm:gap-[64px] sm:px-[40px] md:px-[100px] md:py-[96px]">
      {/* Title of the section */}
      <m.h2
        variants={isMobile ? show() : textVariant(0)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true, amount: 0.3 }}
        className="h2-small md:h1-small text-center text-text_color"
      >
        Aumenta tus ventas
      </m.h2>
      {/* Component where the grid of cards is displayed */}
      <ServiceCards />
    </section>
  );
};

export { Services };
