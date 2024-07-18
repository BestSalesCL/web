"use client";
import React from "react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { LazyMotion, domAnimation } from "framer-motion";

export default function Contact() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <LazyMotion features={domAnimation}>
        <ContactHero />
        <ContactForm />
      </LazyMotion>
    </section>
  );
}
