import { useState, useEffect } from "react";

interface VideoUrlsResponse {
  url1: string | null;
  url2: string | null;
}

const useVideoUrl = (fileName: string) => {
  const [urls, setUrls] = useState<{ url1: string; url2: string }>({
    url1: "",
    url2: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch(`/api/proxy-fetch`);
        if (!response.ok) {
          throw new Error("Failed to fetch video URL");
        }
        const data: VideoUrlsResponse = await response.json();
        setUrls({ url1: data.url1 || "", url2: data.url2 || "" });
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoUrl();
  }, [fileName]);

  return { urls, loading, error };
};

export default useVideoUrl;
