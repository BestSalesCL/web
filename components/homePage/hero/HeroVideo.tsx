import React, { Suspense } from "react";

const VideoComponent: React.FC = () => {
  const videoUrl = "/assets/videos/herovideo.mp4";  // Ruta del archivo de video

  return (
    <div className="flex-center size-full min-h-full overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        loop
        preload="none"
        aria-label="Background Video Player"
        className="size-full min-h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" className="size-full object-cover" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const VideoLoadingState: React.FC = () => {
  return (
    <div className="flex-center size-full min-h-full animate-pulse bg-background_color">
      <p>Loading video...</p>
    </div>
  );
};

export default function HeroVideo() {
  return (
    <div className="size-full min-h-full">
      <Suspense fallback={<VideoLoadingState />}>
        <VideoComponent />
      </Suspense>
    </div>
  );
}
