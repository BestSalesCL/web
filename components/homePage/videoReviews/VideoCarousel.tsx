import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type VimeoEmbedProps = {
  videoUrl: string;
  height: number;
};

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoUrl, height }) => {
  const src = videoUrl.includes('?') ? videoUrl : `${videoUrl}?autoplay=0&loop=0`;
  return (
    <iframe
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="Vimeo Video"
    ></iframe>
  );
};

const VideoCarousel = () => {
  const videos = [
    { videoId: "https://player.vimeo.com/video/984659562?", reviewTitle: "Testimonial 1" },
    { videoId: "https://player.vimeo.com/video/984652665?", reviewTitle: "Testimonial 2" },
    { videoId: "https://player.vimeo.com/video/984660956?", reviewTitle: "Testimonial 3" },
    { videoId: "https://player.vimeo.com/video/984662181?", reviewTitle: "Testimonial 4" },
    { videoId: "https://player.vimeo.com/video/984664800?", reviewTitle: "Testimonial 5" },
    { videoId: "https://player.vimeo.com/video/984667197?", reviewTitle: "Testimonial 6" },
    { videoId: "https://player.vimeo.com/video/984669545?", reviewTitle: "Testimonial 7" },
    { videoId: "https://player.vimeo.com/video/984671083?", reviewTitle: "Testimonial 8" },
  ];

  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-[1240px]">
      <CarouselContent className="h-fit p-3">
        {videos.map((video, i) => {
          return (
            <CarouselItem
              className="flex-center-col relative sm:basis-3/5 md:basis-1/2 lg:basis-1/3 "
              key={i}
            >
              <div className="h-fit max-h-[220px] w-full overflow-hidden rounded-lg border-2 border-solid border-background_color">
                <VimeoEmbed
                  videoUrl={video.videoId}
                  height={225}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex-center relative mt-10 w-full gap-4">
        <CarouselPrevious className="flex-center static z-[5] size-[40px]" />
        <CarouselNext className="flex-center static z-[5] size-[40px]" />
      </div>
    </Carousel>
  );
};

export { VideoCarousel };