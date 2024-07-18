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
    <section className="relative flex-begin-col w-full h-auto gap-6 px-6 py-10 overflow-hidden sm:flex-center-col bg-background_color sm:h-[550px] sm:px-[40px] sm:py-20 md:h-fit md:gap-12 md:px-[100px] md:py-[104px] lg:px-[100px]">
      <div className="z-[5] flex-begin-col h-fit w-full max-w-[1240px] gap-6 sm:flex-center-col md:gap-12">
        <m.div
          variants={textVariant(0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-start justify-start w-full gap-6"
        >
          <h1 className="font-bold text-white h1-small sm:h1-big">{title}</h1>
        </m.div>

        <div className="relative w-full overflow-hidden rounded-lg shadow-base h-[180px] sm:h-[320px] md:h-[560px] md:rounded-[24px] lg:h-[580px] xl:h-[640px] xxl:h-[720px]">
          <iframe
            src={`${video}?background=1`}
            title={alt}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export { Hero };
