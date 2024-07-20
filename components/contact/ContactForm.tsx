"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { fadeIn, show } from "@/utils/motion";
import { m } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/Textarea";  // Importa el nuevo componente Textarea
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";

const pricingFormSchema = z.object({
  firstName: z.string().min(1, "Please enter your name"),
  lastName: z.string().min(1, "Please enter your name"),
  emailAddress: z.string().email(),
  phoneNumber: z.string().min(8, "Please enter a valid phone number"),
  aboutYou: z.string().min(1, "Please tell us a bit about yourself"),
});

const ContactForm = () => {
  const router = useRouter(); // eslint-disable-line

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Form function
  const form = useForm<z.infer<typeof pricingFormSchema>>({
    resolver: zodResolver(pricingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      aboutYou: "",
    },
  });

  // Handle Form Submit
  const handleSubmit = async (values: z.infer<typeof pricingFormSchema>) => {
    setLoading(true);

    try {
      // Retrieve data from local storage
      const userSportsAnswers = localStorage.getItem("userSportsAnswers");
      let combinedData;

      if (userSportsAnswers) {
        combinedData = {
          ...JSON.parse(userSportsAnswers),
          name: values.firstName,
          lastName: values.lastName,
          email: values.emailAddress,
          aboutYou: values.aboutYou,
        };
      } else {
        combinedData = {
          name: values.firstName,
          lastName: values.lastName,
          email: values.emailAddress,
          aboutYou: values.aboutYou,
        };
      }

      // Send data to external API
      const externalApiResponse = await fetch("/api/contact-send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });

      const externalApiData = await externalApiResponse.json();
      console.log("Message sent successfully", externalApiData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  const isMobile = useIsMobile();

  return (
    <section className="flex-center-col w-full gap-[60px] bg-background_color px-6 pb-[64px] pt-8 sm:px-[40px] md:px-[100px] md:pb-[96px]">
      <m.div
        variants={isMobile ? show() : fadeIn("up", "tween", 0, 0.4)}
        initial={isMobile ? "visible" : "hidden"}
        whileInView={isMobile ? "visible" : "show"}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-[60px] flex h-fit w-full max-w-[1240px] flex-col items-center justify-center gap-4"
      >
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
                    <FormLabel className="text-text_color">Nombre</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Please enter your name"
                        type="text"
                      />
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
                    <FormLabel className="text-text_color">Apellido</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Please enter your last name"
                        type="text"
                      />
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
                    <FormLabel className="text-text_color">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Please enter your email"
                        type="email"
                      />
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
                    <FormLabel className="text-text_color">Número de contacto</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Please enter your phone number"
                        type="tel"
                      />
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
                    <FormLabel className="text-text_color">Cuéntanos un poco de ti</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Escribe aquí sobre ti"
                        className="h-[150px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="group transition-all duration-500 ease-out hover:bg-text_color"
            >
              {!loading && (
                <p className="transition-all duration-500 ease-out group-hover:text-background_color">
                  Enviar
                </p>
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
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C2
