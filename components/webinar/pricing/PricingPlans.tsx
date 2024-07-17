"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { PricingPlansData } from "@/constants/pricingPlansData";
import { fadeIn } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
// import { trackEvent } from "@/lib/fbpixel";

const pricingFormSchema = z.object({
  firstName: z.string().min(1, "Please enter your name"),
  lastName: z.string().min(1, "Please enter your name"),
  emailAddress: z.string().email(),
});

const PricingPlans = () => {
  const [productPriceId, setProductPriceId] = React.useState<
    string | undefined
  >("");
  const [productPrice, setProductPrice] = React.useState<string | undefined>(
    ""
  );

  const router = useRouter(); // eslint-disable-line
  const cancelUrl = typeof window !== "undefined" ? window.location.href : "";

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 16);
  };

  const handleProductPrice = (prop: string | undefined) => {
    setProductPrice(prop);
  };

  const handleProductPriceId = (prop: string | undefined) => {
    setProductPriceId(prop);
  };

  // button Click send to facebook
  const handleButtonClick = async (buttonId: string, eventName: string) => {
    try {
      const eventSourceUrl = window.location.href; // Get current page URL as event source URL
      const clientUserAgent = navigator.userAgent; // Get client user agent

      // Get cookies for fbc and fbp
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
      };

      const fbc = getCookie("_fbc");
      const fbp = getCookie("_fbp");

      // Example of sending button click event to API
      const response = await fetch("/api/facebook-button-click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName,
          buttonId,
          eventSourceUrl,
          clientUserAgent,
          fbc,
          fbp,
        }),
      });

      if (!response.ok) {
        console.error("Failed to send button click event to Facebook API");
      } else {
        const data = await response.json();
        console.log(
          "Button click event sent successfully to Facebook API",
          data
        );
      }
    } catch (error) {
      console.error("Error sending button click event:", error);
    }
  };

  const [loading, setLoading] = useState(false);

  // Form function
  const form = useForm<z.infer<typeof pricingFormSchema>>({
    resolver: zodResolver(pricingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
    },
  });

  // Handle Form Submit
  const handleSubmit = async (values: z.infer<typeof pricingFormSchema>) => {
    setLoading(true);

    try {
      // Create customer
      const customerResponse = await fetch("/api/create-customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const customerData = await customerResponse.json();
      const customerId = customerData.customer.id;

      // Store customer data including last name
      const customer = {
        id: customerId,
        email: values.emailAddress,
        name: values.firstName,
        lastname: values.lastName,
      };

      // Create Checkout Session
      const checkoutResponse = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId,
          priceId: productPriceId,
          cancelUrl,
          productPrice,
        }), // productPrice is comes from the card, depends on the chosen plan
      });

      const checkoutData = await checkoutResponse.json();
      const { sessionId } = checkoutData;

      // Store customer data in local storage or pass it directly
      localStorage.setItem("customerData", JSON.stringify(customer));

      // Retrieve data from local storage
      const userSportsAnswers = localStorage.getItem("userSportsAnswers");
      let combinedData;

      if (userSportsAnswers) {
        combinedData = {
          ...JSON.parse(userSportsAnswers),
          userId: customerId,
          uniqueIdentifier: generateUniqueId(),
          name: values.firstName,
          lastName: values.lastName,
          email: values.emailAddress,
        };
      } else {
        combinedData = {
          userId: customerId,
          uniqueIdentifier: generateUniqueId(),
          name: values.firstName,
          lastName: values.lastName,
          email: values.emailAddress,
        };
      }

      // Send data to external API
      const externalApiResponse = await fetch("/api/survey-answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });

      const externalApiData = await externalApiResponse.json();
      console.log("Data sent successfully to external API", externalApiData);

      // Redirect to Checkout
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
      );
      await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Monthly form show
  const [enterMonthlyEmail, setEnterMonthlyEmail] =
    React.useState<boolean>(false);

  const handleStartMonthlyButton = () => {
    setEnterMonthlyEmail(true);
  };

  // Handle Annually form show
  const [enterAnnuallyEmail, setEnterAnnuallyEmail] =
    React.useState<boolean>(false);

  const handleStartAnnuallyButton = () => {
    setEnterAnnuallyEmail(true);
  };

  // Handle Free form show
  const [enterFreeEmail, setEnterFreeEmail] = React.useState<boolean>(false);

  const handleStartFreeButton = () => {
    setEnterFreeEmail(true);
  };

  return (
    <motion.div
      variants={fadeIn("up", "tween", 0, 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="flex-start-col h-fit w-full max-w-[1240px] gap-[40px] transition-all duration-500 ease-in-out"
    >
      <p className="text-16 md:text-20 text-left text-text_color">
        *1% of the profits from each purchase goes to the BestLevel Scholarship
        Program.
      </p>
      <AnimatePresence>
        <div className="lg:flex-center flex-center-col h-fit w-full max-w-[1240px] items-center justify-start gap-[60px] transition-all duration-500 ease-in-out lg:flex-row">
          {PricingPlansData.map((card, i) => {
            return (
              <div
                key={i}
                className="flex-center-col relative w-full max-w-[400px] gap-[32px] rounded-lg border-2 border-solid border-text_color px-[32px] py-[24px] shadow-pricingCard transition-all duration-500 ease-in-out hover:shadow-pricingCardHover sm:max-w-[400px] md:min-h-[705px] md:justify-between"
              >
                {card.plans && (
                  <>
                    <div className="flex-center absolute left-1/2 top-0 h-[56px] w-fit -translate-x-1/2 -translate-y-1/2 rounded-full bg-text_color px-6 shadow-pricingCardHover">
                      <p className="text-20-semibold whitespace-nowrap text-background_color">
                        Most Popular
                      </p>
                    </div>

                    <Tabs
                      defaultValue="monthly"
                      className="flex-center-col w-full "
                    >
                      {/* Monthly Tab Content */}
                      <TabsContent
                        value="monthly"
                        className="flex-center-col h-fit w-full gap-[32px] transition-all duration-500 ease-in-out"
                      >
                        <div className="flex-start-col mt-4 h-fit w-full gap-3">
                          <h4 className="subtitle text-text_color">
                            {card.title}
                          </h4>
                          <div className="flex size-fit flex-row items-end justify-start gap-2">
                            <p className="h2-big text-text_color">
                              ${card.price}
                            </p>
                            <p className="text-20-semibold text-text_500">
                              /month
                            </p>
                          </div>
                          <p className="text-16 text-text_600">
                            {card.description}
                          </p>
                        </div>

                        <TabsList className="w-full border-2 border-solid border-text_color bg-transparent p-0">
                          <TabsTrigger
                            value="monthly"
                            className="text-20-semibold data-[state=active]:text-20-bold w-full bg-transparent text-text_400 shadow-none data-[state=active]:border-2 data-[state=active]:border-solid data-[state=active]:border-text_color data-[state=active]:bg-text_color data-[state=active]:text-background_color data-[state=active]:shadow-none"
                          >
                            Monthly
                          </TabsTrigger>
                          <TabsTrigger
                            value="annually"
                            className="text-20-semibold data-[state=active]:text-20-bold w-full bg-transparent text-text_400 shadow-none data-[state=active]:border-2 data-[state=active]:border-solid data-[state=active]:border-text_color data-[state=active]:bg-text_color data-[state=active]:text-background_color data-[state=active]:shadow-none"
                          >
                            Annually
                          </TabsTrigger>
                        </TabsList>

                        <ul className="flex-start-col h-fit w-full gap-4">
                          {card.features.map((item, index) => {
                            return (
                              <li
                                className="flex w-full items-center justify-start gap-[12px]"
                                key={index}
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="flex-center min-h-[20px] min-w-[20px]"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM13.6103 8.18593C13.8511 7.84887 13.773 7.38046 13.4359 7.1397C13.0989 6.89894 12.6305 6.97701 12.3897 7.31407L9.1543 11.8436L7.53033 10.2197C7.23744 9.92678 6.76256 9.92678 6.46967 10.2197C6.17678 10.5126 6.17678 10.9874 6.46967 11.2803L8.71967 13.5303C8.87556 13.6862 9.09215 13.7656 9.31186 13.7474C9.53157 13.7293 9.73216 13.6153 9.8603 13.4359L13.6103 8.18593Z"
                                    fill="#ECEDEF"
                                  />
                                </svg>
                                <p
                                  className={`text-16 ${
                                    item.highlight ? "font-bold text-white" : "text-text_600"
                                  }`}
                                >
                                  {item.name}
                                </p>
                              </li>
                            );
                          })}
                        </ul>

                        <Button
                          className={`group h-fit w-full rounded-full border-2 border-solid border-text_color bg-text_color px-6 py-3 shadow-pricingCard transition-all duration-500 ease-out hover:cursor-pointer hover:bg-primary_color hover:shadow-pricingCardHover ${
                            enterMonthlyEmail === true ? "hidden" : "flex"
                          }`}
                          asChild
                          onClick={() => {
                            handleStartMonthlyButton();
                            handleProductPrice(card.price);
                            handleProductPriceId(card.monthlyPriceId);
                            handleButtonClick(
                              "performance-btn",
                              "PerformanceBtnClick"
                            );
                          }}
                          id="performance-btn"
                        >
                          <div
                            className={`gap-2 ${
                              enterMonthlyEmail === true ? "hidden" : "flex-between"
                            }`}
                          >
                            <p className="text-20-semibold text-background_color transition-all duration-300 ease-out">
                              {card.buttonText}
                            </p>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="stroke-background_color transition-all duration-300 ease-out"
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

                        {/* Form to enter name, lastname and email */}
                        {enterMonthlyEmail && (
                          <Form {...form}>
                            <motion.form
                              onSubmit={form.handleSubmit(handleSubmit)}
                              className="flex-start-col h-fit w-full gap-5"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              layout
                            >
                              <div className="flex-start-col h-fit w-full gap-3">
                                <p className="text-20-semibold text-text_color">
                                  To continue, please fill the following form
                                </p>
                                <FormField
                                  control={form.control}
                                  name="firstName"
                                  render={({ field }) => (
                                    <FormItem className="w-full">
                                      <FormLabel className="text-text_color">
                                        Name
                                      </FormLabel>
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
                                      <FormLabel className="text-text_color">
                                        Last Name
                                      </FormLabel>
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
                                      <FormLabel className="text-text_color">
                                        Email Address
                                      </FormLabel>
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
                              </div>

                              <Button
                                type="submit"
                                className="group transition-all duration-500 ease-out hover:bg-text_color"
                                // onClick={handlePerformancePlanMonthlyClick}
                              >
                                {!loading && (
                                  <p className="transition-all duration-500 ease-out group-hover:text-background_color">
                                    Continue to Checkout
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
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </Button>
                            </motion.form>
                          </Form>
                        )}
                      </TabsContent>

                      {/* Annually Tab Content */}
                      <TabsContent
                        value="annually"
                        className="flex-center-col h-fit w-full gap-[32px] transition-all duration-500 ease-in-out"
                      >
                        <div className="flex-start-col mt-4 h-fit w-full gap-3">
                          <h4 className="subtitle text-text_color">
                            {card.title}
                          </h4>
                          <div className="flex size-fit flex-row items-end justify-start gap-2">
                            <p className="h2-big text-text_color">
                              ${card.annualPrice}
                            </p>
                            <p className="text-20-semibold text-text_500">
                              /month
                            </p>
                          </div>
                          <p className="text-16 text-text_600">
                            {card.description}
                          </p>
                        </div>

                        <TabsList className="w-full border-2 border-solid border-text_color bg-transparent p-0">
                          <TabsTrigger
                            value="monthly"
                            className="text-20-semibold data-[state=active]:text-20-bold w-full bg-transparent text-text_400 shadow-none data-[state=active]:border-2 data-[state=active]:border-solid data-[state=active]:border-text_color data-[state=active]:bg-text_color data-[state=active]:text-background_color data-[state=active]:shadow-none"
                          >
                            Monthly
                          </TabsTrigger>
                          <TabsTrigger
                            value="annually"
                            className="text-20-semibold data-[state=active]:text-20-bold w-full bg-transparent text-text_400 shadow-none data-[state=active]:border-2 data-[state=active]:border-solid data-[state=active]:border-text_color data-[state=active]:bg-text_color data-[state=active]:text-background_color data-[state=active]:shadow-none"
                          >
                            Annually
                          </TabsTrigger>
                        </TabsList>

                        <ul className="flex-start-col h-fit w-full gap-4">
                          {card.features.map((item, index) => {
                            return (
                              <li
                                className="flex w-full items-center justify-start gap-[12px]"
                                key={index}
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="flex-center min-h-[20px] min-w-[20px]"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM13.6103 8.18593C13.8511 7.84887 13.773 7.38046 13.4359 7.1397C13.0989 6.89894 12.6305 6.97701 12.3897 7.31407L9.1543 11.8436L7.53033 10.2197C7.23744 9.92678 6.76256 9.92678 6.46967 10.2197C6.17678 10.5126 6.17678 10.9874 6.46967 11.2803L8.71967 13.5303C8.87556 13.6862 9.09215 13.7656 9.31186 13.7474C9.53157 13.7293 9.73216 13.6153 9.8603 13.4359L13.6103 8.18593Z"
                                    fill="#ECEDEF"
                                  />
                                </svg>
                                <p
                                  className={`text-16 ${
                                    item.highlight ? "font-bold text-white" : "text-text_600"
                                  }`}
                                >
                                  {item.name}
                                </p>
                              </li>
                            );
                          })}
                        </ul>

                        <Button
                          className={`group h-fit w-full rounded-full border-2 border-solid border-text_color bg-text_color px-6 py-3 shadow-pricingCard transition-all duration-500 ease-out hover:cursor-pointer hover:bg-primary_color hover:shadow-pricingCardHover ${
                            enterAnnuallyEmail === true ? "hidden" : "flex"
                          }`}
                          asChild
                          onClick={() => {
                            handleStartAnnuallyButton();
                            handleProductPrice(card.annualPrice);
                            handleProductPriceId(card.annualPriceId);
                            handleButtonClick(
                              "performance-btn",
                              "PerformanceBtnClick"
                            );
                          }}
                          id="performance-btn"
                        >
                          <div
                            className={`gap-2 ${
                              enterAnnuallyEmail === true ? "hidden" : "flex-between"
                            }`}
                          >
                            <p className="text-20-semibold text-background_color transition-all duration-300 ease-out">
                              {card.buttonText}
                            </p>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="stroke-background_color transition-all duration-300 ease-out"
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

                        {/* Form to enter name, lastname and email */}
                        {enterAnnuallyEmail && (
                          <Form {...form}>
                            <motion.form
                              onSubmit={form.handleSubmit(handleSubmit)}
                              className="flex-start-col h-fit w-full gap-5"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              layout
                            >
                              <div className="flex-start-col h-fit w-full gap-3">
                                <p className="text-20-semibold text-text_color">
                                  To continue, please fill the following form
                                </p>
                                <FormField
                                  control={form.control}
                                  name="firstName"
                                  render={({ field }) => (
                                    <FormItem className="w-full">
                                      <FormLabel className="text-text_color">
                                        Name
                                      </FormLabel>
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
                                      <FormLabel className="text-text_color">
                                        Last Name
                                      </FormLabel>
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
                                      <FormLabel className="text-text_color">
                                        Email Address
                                      </FormLabel>
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
                              </div>

                              <Button
                                type="submit"
                                className="group transition-all duration-500 ease-out hover:bg-text_color"
                                // onClick={handlePerformancePlanAnnualClick}
                              >
                                {!loading && (
                                  <p className="transition-all duration-500 ease-out group-hover:text-background_color">
                                    Continue to Checkout
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
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </Button>
                            </motion.form>
                          </Form>
                        )}
                      </TabsContent>
                    </Tabs>
                  </>
                )}
                {!card.plans && (
                  <>
                    <div className="flex-start-col h-fit w-full gap-8">
                      <div className="flex-start-col h-fit w-full gap-3">
                        <h4 className="subtitle text-text_color">
                          {card.title}
                        </h4>
                        <p className="h2-big text-text_color">${card.price}</p>
                        <p className="text-16 text-text_600">
                          {card.description}
                        </p>
                      </div>
                      <ul className="flex-start-col h-fit w-full gap-4">
                        {card.features.map((item, index) => {
                          return (
                            <li
                              className="flex w-full items-center justify-start gap-[12px]"
                              key={index}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-center min-h-[20px] min-w-[20px]"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM13.6103 8.18593C13.8511 7.84887 13.773 7.38046 13.4359 7.1397C13.0989 6.89894 12.6305 6.97701 12.3897 7.31407L9.1543 11.8436L7.53033 10.2197C7.23744 9.92678 6.76256 9.92678 6.46967 10.2197C6.17678 10.5126 6.17678 10.9874 6.46967 11.2803L8.71967 13.5303C8.87556 13.6862 9.09215 13.7656 9.31186 13.7474C9.53157 13.7293 9.73216 13.6153 9.8603 13.4359L13.6103 8.18593Z"
                                  fill="#ECEDEF"
                                />
                              </svg>
                              <p
                                className={`text-16 ${
                                  item.highlight ? "font-bold text-white" : "text-text_600"
                                }`}
                              >
                                {item.name}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {i === 2 && (
                      <Button
                        className="group h-fit w-full rounded-full border-2 border-solid border-text_color bg-transparent px-6 py-3 shadow-pricingCard transition-all duration-500 ease-out hover:bg-text_color hover:text-background_color hover:shadow-pricingCardHover"
                        asChild
                        id="custom-btn"
                        onClick={() => {
                          handleButtonClick("custom-btn", "CustomBtnClick");
                        }}
                      >
                        <Link
                          href={card.buttonLink}
                          className="flex-between gap-2"
                        >
                          <p className="text-20-semibold text-text_color transition-all duration-300 ease-out group-hover:text-background_color">
                            {card.buttonText}
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
                        </Link>
                      </Button>
                    )}
                    {i === 0 && (
                      <>
                        <Button
                          className={`group h-fit w-full rounded-full border-2 border-solid border-text_color bg-transparent px-6 py-3 shadow-pricingCard transition-all duration-500 ease-out hover:bg-text_color hover:text-background_color hover:shadow-pricingCardHover ${
                            enterFreeEmail === true ? "hidden" : "flex"
                          } hover:cursor-pointer`}
                          asChild
                          id="hobby-btn"
                          onClick={() => {
                            handleStartFreeButton();
                            handleProductPrice(card.price);
                            handleProductPriceId(card.monthlyPriceId);
                            handleButtonClick("hobby-btn", "HobbyBtnClick");
                          }}
                        >
                          <div
                            className={`gap-2 ${
                              enterFreeEmail === true ? "hidden" : "flex-between"
                            }`}
                          >
                            <p className="text-20-semibold text-text_color transition-all duration-300 ease-out group-hover:text-background_color">
                              {card.buttonText}
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

                        {/* Free Form */}
                        {enterFreeEmail && (
                          <Form {...form}>
                            <motion.form
                              onSubmit={form.handleSubmit(handleSubmit)}
                              className="flex-start-col h-fit w-full gap-5"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              layout
                            >
                              <div className="flex-start-col h-fit w-full gap-3">
                                <p className="text-20-semibold text-text_color">
                                  To continue, please fill the following form
                                </p>
                                <FormField
                                  control={form.control}
                                  name="firstName"
                                  render={({ field }) => (
                                    <FormItem className="w-full">
                                      <FormLabel className="text-text_color">
                                        Name
                                      </FormLabel>
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
                                      <FormLabel className="text-text_color">
                                        Last Name
                                      </FormLabel>
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
                                      <FormLabel className="text-text_color">
                                        Email Address
                                      </FormLabel>
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
                              </div>

                              <Button
                                type="submit"
                                className="group transition-all duration-500 ease-out hover:bg-text_color"
                                // onClick={handleHobbyPlanClick}
                              >
                                {!loading && (
                                  <p className="transition-all duration-500 ease-out group-hover:text-background_color">
                                    Continue to Checkout
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
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </Button>
                            </motion.form>
                          </Form>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export { PricingPlans };
