"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/assets/images/App-logo.png";
import stars from "@/public/assets/images/stars-rating.png";
import { Button } from "@/components/ui/button";
import { fadeIn, show } from "@/utils/motion";
import { m } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const DownloadApp = () => {
  const isMobile = useIsMobile();

  return (
    <m.div
      variants={isMobile ? show() : fadeIn("right", "tween", 0, 0.5)}
      initial={isMobile ? "visible" : "hidden"}
      whileInView={isMobile ? "visible" : "show"}
      viewport={{ once: true, amount: 0.2 }}
      className="flex-center-col w-full max-w-[600px] gap-8"
    >
      <div className="flex-center-col relative gap-4">
        {/* Logo Image */}
        <Image src={logo} alt="the best level app logo" />
        {/* Here are the stars from the reviews. It is an image, you can remove the comment to display it */}
        <Image src={stars} alt="five stars review" />

        <p className="subtitle px-4 text-center text-black sm:px-0">
          Empresas creando contenido
        </p>
        <p className="text-20 max-w-[280px] px-4 text-center text-black sm:px-0">
          La mejor manera de aumentar tus ventas
        </p>
      </div>
      {/* Comentando los botones de descarga */}
      {/*
      <div className="flex-center-col size-fit gap-3">
        <Button
          asChild
          className="group h-[52px] w-[304px] rounded-full border-2 border-background_color bg-white px-6 py-3 text-background_color hover:border-text_color hover:bg-background_color hover:text-text_color"
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.mycompany.thebestlevel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-center size-full gap-[4px]"
          >
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_66_435)">
                <path
                  d="M26.14 19.2209L9.16004 28.8775C7.38004 29.8892 5.17004 28.6042 5.17004 26.5559V7.24252C5.17004 5.19418 7.38004 3.90918 9.16004 4.92085L26.14 14.5775C27.94 15.6009 27.94 18.1959 26.14 19.2192V19.2209Z"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  className="stroke-background_color group-hover:stroke-text_color"
                />
                <path
                  d="M5.83337 6.39917L20.5 21.3992M5.83337 27.1675L20.6667 12.0658"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  className="stroke-background_color group-hover:stroke-text_color"
                />
              </g>
              <defs>
                <clipPath id="clip0_66_435">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0 0.89917)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-20-bold">Get it on Google Play</p>
          </Link>
        </Button>
        <Button
          asChild
          className="group h-[52px] w-[304px] rounded-full border-2 border-background_color bg-white px-6 py-3 text-background_color hover:border-text_color hover:bg-background_color hover:text-text_color"
        >
          <Link
            href="https://apps.apple.com/cl/app/bestlevel/id6478636317?l=en-GB"
            className="flex-center size-full gap-[4px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.6024 23.0784C27.9416 24.544 27.6232 25.1984 26.772 26.4944C25.5848 28.3024 23.908 30.5552 21.8328 30.5744C19.9896 30.5904 19.516 29.3744 17.012 29.3888C14.5096 29.4016 13.988 30.5968 12.1432 30.5792C10.068 30.56 8.47925 28.5264 7.29045 26.7168C3.96725 21.6608 3.62005 15.7248 5.66965 12.568C7.12565 10.3264 9.42485 9.01439 11.5848 9.01439C13.7848 9.01439 15.1688 10.2208 16.9864 10.2208C18.7512 10.2208 19.8264 9.01119 22.3704 9.01119C24.2904 9.01119 26.3288 10.0592 27.78 11.8672C23.0248 14.4736 23.796 21.264 28.6024 23.0784ZM20.4408 6.99199C21.364 5.80479 22.0664 4.13119 21.812 2.41919C20.3016 2.52319 18.5368 3.48319 17.5048 4.73599C16.5704 5.87199 15.7976 7.55679 16.0968 9.19519C17.7448 9.24479 19.4504 8.26079 20.4408 6.99199Z"
                className="fill-background_color group-hover:fill-text_color"
              />
            </svg>
            <p className="text-20-bold">Get it on the App Store</p>
          </Link>
        </Button>
      </div>
      */}
    </m.div>
  );
};

export { DownloadApp };
