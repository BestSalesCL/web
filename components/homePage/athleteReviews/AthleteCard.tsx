import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AthleteReviewsData } from "@/constants/athleteReviewsData";
import Image from "next/image";

const AthleteCard = () => {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full max-w-[220px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1240px]"
    >
      <CarouselContent className="md:ml-[-124px]">
        {AthleteReviewsData.map((card, i) => {
          return (
            <CarouselItem
              className="flex-center-col relative sm:basis-1/2 md:pl-[124px] lg:basis-1/3"
              key={i}
            >
              <div className="relative mb-[-20px] h-[280px] w-full sm:h-[400px] ">
                <Image src={card.image} alt={card.alt} fill />
                <div className="absolute inset-0 size-full bg-gradient-to-t from-black via-transparent to-transparent bg-clip-content"></div>
              </div>

              <div className="flex-center-col h-fit w-full max-w-[356px] gap-2 p-4">
                <p className="subtitle text-center text-text_color">
                  {card.review}
                </p>
                <div className="flex-center-col gap-2">
                  <p className="subtitle text-center text-primary_color">
                    {card.name}
                  </p>
                  <p className="text-16 w-full text-center text-text_color">
                    {card.position}
                  </p>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export { AthleteCard };
