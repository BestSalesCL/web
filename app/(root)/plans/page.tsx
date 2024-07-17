"use client";
import React, { useEffect } from "react";
import { Pricing } from "@/components/webinar/pricing/Pricing";
import { LazyMotion, domAnimation } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Soccer() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if the current route contains "/plans"
    if (pathname.includes("/plans")) {
      const eventSourceUrl = window.location.href; // Get current page URL as event source URL
      const clientUserAgent = navigator.userAgent; // Get client user agent

      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
      };

      const fbc = getCookie("_fbc");
      const fbp = getCookie("_fbp");

      // Send event to the Facebook API
      const sendEvent = async () => {
        const eventTime = Math.floor(new Date().getTime() / 1000);
        const eventData = {
          eventName: "VisitPlans",
          eventTime,
          fbc,
          fbp,
          eventSourceUrl,
          clientUserAgent,
        };

        // Call API to send the event to Facebook
        const response = await fetch("/api/facebook-visit-plans", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error("Failed to send event to Facebook", data);
        } else {
          console.log("Event sent successfully to Facebook", data);
        }
      };

      sendEvent();
    }
  }, [pathname]);

  return (
    <section className="flex-center-col size-full overflow-hidden">
      <LazyMotion features={domAnimation}>
        <Pricing />
      </LazyMotion>
    </section>
  );
}
