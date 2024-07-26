"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "next-i18next";

const pricingFormSchema = z.object({
  firstName: z.string().min(1, "Please enter your name"),
  lastName: z.string().min(1, "Please enter your name"),
  emailAddress: z.string().email(),
  phoneNumber: z.string().min(8, "Please enter a valid phone number"),
  newField: z.string().min(1, "Please enter a value for the new field"), // Nuevo campo
  aboutYou: z.string().min(1, "Please tell us a bit about yourself"),
});

const ContactForm = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm<z.infer<typeof pricingFormSchema>>({
    resolver: zodResolver(pricingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      newField: "", // Valor por defecto para el nuevo campo
      aboutYou: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof pricingFormSchema>) => {
    setLoading(true);

    try {
      // Prepare data for external API and Facebook
      const combinedData = {
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.emailAddress,
        phoneNumber: values.phoneNumber,
        aboutYou: values.aboutYou,
      };

      // Send data to external API
      const externalApiResponse = await fetch("/api/external-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });

      const externalApiData = await externalApiResponse.json();

      // Facebook event data
      const eventName = "CompleteRegistration";
      const eventTime = Math.floor(Date.now() / 1000);
      const clientUserAgent = navigator.userAgent;
      const fbc = document.cookie.split("; ").find(row => row.startsWith("_fbc="))?.split("=")[1] || "";
      const fbp = document.cookie.split("; ").find(row => row.startsWith("_fbp="))?.split("=")[1] || "";
      const eventId = crypto.randomUUID();
      const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
      const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
      const clientIpAddress = "";

      const fbEventData = {
        event_name: eventName,
        event_time: eventTime,
        action_source: "website",
        event_id: eventId,
        user_data: {
          em: [values.emailAddress],
          ph: [values.phoneNumber],
          client_ip_address: clientIpAddress,
          client_user_agent: clientUserAgent,
          fbc: fbc,
          fbp: fbp,
          fn: values.firstName,
          ln: values.lastName,
        },
      };

      // Send data to Facebook
      const fbResponse = await fetch(
        `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([fbEventData]), // Send the event data as an array
        }
      );

      const fbResponseData = await fbResponse.json();

      if (!fbResponse.ok) {
        console.error("Error response from Facebook:", fbResponseData);
        throw new Error("Error sending event to Facebook");
      }

      console.log("Message sent successfully", externalApiData);

      router.push("/completado");
    } catch (error) {
      console.error("Error sending message or event to Facebook:", error);
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <section className="flex-center-col w-full gap-[60px] bg-background_color px-6 pb-[64px] pt-8 sm:px-[40px] md:px-[100px] md:pb-[96px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex-start-col h-fit w-full max-w-[600px] gap-5"
        >
          <div className="flex-start-col h-fit w-full gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-text_color">{t('Nombre')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('Ingresa tu nombre')} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-text_color">{t('Apellido')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('Ingresa tu apellido')} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-text_color">{t('Email')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('Ingresa tu email de contacto')} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-text_color">{t('Número de contacto')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('Ingresa tu número telefónico')} type="tel" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newField"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-text_color">{t('Cuánto es tu presupuesto mensual para invertir')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('Ingresa tu presupuesto mensual')} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutYou"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-text_color">{t('Cuéntanos un poco de ti')}</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder={t('Escribe sobre tu negocio')} className="h-[150px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="group transition-all duration-500 ease-out hover:bg-text_color">
            {!loading && (
              <p className="transition-all duration-500 ease-out group-hover:text-background_color">{t('Enviar')}</p>
            )}
            {loading && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="size-8 animate-spin fill-primary_color text-text_400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                    <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 72.4257 27.963 91.3073 50 91.3073C72.037 91.3073 90.9186 72.4257 90.9186 50.5908C90.9186 28.7558 72.037 9.87421 50 9.87421C27.963 9.87421 9.08144 28.7558 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
