"use client";
import React from "react";
import { WebinarContactHero } from "@/components/contact/WebinarContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export default function WebinarContact() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <WebinarContactHero />
      <ContactForm />
    </section>
  );
}
