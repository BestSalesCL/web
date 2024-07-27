"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Hero } from "@/components/webinar/hero/Hero";
import { Reviews } from "@/components/webinar/videoReviews/Reviews";
import { Faqs } from "@/components/homePage/faqs/Faqs";
// import { InfoSection } from "@/components/webinar/info/InfoSection";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import DelayComponent from "@/components/shared/delay/DelayComponent";
// import desktop from "@/public/assets/images/webinar/basketball/1.avif";
// import phone from "@/public/assets/images/webinar/basketball/2.avif";
// import player from "@/public/assets/images/webinar/basketball/3.avif";

import { LazyMotion, domAnimation } from "framer-motion";

const WebinarPage = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && pathname.includes("/webinar/")) {
      const eventSourceUrl = window.location.href; // Get current page URL as event source URL
      const clientUserAgent = navigator.userAgent; // Get client user agent

      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
      };

      const fbc = getCookie("_fbc");
      const fbp = getCookie("_fbp");

      const timer = setTimeout(async () => {
        const eventTime = Math.floor(new Date().getTime() / 1000);
        const eventData = {
          eventName: "TimeSpent",
          eventTime,
          fbc,
          fbp,
          eventSourceUrl,
          clientUserAgent,
          customData: {
            time_spent: "1 minute",
          },
        };

        // Call API to send the event to Facebook
        const response = await fetch("/api/facebook-time-spent", {
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
      }, 60000); // 1 minute in milliseconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [pathname]);

  return (
    <section className="flex-center-col size-full overflow-hidden">
      <LazyMotion features={domAnimation}>
        <Hero
          title="El embudo de ventas PERFECTO"
          alt="Marketing Video Webinar"
          video="https://player.vimeo.com/video/990412129?" // Change the video ID to the id of the webinar video
        />
        <DelayComponent delay={60000}>
          <Reviews />
          {/* <Pricing /> */}
          <ContactHero />
          <ContactForm />
          <Faqs />
        </DelayComponent>
      </LazyMotion>
    </section>
  );
};

export default WebinarPage;
