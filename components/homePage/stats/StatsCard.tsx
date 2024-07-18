"use client";
import React from "react";
import { StatsData } from "@/constants/statsData";
import Image from "next/image";
import CountUp from "react-countup";
import { fadeIn, show } from "@/utils/motion";
import { m } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const StatsCard = () => {
  const isMobile = useIsMobile();

  return (
    <m.div
      variants={isMobile ? show() : fadeIn("up", "tween", 0, 0.3)}
      initial={isMobile ? "visible" : "hidden"}
      whileInView={isMobile ? "visible" : "show"}
      viewport={{ once: true }}
      className="lg:flex-center z-[5] grid w-full grid-cols-2 place-items-center items-center justify-center gap-y-[40px] sm:grid-cols-3 sm:grid-rows-2 lg:gap-0"
    >
      {StatsData.map((card, i) => {
        // Check if it's the last item
        const isLastItem = i === StatsData.length - 1;
        const isPreLastItem = i === StatsData.length - 2;

        // This is the card component for each stat
        return (
          <div
            key={i}
            className={`flex h-full w-fit flex-col place-items-center items-center justify-start gap-4 lg:h-[170px] lg:justify-center lg:border-r-2 lg:border-solid lg:border-text_color lg:px-[56px] ${
              isLastItem ? "col-span-2 sm:col-span-1 lg:border-none" : ""
            } ${isPreLastItem ? "sm:col-span-1" : ""}`}
          >
            <Image src={card.image} alt={card.alt} className="size-[60px] " />
            <div className="flex-center-col w-full gap-[4px]">
              <CountUp
                start={0}
                end={card.number}
                prefix={card.pre}
                suffix={card.scale}
                duration={5}
                enableScrollSpy
                scrollSpyOnce
                className="subtitle w-[112px] text-center text-primary_color"
              />
              <p className="subtitle w-[134px] text-center text-text_color">
                {card.name}
              </p>
            </div>
          </div>
        );
      })}
    </m.div>
  );
};

export { StatsCard };
