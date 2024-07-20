import { useState, useEffect } from "react";

interface VideoUrlsResponse {
  urls: string[];  // Cambiamos para manejar una lista de URLs
}

const useVideoUrls = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVideoUrls = async () => {
      try {
        const response = await fetch(`/api/proxy-fetch`);
        if (!response.ok) {
          throw new Error("Failed to fetch video URLs");
        }
        const data: VideoUrlsResponse = await response.json();
        setUrls(data.urls || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoUrls();
  }, []);

  return { urls, loading, error };
};

export default useVideoUrls;
