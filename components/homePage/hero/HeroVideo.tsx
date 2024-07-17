import React, { Suspense } from "react";
import useVideoUrl from "@/hooks/useVideoUrl";

interface VideoComponentProps {
  fileName: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ fileName }) => {
  const { urls, loading, error } = useVideoUrl(fileName);

  if (loading) return <VideoLoadingState />;
  if (error) return <div>Error loading video: {error.message}</div>;

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
        <source
          src={urls.url1}
          type="video/mp4"
          className="size-full object-cover"
        />
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
        <VideoComponent fileName="hero-video-7uSMYFaGlhdTf89b0eqSe7T8E3Mity.mp4" />
      </Suspense>
    </div>
  );
}
