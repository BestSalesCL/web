import React from "react";
import useVideoUrl from "@/hooks/useVideoUrl";  // Importa el hook correctamente

const HeroVideo: React.FC = () => {
  const { urls, loading, error } = useVideoUrl();

  if (loading) return <div>Loading video...</div>;
  if (error) return <div>Error loading video: {error.message}</div>;

  const videoUrl = urls[0];  // Usa la primera URL

  return (
    <div className="hero-video-container">
      <video
        autoPlay
        muted
        playsInline
        loop
        preload="none"
        aria-label="Background Video Player"
        className="hero-video"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;
