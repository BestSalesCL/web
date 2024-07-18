import React from "react";
const SurveyHero = () => {
  return (
    <section className="flex-center-col w-full gap-4 bg-background_color px-6 py-[48px] sm:px-[40px] md:px-[100px] md:py-[96px]">
      {/* Title and subtitle */}
      <h1 className="h1-small md:h1-big text-center text-text_color">
        Choose your Sport
      </h1>
      <p className="text-20-semibold text-center text-text_400">
        Select the sport for which you would like to train.
      </p>
    </section>
  );
};

export { SurveyHero };
