"use client";

import React from "react";
// import logo from "@/public/assets/icons/tbl-logo.png";
import instagram from "@/public/assets/icons/instagram.svg";
import facebook from "@/public/assets/icons/facebook.svg";
import youtube from "@/public/assets/icons/youtube.svg";
import tiktok from "@/public/assets/icons/tiktok.svg";
import messenger from "@/public/assets/icons/messenger.svg";
import Image from "next/image";
import Link from "next/link";
// import { NavLinksData } from "@/constants/navLinksData";
// import { Button } from "@/components/ui/button";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { fadeIn, show } from "@/utils/motion";
import { usePathname } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";

const Footer = () => {
  // const router = usePathname();
  // const isNotWebinarPage = !router.includes("/webinar");
  const isMobile = useIsMobile();

  return (
    <LazyMotion features={domAnimation}>
      <m.footer
        variants={isMobile ? show() : fadeIn("down", "tween", 0, 0.4)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true }}
        className="flex-center h-fit w-full border-t-2 border-solid border-t-secondary_200 bg-background_color px-6 md:px-[40px] lg:px-[100px]"
      >
        <div className="flex-start-col h-auto w-full max-w-[1240px] gap-12 py-12 sm:py-[56px]">
          {/* <div className="flex-start-col size-full gap-12 sm:gap-[28px] md:flex-row md:items-start md:justify-center md:gap-[52px] lg:justify-between">
            <div className="flex-center-col h-fit w-full gap-4 sm:w-fit">
              <Link href="/" className="size-fit">
                <Image
                  src={logo}
                  alt="the best level logo"
                  className="h-[60px] w-[52px]"
                />
              </Link>
              <h6 className="subtitle whitespace-nowrap text-center text-text_color">
                Reach Your BestLevel
              </h6>
              {isNotWebinarPage && (
                <Button asChild className="size-fit rounded-full">
                  <Link
                    href="/sports-survey"
                    className="group rounded-full border border-solid bg-text_color px-6 py-3 hover:border-text_color hover:bg-transparent"
                  >
                    <p className="text-20-semibold text-background_color group-hover:text-text_color">
                      Choose Your Sport
                    </p>
                  </Link>
                </Button>
              )}
            </div>

            <div className="flex-start-col size-fit gap-12 sm:gap-[56px] ">
              <h6 className="subtitle whitespace-nowrap text-center text-text_color">
                Company
              </h6>
              <div className="flex-start-col gap-6">
                {NavLinksData.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={item.link}
                      className="w-fit whitespace-nowrap hover:underline"
                    >
                      <p className="text-20-bold w-fit whitespace-nowrap text-white hover:underline">
                        {item.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex-start-col h-fit w-full gap-12 sm:w-fit sm:gap-[56px]">
              <h6 className="subtitle whitespace-nowrap text-center text-text_color">
                Contact
              </h6>

              <div className="flex-start-col h-fit w-full gap-8">
                <div className="flex-start-col gap-2">
                  <p className="text-20-bold whitespace-nowrap text-center text-text_color">
                    Email
                  </p>
                  <Link href="mailto:contact@thebestlevel.com">
                    <p className="text-16 whitespace-nowrap text-center text-text_500">
                      contact@thebestlevel.com
                    </p>
                  </Link>
                </div>
                <div className="flex-start-col size-full gap-4">
                  <p className="text-20-bold whitespace-nowrap text-center text-text_color">
                    Download our Free App
                  </p>
                  <Button
                    asChild
                    className="group h-[52px] w-full rounded-full border-2 border-background_color bg-white px-6 py-3 text-background_color hover:border-text_color hover:bg-background_color hover:text-text_color sm:w-[304px]"
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
                    className="group h-[52px] w-full rounded-full border-2 border-background_color bg-white px-6 py-3 text-background_color hover:border-text_color hover:bg-background_color hover:text-text_color sm:w-[304px]"
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
              </div>
            </div>
          </div> */}

          {/* Redes Sociales */}
          <div className="flex-begin-col h-fit w-full gap-8 sm:flex sm:items-center sm:justify-end md:flex-row md:justify-start">
            <div className="flex-start w-full gap-4">
              <Link
                href="https://www.instagram.com/bestlevel_/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8"
              >
                <Image
                  src={instagram}
                  alt="instagram logo"
                  className="size-8"
                />
              </Link>
              <Link
                href="https://www.facebook.com/BestLevelusa/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8"
              >
                <Image src={facebook} alt="facebook logo" className="size-8" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCs5uBvimqqLUNgylXzyasbw"
                target="_blank"
                rel="noopener noreferrer"
                className="size-fit"
              >
                <Image
                  src={youtube}
                  alt="youtube logo"
                  className="h-[30px] w-auto"
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@bestlevel___"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8"
              >
                <Image src={tiktok} alt="tiktok logo" className="size-8" />
              </Link>
              <Link
                href="https://www.messenger.com/t/246498965213818"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8"
              >
                <Image
                  src={messenger}
                  alt="messenger logo"
                  className="size-8"
                />
              </Link>
            </div>
            <div className="flex-begin-col w-full items-center justify-end gap-4 sm:flex sm:flex-row sm:items-center sm:justify-start">
              <p className="text-16 w-fit whitespace-nowrap text-white">
                @ 2024 All Rights Reserved
              </p>
              <Link
                href="/privacy-policy"
                className="w-fit whitespace-nowrap hover:underline"
              >
                <h6 className="text-16 w-fit whitespace-nowrap text-white hover:underline">
                  Privacy Policy
                </h6>
              </Link>
              <Link
                href="/terms-and-conditions"
                className="w-fit whitespace-nowrap hover:underline"
              >
                <h6 className="text-16 w-fit whitespace-nowrap text-white hover:underline">
                  Terms and Conditions
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </m.footer>
    </LazyMotion>
  );
};

export { Footer };
