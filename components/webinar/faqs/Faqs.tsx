"use client";
import React from "react";
import { QuestionAccordion } from "./QuestionAccordion";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const Faqs = () => {
  return (
    <section className="flex-center-col -mt-6 w-full bg-background_color px-6 pb-[64px] pt-8 sm:px-[40px] md:px-[100px] md:pb-[96px] ">
      <motion.div
        variants={fadeIn("up", "tween", 0, 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-center-col h-fit w-full max-w-[1240px] gap-[40px] "
      >
        {/* Title */}
        <h2 className="h2-big md:h1-small text-left text-text_color">
          Common Questions (FAQs)
        </h2>
        <QuestionAccordion />
      </motion.div>
    </section>
  );
};

export { Faqs };
