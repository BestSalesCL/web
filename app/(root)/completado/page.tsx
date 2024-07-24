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
          Gracias por el registro!
        </h1>
        <div className="flex-start-col w-full gap-6">
          <p className="text-20 text-text_900">
            Nos pondremos en contacto pronto. Muy atento!
          </p>
          <div className="flex-start-col w-full gap-6">
            <p className="text-20 text-text_900">
              Que tengas un increíble día!
            </p>
            <div className="flex w-full items-center justify-start gap-4">
              <Link
                href="mailto:contact@thebestsales.co"
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
