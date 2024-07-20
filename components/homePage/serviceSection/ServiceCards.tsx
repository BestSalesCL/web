import React from "react";
import Image from "next/image";
import { ServiceCardsData } from "@/constants/serviceCardsData";
import { fadeIn, show } from "@/utils/motion";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";

const ServiceCards = () => {
  const isMobile = useIsMobile();
  return (
    <div className="grid w-fit max-w-screen-xl grid-cols-1 place-items-center items-center justify-center gap-[40px] sm:grid-cols-2">
      {ServiceCardsData.map((card, i) => {
        // This is to adjust the image position depending on the card
        const isFirstItem = i === ServiceCardsData.length - 4;
        const isSecondItem = i === ServiceCardsData.length - 3;
        const isThirdItem = i === ServiceCardsData.length - 2;
        const isFourthItem = i === ServiceCardsData.length - 1;

        // Card component for each service
        return (
          <m.div
            variants={isMobile ? show() : fadeIn("up", "tween", 0, 0.5)}
            initial={isMobile ? "visible" : "hidden"}
            whileInView={isMobile ? "visible" : "show"}
            viewport={{ once: true, amount: 0.3 }}
            key={i}
            className="group relative flex h-[480px] w-full max-w-[304px] flex-col items-start justify-end gap-4 overflow-hidden rounded-[16px] bg-background_color p-6 shadow-serviceCard sm:h-[424px] sm:w-full sm:max-w-[600px] sm:gap-6 sm:px-8 sm:py-10"
          >
            {/* Backgroud image for the cards */}
            <Image
              src={card.image}
              alt={card.alt}
              className={`absolute inset-0 h-[480px] object-cover object-center opacity-30 lg:inset-x-0 lg:h-[432px] lg:w-[600px] ${
                isFirstItem ? "lg:top-0" : ""
              } ${isSecondItem ? "lg:top-0" : ""} ${isThirdItem ? "lg:top-0" : ""} ${isFourthItem ? "lg:top-0" : ""} transition-all duration-1000 ease-in-out group-hover:scale-105`}
            />
            {/* Card content (title, description and button) */}
            <div className="flex-start-col z-[5] gap-2 sm:gap-4">
              <h4 className="subtitle sm:h2-small text-text_color">
                <span className="subtitle sm:h2-small text-primary_color">
                  {card.cardNumber}
                </span>
                {card.title}
              </h4>
              <p className="text-16 sm:text-20 text-left text-text_400">
                {card.description}
              </p>
            </div>
            <div className="z-[5] size-fit ">
              <Button
                asChild
                className="flex-center size-full border-[3px] border-solid border-primary_color bg-transparent px-6 py-3 shadow-base hover:border-primary_200 hover:bg-primary_color"
              >
                <Link
                  href="/contact"
                  className="flex-center size-full text-text_color hover:text-background_color"
                >
                  <p className="text-20-bold">Contáctanos</p>
                </Link>
              </Button>
            </div>
          </m.div>
        );
      })}
    </div>
  );
};

export { ServiceCards };
