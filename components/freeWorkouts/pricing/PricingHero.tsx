"use client";
import React from "react";
import { m } from "framer-motion";
import { fadeIn, show } from "@/utils/motion";
import useIsMobile from "@/hooks/useIsMobile";

const PricingHero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="flex-center-col mb-[16px] w-full gap-4 bg-background_color px-6 pt-[48px] sm:px-[40px] md:px-[100px] md:pt-[96px]">
      {/* Title and subtitle */}
      <m.h1
        variants={isMobile ? show() : fadeIn("down", "tween", 0, 0.4)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true }}
        className="h1-small md:h1-big text-center text-text_color"
      >
        We&#x27;ve got your Results
      </m.h1>
      <m.p
        variants={isMobile ? show() : fadeIn("down", "tween", 0, 0.6)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true }}
        className="text-20-semibold text-center text-text_400"
      >
        Please purchase the free plan or download the app to access all the
        benefits.
      </m.p>
    </section>
  );
};

export { PricingHero };
