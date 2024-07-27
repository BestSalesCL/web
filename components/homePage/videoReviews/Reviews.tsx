"use client";
import React from "react";
import { VideoCarousel } from "./VideoCarousel";
import { fadeIn, show } from "@/utils/motion";
import { m } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const Reviews = () => {
  const isMobile = useIsMobile();
  return (
    <section className="flex-center-col -mt-10 w-full bg-primary_500 px-6 pb-[64px] pt-[40px] sm:px-[40px] md:px-[100px] md:pb-[96px]">
      <m.div
        variants={isMobile ? show() : fadeIn("down", "tween", 0.3, 0.5)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true, amount: 0.4 }}
        className="flex-start-col h-fit w-full max-w-[1240px] gap-[40px] "
      >
        {/* Title */}
        <h2 className="h2-small md:h1-small text-left text-background_color">
          ¡Nuestros clientes contentos!
        </h2>
        <VideoCarousel />
      </m.div>
    </section>
  );
};

export { Reviews };
