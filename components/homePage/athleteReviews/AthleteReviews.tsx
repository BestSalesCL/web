"use client";
import React from "react";
import { AthleteCard } from "./AthleteCard";
import Image from "next/image";
import boxBgDesktop from "@/public/assets/images/boxing-desktop.avif";
import boxBgXxl from "@/public/assets/images/boxing-xxl.jpeg";
import lights from "@/public/assets/images/lights-bg-desktop.avif";
import { m, useScroll, useTransform } from "framer-motion";
import { TransparentButton } from "@/components/TransparentButton";
import { fadeIn, textContainer, textVariant, show } from "@/utils/motion";
import useIsMobile from "@/hooks/useIsMobile";

const AthleteReviews = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "125%"]);
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[1160px] w-full overflow-hidden bg-black px-6 py-[56px] sm:min-h-[1300px] sm:px-[40px] md:min-h-[1712px] md:px-[100px] md:py-[144px] lg:min-h-[1732px] xl:min-h-[1880px] xxl:min-h-[2008px]">
      {/* Background image for the section, here are the lights at the top */}
      <m.div
        style={{ y }}
        className="flex-center absolute inset-x-0 top-[-120px] w-full"
      >
        <Image
          src={lights}
          alt="boxing background image"
          className="min-h-[456px] w-full object-cover object-center opacity-35 lg:min-h-[604px] xl:max-h-[752px]"
        />
      </m.div>

      {/* Content */}
      <div className="relative z-[5] flex w-full flex-col items-center justify-start gap-16 overflow-hidden">
        {/* Title */}
        <m.h2
          variants={isMobile ? show() : textVariant(0)}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "show"}
          viewport={{ once: true, amount: 0.3 }}
          className="h2-small md:h1-small max-w-[525px] text-center text-text_color md:max-w-[750px]"
        >
          Lo que otras personas tienen que decir sobre nosotros.
        </m.h2>

        {/* Carousel component */}
        <m.div
          variants={isMobile ? show() : fadeIn("up", "tween", 0, 0.5)}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "show"}
          viewport={{ once: true, amount: 0.1 }}
          className="flex-center size-fit"
        >
          <AthleteCard />
        </m.div>

        {/* CTA button and text */}
        <m.div
          variants={isMobile ? show() : textContainer}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-center-col w-full gap-3 md:gap-8"
        >
          <p className="subtitle md:h2-big max-w-[410px] text-center text-text_color">
            ¿Que esperas para unirte?
          </p>
          <div className="size-fit">
            <TransparentButton
              title="Contáctanos"
              link="/contact"
            />
          </div>
        </m.div>
      </div>

      {/* Second part of the image, here is the boxing ring */}
      <m.div
        style={{ y }}
        className="flex-center absolute inset-x-0 bottom-0 w-full overflow-hidden"
      >
        <div className="size-fit">
          <Image
            src={boxBgDesktop}
            alt="boxing background image"
            className="min-h-[300px] w-full object-cover object-center opacity-35 sm:h-[496px] md:min-h-[756px] lg:hidden"
          />
        </div>
        <div className="size-fit">
          <Image
            src={boxBgXxl}
            alt="boxing background image"
            className="hidden w-full object-cover object-center opacity-35 lg:inline-block lg:min-h-[724px] xl:max-h-[1208px]"
          />
        </div>
      </m.div>
    </section>
  );
};

export { AthleteReviews };
