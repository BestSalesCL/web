"use client";
import { AboutHero } from "@/components/about/AboutHero";
import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

export default function Contact() {
  return (
    <section className="flex-center-col size-full">
      <LazyMotion features={domAnimation}>
        <AboutHero />
      </LazyMotion>
    </section>
  );
}
