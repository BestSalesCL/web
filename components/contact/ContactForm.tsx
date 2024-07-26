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
      const userSportsAnswers = localStorage.getItem("userSportsAnswers");
      let combinedData;

      if (userSportsAnswers) {
        combinedData = {
          ...JSON.parse(userSportsAnswers),
          name: `${values.firstName} ${values.lastName}`,
          email: values.emailAddress,
          phoneNumber: values.phoneNumber,
          newField: values.newField,
          aboutYou: values.aboutYou,
        };
      } else {
        combinedData = {
          name: `${values.firstName} ${values.lastName}`,
          email: values.emailAddress,
          phoneNumber: values.phoneNumber,
          newField: values.newField,
          aboutYou: values.aboutYou,
        };
      }

      const externalApiResponse = await fetch("/api/contact-send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });

      const externalApiData = await externalApiResponse.json();
      console.log("Message sent successfully", externalApiData);

      // Delay to allow GTM to capture the event
      setTimeout(() => {
        router.push("/completado");
      }, 1000); // 1-second delay
    } catch (error) {
      console.error(error);
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
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5695 10.4717 44.0687 10.1071C47.9519 9.4987 51.9025 9.52618 55.7461 10.179C60.8785 11.0364 65.7718 13.0682 70.1311 16.1665C74.4903 19.2649 78.2106 23.3525 80.987 28.159C83.3332 32.0506 85.007 36.2541 86.0079 40.5713C86.635 42.9289 89.5423 43.6781 91.9676 43.0409Z"
                    fill="currentFill"
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
