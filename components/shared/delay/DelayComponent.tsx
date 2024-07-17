"use client";

import React, { useState, useEffect } from "react";

interface DelayedRenderProps {
  delay: number; // Delay in milliseconds
  children: React.ReactNode;
}

const DelayedRender: React.FC<DelayedRenderProps> = ({ delay, children }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, delay);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [delay]);

  return <>{showContent ? children : null}</>;
};

export default DelayedRender;
