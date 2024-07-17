"use client";
import React from "react";
import { fadeIn, show } from "@/utils/motion";
import { m } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import useIsMobile from "@/hooks/useIsMobile";

type Info = {
  title1: string;
  image1: string | StaticImageData;
  alt1: string;
  paragraph1: string;
  title2: string;
  image2: string | StaticImageData;
  alt2: string;
  paragraph2: string;
  title3: string;
  image3: string | StaticImageData;
  alt3: string;
  paragraph3: string;
  buttonText: string;
  buttonLink: string;
};

const InfoSection = ({
  title1,
  image1,
  alt1,
  paragraph1,
  title2,
  image2,
  alt2,
  paragraph2,
  title3,
  image3,
  alt3,
  paragraph3,
  buttonText,
  buttonLink,
}: Info) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const offset = 100; // Adjust this value according to your fixed header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element?.getBoundingClientRect().top ?? 0;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const isMobile = useIsMobile();

  return (
    <section className="flex-center-col mt-6 h-fit w-full gap-[60px] bg-background_color px-6 pb-[64px] pt-8 sm:px-[40px] md:px-[100px] md:pb-[96px]">
      {/* Content #1 */}
      <m.div
        variants={isMobile ? show() : fadeIn("right", "tween", 0, 0.4)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-center-col h-fit w-full max-w-[1240px] gap-[40px] sm:flex-row sm:items-center sm:justify-center sm:gap-[80px]"
      >
        {/* Image */}
        <div className="flex-center size-full max-w-[440px] md:max-h-[680px]">
          <Image
            src={image1}
            alt={alt1}
            className="rounded-[12px] object-contain object-center sm:rounded-[24px]"
          />
        </div>
        {/* Content */}
        <div className="flex size-full max-w-[680px] flex-col items-start justify-center gap-6">
          {/* Title */}
          <h3 className="subtitle md:h2-small text-left text-text_color">
            {title1}
          </h3>
          <div className="flex-start-col gap-4">
            <div className="text-white">
              <p
                className="text-16 text-left text-text_500"
                dangerouslySetInnerHTML={{ __html: paragraph1 }}
              />
            </div>
            <Button
              className="group size-fit px-5 py-3 text-text_color transition-all duration-300 ease-out hover:cursor-pointer hover:bg-text_color"
              onClick={() => handleScroll(buttonLink)}
              asChild
            >
              <div className="flex-center gap-2">
                <p className="text-20-semibold text-text_color transition-all duration-300 ease-out group-hover:text-background_color">
                  {buttonText}
                </p>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-text_300 transition-all duration-300 ease-out group-hover:stroke-background_color"
                  stroke="currentColor"
                >
                  <path
                    d="M5 12.1978H19"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5.19775L19 12.1978L12 19.1978"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </m.div>

      {/* Content #2 */}
      <m.div
        variants={isMobile ? show() : fadeIn("left", "tween", 0, 0.4)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-center-col h-fit w-full max-w-[1240px] gap-[40px] sm:flex-row sm:items-center sm:justify-center sm:gap-[80px]"
      >
        {/* Image mobile */}
        <div className="flex-center size-full max-w-[440px] sm:hidden md:max-h-[680px]">
          <Image
            src={image2}
            alt={alt2}
            className="rounded-[12px] object-contain object-center sm:rounded-[24px]"
          />
        </div>

        {/* Content */}
        <div className="flex size-full max-w-[680px] flex-col items-start justify-center gap-6">
          {/* Title */}
          <h3 className="subtitle md:h2-small text-left text-text_color">
            {title2}
          </h3>
          <div className="flex-start-col gap-4">
            <p
              className="text-16 text-left text-text_500"
              dangerouslySetInnerHTML={{ __html: paragraph2 }}
            />
            <Button
              className="group size-fit px-5 py-3 text-text_color transition-all duration-300 ease-out hover:cursor-pointer hover:bg-text_color"
              onClick={() => handleScroll(buttonLink)}
              asChild
            >
              <div className="flex-center gap-2">
                <p className="text-20-semibold text-text_color transition-all duration-300 ease-out group-hover:text-background_color">
                  {buttonText}
                </p>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-text_300 transition-all duration-300 ease-out group-hover:stroke-background_color"
                  stroke="currentColor"
                >
                  <path
                    d="M5 12.1978H19"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5.19775L19 12.1978L12 19.1978"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>

        {/* Image tablet and desktop */}
        <div className="sm:flex-center hidden size-full max-w-[440px] md:max-h-[680px]">
          <Image
            src={image2}
            alt={alt2}
            className="rounded-[12px] object-contain object-center sm:rounded-[24px]"
          />
        </div>
      </m.div>

      {/* Content #3 */}
      <m.div
        variants={isMobile ? show() : fadeIn("right", "tween", 0, 0.4)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-center-col h-fit w-full max-w-[1240px] gap-[40px] sm:flex-row sm:items-center sm:justify-center sm:gap-[80px]"
      >
        {/* Image */}
        <div className="flex-center size-full max-w-[440px] md:max-h-[680px]">
          <Image
            src={image3}
            alt={alt3}
            className="w-full rounded-[12px] object-contain object-center sm:rounded-[24px]"
          />
        </div>
        {/* Content */}
        <div className="flex size-full max-w-[680px] flex-col items-start justify-center gap-6">
          {/* Title */}
          <h3 className="subtitle md:h2-small text-left text-text_color">
            {title3}
          </h3>
          <div className="flex-start-col gap-4">
            <p
              className="text-16 text-left text-text_500"
              dangerouslySetInnerHTML={{ __html: paragraph3 }}
            />
            <Button
              className="group size-fit px-5 py-3 text-text_color transition-all duration-300 ease-out hover:cursor-pointer hover:bg-text_color"
              onClick={() => handleScroll(buttonLink)}
              asChild
            >
              <div className="flex-center gap-2">
                <p className="text-20-semibold text-text_color transition-all duration-300 ease-out group-hover:text-background_color">
                  {buttonText}
                </p>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-text_300 transition-all duration-300 ease-out group-hover:stroke-background_color"
                  stroke="currentColor"
                >
                  <path
                    d="M5 12.1978H19"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5.19775L19 12.1978L12 19.1978"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </m.div>
    </section>
  );
};

export { InfoSection };
