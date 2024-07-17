"use client";
import { BlogHero } from "@/components/blog/BlogHero";
import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

export default function Contact() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <LazyMotion features={domAnimation}>
        <BlogHero />
      </LazyMotion>
    </section>
  );
}
