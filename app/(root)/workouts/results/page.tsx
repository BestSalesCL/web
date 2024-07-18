"use client";
import React from "react";
import { FreeTier } from "@/components/freeWorkouts/pricing/FreeTier";
import { PricingHero } from "@/components/freeWorkouts/pricing/PricingHero";

export default function Results() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <PricingHero />
      <FreeTier />
    </section>
  );
}
