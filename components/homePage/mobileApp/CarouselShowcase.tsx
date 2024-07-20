"use client";
import React, { Suspense } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fadeIn, show } from "@/utils/motion";
import { m } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import useVideoUrl from "@/hooks/useVideoUrl";  // Importa el hook correctamente

interface VideoComponentProps {
  url: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ url }) => {
  return (
    <div className="flex-center size-full overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        loop
        preload="none"
        aria-label="Background Video Player"
        className="size-full"
      >
        <source src={url} type="video/mp4" className="size-full" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const VideoLoadingState: React.FC = () => {
  return (
    <div className="flex-center size-full animate-pulse bg-background_color">
      <p>Loading video...</p>
    </div>
  );
};

export default function CarouselShowcase() {
  const { urls, loading, error } = useVideoUrl();
  const isMobile = useIsMobile();

  if (loading) {
    return <VideoLoadingState />;
  }

  if (error) {
    return <div>Error loading videos: {error.message}</div>;
  }

  // Usa los tres videos restantes
  const carouselUrls = urls.slice(1, 4);

  return (
    <m.div
      variants={isMobile ? show() : fadeIn("left", "tween", 0, 0.5)}
      initial={isMobile ? "visible" : "hidden"}
      whileInView={isMobile ? "visible" : "show"}
      viewport={{ once: true, amount: 0.2 }}
      className="flex-center size-fit"
    >
      <Carousel
        opts={{ align: "start", loop: true }}
        className="h-fit w-full sm:max-w-[300px] sm:pl-0 md:max-w-[360px] md:pl-10 lg:max-w-[600px]"
      >
        <CarouselContent className="flex-start">
          {carouselUrls.map((url, index) => (
            <CarouselItem key={index} className="flex-center-col relative h-[448px] w-[242px] md:basis-3/4 lg:basis-3/5">
              <Suspense fallback={<VideoLoadingState />}>
                <VideoComponent url={url} />
              </Suspense>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex-center relative mt-10 w-full gap-4">
          <CarouselPrevious className="flex-center static z-[5] size-[40px]" />
          <CarouselNext className="flex-center static z-[5] size-[40px]" />
        </div>
        <div className="absolute right-[-2px] top-0 h-full w-4 bg-gradient-to-l from-primary_500 to-transparent md:right-[-5px] lg:right-[-4px]" />
      </Carousel>
    </m.div>
  );
}
