"use client";
import React from "react";
import { BlogContainer } from "./BlogContainer";
import { textVariant, fadeIn } from "@/utils/motion";
import { m } from "framer-motion";

const Blog = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <section className="flex-center-col w-full bg-background_color px-6 py-[56px] pb-[64px] sm:px-[40px] md:px-[100px] md:py-[96px]">
      <div className="flex-center-col h-fit w-full max-w-[1240px] gap-[40px] ">
        {/* Title */}
        <m.h2
          variants={isMobile ? {} : textVariant(0)}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "show"}
          viewport={{ once: true, amount: 0.3 }}
          className="h2-big md:h1-small text-left text-text_color"
        >
          Featured Blog Posts
        </m.h2>
        <m.div
          variants={isMobile ? {} : fadeIn("up", "tween", 0, 0.5)}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? "visible" : "show"}
          viewport={{ once: true, amount: 0 }}
          className="flex-center w-full"
        >
          <BlogContainer />
        </m.div>
      </div>
    </section>
  );
};

export { Blog };
