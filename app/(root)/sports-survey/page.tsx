"use client";
import React from "react";
import { SurveyHero } from "@/components/survey/hero/SurveyHero";
import { MainForm } from "@/components/survey/selectSport/MainForm";

export default function Survey() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <SurveyHero />
      <MainForm isFreeWorkouts={false} />
    </section>
  );
}
