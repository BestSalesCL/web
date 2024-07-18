import React from "react";
import { StatsCard } from "./StatsCard";
import Image from "next/image";
import dotsMobile from "@/public/assets/images/dots-bg-mobile.png";
import dotsDesktop from "@/public/assets/images/dots-bg-desktop.png";

const Stats = () => {
  return (
    <section className="flex-center relative w-full overflow-hidden bg-background_color px-6 py-[48px] sm:px-[40px] md:min-h-[504px] md:px-[100px] md:py-[96px]">
      {/* Dots background image */}
      <div className="absolute inset-0 size-full">
        <Image
          src={dotsMobile}
          alt="dots background image"
          className="size-full object-cover object-center opacity-20 sm:hidden"
        />
        <Image
          src={dotsDesktop}
          alt="dots background image"
          className="hidden size-full object-cover object-center opacity-20 sm:inline-block"
        />
      </div>
      <StatsCard />
    </section>
  );
};

export { Stats };
