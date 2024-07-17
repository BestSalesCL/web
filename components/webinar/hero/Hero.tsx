"use client";
import React from "react";
import { m } from "framer-motion";
import { textVariant } from "@/utils/motion";

type HeroContent = {
  title: string;
  video: string; // URL completa del video de Vimeo
  alt: string;
};

const Hero = ({ title, video, alt }: HeroContent) => {
  return (
    <section className="flex-begin-col sm:flex-center-col relative h-auto w-full gap-6 overflow-hidden bg-background_color px-6 py-10 sm:h-[550px] sm:px-[40px] sm:py-20 md:h-fit md:gap-12 md:px-[100px] md:py-[104px] lg:px-[100px]">
      <div className="flex-begin-col sm:flex-center-col z-[5] h-fit w-full max-w-[1240px] gap-6 md:gap-12">
        <m.div
          variants={textVariant(0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="flex w-full items-start justify-start gap-6"
        >
          <h1 className="h1-small sm:h1-big font-bold text-white">{title}</h1>
        </m.div>

        <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-base sm:h-[320px] md:h-[560px] md:rounded-[24px] lg:w-full lg:h-[580px] xl:h-[640px] xxl:h-[720px]">
          <iframe
            src={`${video}?background=1`}
            title={alt}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="size-full"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export { Hero };
