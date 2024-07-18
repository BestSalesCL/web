"use client";
import React from "react";
import { MainForm } from "@/components/survey/selectSport/MainForm";
import workouts from "@/public/assets/images/workouts/1-workouts.avif";
import sport from "@/public/assets/images/workouts/2-choose-your-sport.avif";
import results from "@/public/assets/images/workouts/3-trophy.avif";
import { InfoSection } from "@/components/webinar/info/InfoSection";
import { Hero } from "@/components/freeWorkouts/hero/Hero";
import { Faqs } from "@/components/webinar/faqs/Faqs";
import { LazyMotion, domAnimation } from "framer-motion";

export default function FreeWorkouts() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <LazyMotion features={domAnimation}>
        <Hero />
        <InfoSection
          title1={"Workouts"}
          image1={workouts}
          alt1={"fitness trainer with list of objectives"}
          paragraph1={
            "In BestLevel, we provide complimentary training plans aimed at cultivating fundamental physical qualities for individuals entering the realm of sports or striving to achieve specific improvements."
          }
          title2={"Choose YOUR sport"}
          image2={sport}
          alt2={"people performing various sports"}
          paragraph2={
            "At BestLevel, our primary goal is to assist you in enhancing and reaching your goals. We recognize that everyone has diverse objectives, which is why we provide training plans for your sport."
          }
          title3={"Do Workouts Guarantee Results?"}
          image3={results}
          alt3={"winning trophy, results achieved"}
          paragraph3={
            "If you strictly adhere to the plan, we assure you that you will improve your performance."
          }
          buttonText={"Take the Survey"}
          buttonLink={"survey"}
        />
        <MainForm isFreeWorkouts={true} />
        <Faqs />
      </LazyMotion>
    </section>
  );
}
