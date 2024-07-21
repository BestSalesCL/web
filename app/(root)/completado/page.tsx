"use client";
import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import email from "@/public/assets/icons/email.svg";
import Link from "next/link";

const CompleteRegistrationPage = () => {
  const searchParams = useSearchParams();
  const leadId = searchParams.get("lead_id");

  useEffect(() => {
    const fetchLeadDetails = async () => {
      if (leadId) {
        try {
          const eventSourceUrl = window.location.href; // Get current page URL as event source URL
          const clientUserAgent = navigator.userAgent; // Get client user agent

          // Retrieve customer data from local storage
          const storedCustomerData = localStorage.getItem("customerData");
          const customer = storedCustomerData
            ? JSON.parse(storedCustomerData)
            : {};

          // Get cookies for fbc and fbp
          const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(";").shift();
          };

          const fbc = getCookie("_fbc");
          const fbp = getCookie("_fbp");

          // Send data to Facebook Conversion API
          const fbResponse = await fetch("/api/facebook-lead", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              leadId,
              customer,
              eventSourceUrl,
              clientUserAgent,
              fbc,
              fbp,
            }),
          });

          if (!fbResponse.ok) {
            console.error("Failed to send lead event to Facebook");
          } else {
            const data = await fbResponse.json();
            console.log("Lead event sent successfully to Facebook", data);
          }
        } catch (error) {
          console.error("Error sending lead event to Facebook:", error);
        }
      }
    };

    fetchLeadDetails();
  }, [leadId]);

  return (
    <section className="flex-center-col mt-[60px] size-full overflow-hidden px-6 pb-[64px] pt-8 sm:px-[40px] md:px-[100px] md:pb-[96px]">
      <div className="flex h-auto max-w-[800px] flex-col items-center justify-start gap-8 rounded-[24px] bg-primary_200 px-6 py-8 sm:px-8 md:py-10">
        <h1 className="h2-small md:h1-small w-full text-center text-background_color">
          Thank You for Your Registration!
        </h1>
        <div className="flex-start-col w-full gap-6">
          <p className="text-20 text-text_900">
            We will get in touch with you soon. Stay tuned!
          </p>
          <div className="flex-start-col w-full gap-6">
            <p className="text-20 text-text_900">
              Contact Us if you have any trouble!
            </p>
            <div className="flex w-full items-center justify-start gap-4">
              <Link
                href="mailto:contact@thebestlevel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group size-10 transition-all duration-300 ease-in-out hover:size-11"
              >
                <Image
                  src={email}
                  alt="email logo"
                  className="size-10 transition-all duration-300 group-hover:size-11 group-hover:transition-all group-hover:ease-in-out"
                />
              </Link>
              <Link
                href="https://www.instagram.com/bestlevel_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group size-10 transition-all duration-300 ease-in-out hover:size-11"
              >
                <svg
                  className="size-10 transition-all duration-300 group-hover:size-11 group-hover:transition-all group-hover:ease-in-out"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.734 24.3052C21.1523 24.3052 24.734 20.7234 24.734 16.3052C24.734 11.8869 21.1523 8.30518 16.734 8.30518C12.3157 8.30518 8.73401 11.8869 8.73401 16.3052C8.73401 20.7234 12.3157 24.3052 16.734 24.3052ZM16.734 21.6385C19.6795 21.6385 22.0673 19.2506 22.0673 16.3052C22.0673 13.3597 19.6795 10.9718 16.734 10.9718C13.7885 10.9718 11.4007 13.3597 11.4007 16.3052C11.4007 19.2506 13.7885 21.6385 16.734 21.6385Z"
                    fill="#354360"
                  />
                  <path
                    d="M24.734 6.97168C23.9976 6.97168 23.4007 7.56864 23.4007 8.30501C23.4007 9.04139 23.9976 9.63835 24.734 9.63835C25.4704 9.63835 26.0674 9.04139 26.0674 8.30501C26.0674 7.56864 25.4704 6.97168 24.734 6.97168Z"
                    fill="#354360"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.93927 6.00675C2.06732 7.71805 2.06732 9.95826 2.06732 14.4387V18.172C2.06732 22.6524 2.06732 24.8927 2.93927 26.6039C3.70626 28.1092 4.93009 29.3331 6.4354 30.1C8.1467 30.972 10.3869 30.972 14.8673 30.972H18.6007C23.0811 30.972 25.3213 30.972 27.0325 30.1C28.5379 29.3331 29.7617 28.1092 30.5287 26.6039C31.4007 24.8927 31.4007 22.6524 31.4007 18.172V14.4387C31.4007 9.95826 31.4007 7.71805 30.5287 6.00675C29.7617 4.50145 28.5379 3.27761 27.0325 2.51062C25.3213 1.63867 23.0811 1.63867 18.6007 1.63867H14.8673C10.3869 1.63867 8.1467 1.63867 6.4354 2.51062C4.93009 3.27761 3.70626 4.50145 2.93927 6.00675ZM18.6007 4.30534H14.8673C12.5831 4.30534 11.0303 4.30742 9.83009 4.40547C8.66097 4.50099 8.06311 4.67413 7.64604 4.88663C6.64251 5.39797 5.82662 6.21386 5.31528 7.21739C5.10278 7.63446 4.92964 8.23233 4.83412 9.40144C4.73607 10.6017 4.73399 12.1545 4.73399 14.4387V18.172C4.73399 20.4563 4.73607 22.0089 4.83412 23.2092C4.92964 24.3784 5.10278 24.9763 5.31528 25.3933C5.82662 26.3968 6.64251 27.2127 7.64604 27.724C8.06311 27.9365 8.66097 28.1097 9.83009 28.2052C11.0303 28.3032 12.5831 28.3053 14.8673 28.3053H18.6007C20.8849 28.3053 22.4376 28.3032 23.6379 28.2052C24.8071 28.1097 25.4049 27.9365 25.822 27.724C26.8255 27.2127 27.6413 26.3968 28.1527 25.3933C28.3652 24.9763 28.5384 24.3784 28.6339 23.2092C28.7319 22.0089 28.734 20.4563 28.734 18.172V14.4387C28.734 12.1545 28.7319 10.6017 28.6339 9.40144C28.5384 8.23233 28.3652 7.63446 28.1527 7.21739C27.6413 6.21386 26.8255 5.39797 25.822 4.88663C25.4049 4.67413 24.8071 4.50099 23.6379 4.40547C22.4376 4.30742 20.8849 4.30534 18.6007 4.30534Z"
                    fill="#354360"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.messenger.com/t/246498965213818"
                target="_blank"
                rel="noopener noreferrer"
                className="group size-10 transition-all duration-300 ease-in-out hover:size-11"
              >
                <svg
                  className="size-10 transition-all duration-300 group-hover:size-11 group-hover:transition-all group-hover:ease-in-out"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0.921875C25.0144 0.921875 32 7.52507 32 16.4419C32 25.3587 25.0128 31.9619 16 31.9619C14.4354 31.9659 12.8774 31.7593 11.368 31.3475C11.0845 31.2695 10.7828 31.2916 10.5136 31.4099L7.3376 32.8115C7.14581 32.8962 6.93613 32.9326 6.727 32.9173C6.51787 32.902 6.31569 32.8356 6.13824 32.7239C5.96079 32.6122 5.8135 32.4586 5.70933 32.2766C5.60515 32.0946 5.54728 31.8899 5.5408 31.6803L5.4544 28.8323C5.44843 28.659 5.40719 28.4887 5.33318 28.3319C5.25918 28.1751 5.15398 28.035 5.024 27.9203C1.912 25.1363 0 21.1075 0 16.4419C0 7.52507 6.9856 0.921875 16 0.921875ZM6.392 20.9811C5.9408 21.6963 6.8208 22.5027 7.4944 21.9907L12.5424 18.1603C12.709 18.0345 12.9121 17.9665 13.1208 17.9665C13.3295 17.9665 13.5326 18.0345 13.6992 18.1603L17.4368 20.9603C17.7021 21.1595 18.0058 21.3016 18.3287 21.3775C18.6517 21.4534 18.9868 21.4616 19.3131 21.4014C19.6394 21.3413 19.9496 21.2142 20.2243 21.0281C20.4989 20.842 20.732 20.601 20.9088 20.3203L25.608 12.8643C26.0592 12.1475 25.1792 11.3411 24.5056 11.8515L19.4576 15.6851C19.291 15.8108 19.0879 15.8789 18.8792 15.8789C18.6705 15.8789 18.4674 15.8108 18.3008 15.6851L14.5616 12.8851C14.2964 12.6861 13.9928 12.5443 13.67 12.4685C13.3472 12.3927 13.0122 12.3846 12.6862 12.4448C12.3601 12.5049 12.0501 12.6319 11.7755 12.8179C11.501 13.0038 11.268 13.2446 11.0912 13.5251L6.392 20.9811Z"
                    fill="#354360"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function CompleteRegistration() {
  return (
    <Suspense>
      <CompleteRegistrationPage />
    </Suspense>
  );
}
