"use client";
import React from "react";
import { Hero } from "@/components/homePage/hero/Hero";
import { Stats } from "@/components/homePage/stats/Stats";
import { AthleteReviews } from "@/components/homePage/athleteReviews/AthleteReviews";
import { Services } from "@/components/homePage/serviceSection/Services";
import { App } from "@/components/homePage/mobileApp/App";
import { Reviews } from "@/components/homePage/videoReviews/Reviews";
// import { Blog } from "@/components/homePage/blog/Blog";
import { Faqs } from "@/components/homePage/faqs/Faqs";
import { LazyMotion, domAnimation } from "framer-motion";

export default function Home() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <LazyMotion features={domAnimation}>
        <Hero />
        <Stats />
        <AthleteReviews />
        <Services />
        <App />
        <Reviews />
        {/* <Blog /> */}
        <Faqs />
      </LazyMotion>
    </section>
  );
}
