"use client";

import React from "react";
import { TransparentButton } from "@/components/TransparentButton";
import HeroVideo from "./HeroVideo";
import { m } from "framer-motion";
import { textVariant, show } from "@/utils/motion";
import useIsMobile from "@/hooks/useIsMobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="flex-begin-col sm:flex-center-col relative h-auto w-full gap-6 overflow-hidden bg-background_color px-6 py-10 sm:h-[550px] sm:px-[40px] sm:py-20 md:h-[768px] md:gap-12 md:px-[100px] md:py-[104px] lg:px-[100px]">
      {/* Background video goes here */}
      <div className="absolute inset-0">
        {/* Layer to add opacity to the video */}
        <div className="absolute size-full min-h-full bg-background_color object-cover opacity-75"></div>
        {/* Video */}
        <HeroVideo />
      </div>

      {/* Title and button */}
      <div className="flex-begin-col sm:flex-center-col z-[5] size-auto gap-6 md:gap-12">
        <m.div
          variants={isMobile ? show() : textVariant(0)}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="flex-center-col max-w-[256px] gap-6 sm:max-w-[640px] sm:gap-5"
        >
          <h1 className="h1-small md:h1-big text-left text-text_color sm:text-center">
          El Dinero Es Oxigeno Para Cualquier Empresa
          </h1>
          <p className="subtitle text-text_400">Mejora ahora</p>
        </m.div>

        <m.div
          variants={isMobile ? show() : textVariant(0.2)}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="flex-center size-fit"
        >
          <TransparentButton
            title="Consigue Más Clientes"
            link="/sports-survey"
          />
        </m.div>
      </div>
    </section>
  );
};

export { Hero };
