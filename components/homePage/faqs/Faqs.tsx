"use client";
import React from "react";
import { QuestionAccordion } from "./QuestionAccordion";
import { fadeIn, show } from "@/utils/motion";
import { m } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const Faqs = () => {
  const isMobile = useIsMobile();

  return (
    <section className="flex-center-col -mt-6 w-full bg-background_color px-6 pb-[64px] pt-8 sm:px-[40px] md:px-[100px] md:pb-[96px] md:pt-[100px] ">
      <m.div
        variants={isMobile ? show() : fadeIn("up", "tween", 0, 0.4)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-center-col h-fit w-full max-w-[1240px] gap-[40px] "
      >
        {/* Title */}
        <h2 className="h2-big md:h1-small text-left text-text_color">
          Preguntas Frecuentes (FAQs)
        </h2>
        <QuestionAccordion />
      </m.div>
    </section>
  );
};

export { Faqs };
