"use client";
import { EbookHero } from "@/components/ebook/EbookHero";
import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

export default function Ebook() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <LazyMotion features={domAnimation}>
        <EbookHero />
      </LazyMotion>
    </section>
  );
}
