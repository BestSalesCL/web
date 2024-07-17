"use client";
import React from "react";
import CarouselShowcase from "./CarouselShowcase";
import { DownloadApp } from "./DownloadApp";
import { show, textVariant } from "@/utils/motion";
import { m } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const App = () => {
  const isMobile = useIsMobile();

  return (
    <section className="flex-center-col w-full overflow-visible bg-primary_500 px-6 py-[48px] sm:px-[40px] md:px-[100px] md:py-[96px]">
      <div className="flex-start-col h-fit w-full max-w-[1240px] gap-[40px] ">
        <m.h2
          variants={isMobile ? show() : textVariant(0)}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "show"}
          viewport={{ once: true, amount: 0.3 }}
          className="h2-big md:h1-small text-left text-background_color"
        >
          The Ultimate App Every Athlete Needs
        </m.h2>
        <div className="flex-center-col h-auto w-full gap-[40px] sm:flex-row sm:justify-start md:flex-row">
          <DownloadApp />
          <CarouselShowcase />
        </div>
      </div>
    </section>
  );
};

export { App };
