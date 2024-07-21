"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PlansPage = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Check if pathname is not null and contains "/plans"
    if (pathname && pathname.includes("/plans")) {
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
    <section>
      {/* Your page content here */}
      <h1>Plans Page</h1>
    </section>
  );
};

export default PlansPage;
