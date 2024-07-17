"use client";
import React from "react";
import { PricingPlans } from "./PricingPlans";
import { LayoutGroup, motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex-center-col mt-[60px] w-full gap-[60px] bg-background_color px-6 pb-[64px] pt-8 sm:px-[40px] md:px-[100px] md:pb-[96px]"
    >
      <motion.h2
        variants={textVariant(0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="h2-big md:h1-small text-center text-text_color"
      >
        Discover the Road to <br /> Peak Athletic Performance
      </motion.h2>
      <LayoutGroup>
        <PricingPlans />
      </LayoutGroup>
    </section>
  );
};

export { Pricing };
