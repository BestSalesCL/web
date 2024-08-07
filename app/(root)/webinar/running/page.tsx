"use client";
import React, { useEffect } from "react";
import { Hero } from "@/components/webinar/hero/Hero";
import { Reviews } from "@/components/webinar/videoReviews/Reviews";
import { Faqs } from "@/components/webinar/faqs/Faqs";
import { InfoSection } from "@/components/webinar/info/InfoSection";
import { Pricing } from "@/components/webinar/pricing/Pricing";
import DelayComponent from "@/components/shared/delay/DelayComponent";
import desktop from "@/public/assets/images/webinar/running/1.avif";
import phone from "@/public/assets/images/webinar/running/2.avif";
import player from "@/public/assets/images/webinar/running/3.avif";
import { LazyMotion, domAnimation } from "framer-motion";

import { usePathname } from "next/navigation";
// import titleimage from "@/public/assets/images/webinar/running/title.png";

export default function Running() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if the current route contains "/webinar/"
    if (pathname.includes("/webinar/")) {
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
          title="The PERFECT method to improve your Running performance"
          alt="RUNNING title"
          video={"https://player.vimeo.com/video/984533386?"} // Change the video ID to the id of the webinar video
        />

        <DelayComponent delay={60000}>
          <InfoSection
            title1={"Why Choose BestLevel?"}
            image1={desktop}
            alt1={
              "man sitting on a desktop seeing the website of The Best Level and a football video"
            }
            paragraph1={`
              <p>At BestLevel, we offer you an exceptional training experience with exclusive benefits that will help you reach your full potential, especially if you're a Runner.</p>
              <br>
              <ul style="padding-left: 0; list-style-type: none;">
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div><strong style="color: white;">10 Years of Experience:</strong> Trust in our experience of over 10 years helping athletes reach new goals.</div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div><strong style="color: white;">Personalized Service:</strong> Receive clear and specific guidance tailored to your individual needs in Running to improve your skills and performance.</div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div><strong style="color: white;">Olympic-Level Training:</strong> We work with athletes participating in the Olympic cycle and competing internationally, ensuring you receive the same level of training as champions.</div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div><strong style="color: white;">50% Off the First Month:</strong> Pay only half price in your first month. Try our methodology with no long-term commitments.</div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div><strong style="color: white;">Free Nutritional Advice:</strong> We provide free nutritional advice to optimize your performance on the road or track.</div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div><strong style="color: white;">24/7 Coach Chat:</strong> Enjoy a personalized chat with your coach available 24 hours a day, 7 days a week.</div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div><strong style="color: white;">110% Guarantee:</strong> If you don’t see results, we’ll refund your money and more. Improve your speed, endurance, and race times or get your investment back. That is how much we trust our method!</div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div><strong style="color: white;">Take Off in Your Sports Career:</strong> Make a difference and take the leap that others dare not try. With BestLevel, you'll be closer to achieving your dreams in the world of Running.</div>
                </li>
              </ul>
              <br>
            `}
            title2={"Benefits of Training With BestLevel"}
            image2={phone}
            alt2={"phone with personal progress"}
            paragraph2={`
              <p>Discover the path to your peak performance with BestLevel’s methodology. Our training guidance is designed to fit your individual needs in Running, ensuring tangible improvements in your performance on both track and road.</p>
              <br>
              <p><strong style="color: white;">You will receive attention in three phases:</strong> </p>
              <br>
              <ul style="padding-left: 0; list-style-type: none;">
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div>
                    <strong style="color: white;">Diagnostic Phase:</strong> Complete an initial survey, followed by an initial assessment and a strength evaluation. These steps allow us to build a personalized starting point based on your physical abilities and context. 
                    You will also receive an <strong style="color: white;">Evaluative Report</strong>. At the end of the first phase, you will receive a detailed report on your personalized athletic abilities.
                  </div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div>
                    <strong style="color: white;">Exercise Phase:</strong> Access the BestLevel app, where you will find your personalized plan based on your goals and the results of the assessments.
                  </div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div>
                    <strong style="color: white;">Monitoring Phase:</strong> Simultaneous with the exercise phase, our coaches conduct sports analyses, study your feedback and performance in training sessions, and review your technique in exercises. This allows us to make continuous adjustments according to your performance in each session.
                  </div>
                </li>
              </ul>
              <br>
              <p>Transform the way you train and reach your peak performance as a Runner.</p>
            `}
            title3={"The Results Speak For Themselves"}
            image3={player}
            alt3={"running player"}
            paragraph3={`
              <p style="color: #FFD154;">"Since I started training with BestLevel, my performance has improved significantly. I have much more presence on the court and have become a decisive player. The personalized service and constant monitoring have allowed me to achieve goals I never thought possible."</p>
              <br>
              <p>- Rafael Albornoz, professional Volleyball player</p>
              <br>
              <p><strong style="color: white;">Our athletes have achieved:</strong></p>
              <br>
              <ul style="padding-left: 0; list-style-type: none;">
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div>
                    <strong style="color: white;">Performance Increases:</strong> Continuous and sustained improvement in their skills over time.
                  </div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div>
                    <strong style="color: white;">Greater Confidence:</strong> Clarity and focus on their goals.
                  </div>
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: baseline;">
                  <span style="color: white; padding-right: 5px;">•</span>
                  <div>
                    <strong style="color: white;">Tangible Results:</strong> Goals reached and surpassed thanks to personalized training.
                  </div>
                </li>
              </ul>
              <br>
              <p>Join our successful athletes and transform your sports career with BestLevel’s methodology. Sign up now and start your journey to success.</p>
            `}
            buttonText={"Take our Course"}
            buttonLink={"pricing"}
          />
          <Reviews />
          <Pricing />
          <Faqs />
        </DelayComponent>
      </LazyMotion>
    </section>
  );
}
