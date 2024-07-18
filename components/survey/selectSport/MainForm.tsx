"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  GroupSportData,
  IndividualSportData,
} from "@/constants/formSportsData";
import Image from "next/image";
import groupImage from "@/public/assets/images/survey/team-sport.avif";
import individualImage from "@/public/assets/images/survey/individual-sport2.avif";
import { useRouter } from "next/navigation";

const sportFormSchema = z.object({
  modality: z
    .string()
    .min(
      1,
      "Please select a sport modality, wether it is in teams or individual"
    ),
  sport: z.string().min(1, "Please choose a sport from the list"),
  position: z.string().min(1, "Please choose a position"),
});

type FormLink = {
  isFreeWorkouts: boolean;
};

const MainForm = ({ isFreeWorkouts }: FormLink) => {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof sportFormSchema>>({
    resolver: zodResolver(sportFormSchema),
    defaultValues: {
      modality: "",
      sport: "",
      position: "",
    },
  });

  const modalityType = form.watch("modality");
  const sportType = form.watch("sport");

  // 2. Handle Links
  const [selectedPosition, setSelectedPosition] = React.useState<string>("");

  const matchingGroupItem = GroupSportData.flatMap(
    (sport) => sport.tabItems
  ).find((item) => item.tabItemValue === selectedPosition);
  const matchingIndividualItem = IndividualSportData.flatMap(
    (sport) => sport.tabItems
  ).find((item) => item.tabItemValue === selectedPosition);

  // 3. Define a submit handler.

  const onSubmit = async (values: z.infer<typeof sportFormSchema>) => {
    localStorage.setItem("userSportsAnswers", JSON.stringify(values));

    // Check if there's a matching item for the selected position
    if (
      matchingGroupItem &&
      selectedPosition === matchingGroupItem.tabItemValue &&
      isFreeWorkouts === false
    ) {
      // Set the itemLink state to the tabLink value of the matching item
      router.push(matchingGroupItem.tabLink);
    } else if (
      matchingIndividualItem &&
      selectedPosition === matchingIndividualItem.tabItemValue &&
      isFreeWorkouts === false
    ) {
      router.push(matchingIndividualItem.tabLink);
    } else if (isFreeWorkouts === true) {
      router.push("/workouts/results");
    }
  };

  // Form component
  return (
    <Form {...form}>
      <form
        id="survey"
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-fit w-full max-w-[600px] gap-6 px-6 pb-[48px] sm:gap-8 sm:px-0 md:pb-[96px]"
      >
        <FormField
          control={form.control}
          name="modality"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <ToggleGroup
                    type="single"
                    onValueChange={field.onChange}
                    className="flex-center mb-6 h-fit w-full gap-6 sm:mb-8 sm:gap-8"
                  >
                    <ToggleGroupItem
                      value="team"
                      className={`group relative flex h-[175px] w-full items-end justify-start overflow-hidden rounded-lg border-2 border-solid border-background_color bg-background_color px-4 py-6 transition-all duration-300 ease-in-out md:h-[275px] ${modalityType === "team" ? "border-primary_color hover:border-primary_color" : "border-background_color hover:border-text_400"}`}
                    >
                      <div className="absolute inset-0 size-full rounded-lg transition-all duration-1000 ease-in-out group-hover:scale-105">
                        <div className="absolute size-full rounded-lg bg-background_color object-cover opacity-75"></div>
                        <div className="flex-center relative size-full rounded-lg">
                          <Image
                            src={groupImage}
                            alt="group sport background image"
                            fill
                          />
                        </div>
                      </div>
                      <p
                        className={`text-20-semibold z-[5] text-center transition-all duration-300 ease-in-out ${modalityType === "team" ? "text-primary_color" : "text-text_400"}`}
                      >
                        Team Sports
                      </p>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="individual"
                      className={`group relative flex h-[175px] w-full items-end justify-start overflow-hidden rounded-lg border-2 border-solid border-background_color bg-background_color px-4 py-6 transition-all duration-300 ease-in-out hover:border-text_400 md:h-[275px] ${modalityType === "individual" ? "border-primary_color hover:border-primary_color" : "border-background_color hover:border-text_400"}`}
                    >
                      <div className="absolute inset-0 size-full rounded-lg transition-all duration-1000 ease-in-out group-hover:scale-105">
                        <div className="absolute size-full rounded-lg bg-background_color object-cover opacity-75"></div>
                        <div className="flex-center relative size-full rounded-lg">
                          <Image
                            src={individualImage}
                            alt="group sport background image"
                            fill
                          />
                        </div>
                      </div>
                      <p
                        className={`text-20-semibold z-[5] text-center transition-all duration-300 ease-in-out ${modalityType === "individual" ? "text-primary_color" : "text-text_400"}`}
                      >
                        Individual Sports
                      </p>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {modalityType === "team" && (
          <FormField
            control={form.control}
            name="sport"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <ToggleGroup
                      type="single"
                      onValueChange={field.onChange}
                      className="sm:no-scrollbar flex-start mb-6 w-full overflow-x-scroll sm:mb-8"
                    >
                      {GroupSportData.map((item, i) => {
                        return (
                          <ToggleGroupItem key={i} value={item.tabValue}>
                            <p className="text-20-semibold text-center transition-all duration-300 ease-out hover:text-background_color">
                              {item.tabName}
                            </p>
                          </ToggleGroupItem>
                        );
                      })}
                    </ToggleGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        )}
        {modalityType === "individual" && (
          <FormField
            control={form.control}
            name="sport"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <ToggleGroup
                      type="single"
                      onValueChange={field.onChange}
                      className="sm:no-scrollbar flex-start mb-6 w-full overflow-x-scroll sm:mb-8"
                    >
                      {IndividualSportData.map((item, i) => {
                        return (
                          <ToggleGroupItem key={i} value={item.tabValue}>
                            <p className="text-20-semibold text-center transition-all duration-300 ease-out hover:text-background_color">
                              {item.tabName}
                            </p>
                          </ToggleGroupItem>
                        );
                      })}
                    </ToggleGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        )}

        {modalityType === "team" &&
          GroupSportData.find((item) => item.tabValue === sportType) && (
            <div className="relative h-fit w-full">
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => {
                  const selectedGroupSport = GroupSportData.find(
                    (item) => item.tabValue === sportType
                  );

                  return (
                    <FormItem>
                      <FormControl>
                        <ToggleGroup
                          type="single"
                          onValueChange={(value) => {
                            field.onChange(value);
                            setSelectedPosition(value);
                          }}
                          className="flex-center-col gap-4 sm:gap-6"
                        >
                          {selectedGroupSport?.tabItems.map((card, i) => {
                            return (
                              <ToggleGroupItem
                                key={i}
                                value={card.tabItemValue}
                                className="group relative flex h-[136px] w-full items-center justify-start gap-6 rounded-lg border-2 border-solid border-background_900 bg-[#0f172a] px-0 hover:border-primary_color hover:bg-background_900 data-[state=on]:border-primary_color data-[state=on]:bg-[#0f172a]"
                              >
                                <div className="relative size-full max-w-[120px] rounded-lg object-cover sm:max-w-[160px]">
                                  <Image
                                    src={card.tabItemImage}
                                    alt={card.tabItemAlt}
                                    fill
                                  />
                                </div>
                                <div className="flex-start-col size-full gap-3 py-4 pr-3">
                                  <div className="flex-start-col h-fit w-full gap-2">
                                    <p className="text-20-semibold text-left text-text_300">
                                      {card.tabItemName}
                                    </p>
                                    <p className="text-13 sm:text-16 text-left text-text_400">
                                      {card.tabProgram}
                                    </p>
                                  </div>
                                  <div className="flex w-full items-center justify-end">
                                    <div className="flex-center gap-[4px]">
                                      <p className="text-13 sm:text-16 text-left text-text_500 transition-all duration-300 ease-in-out group-hover:text-primary_color group-data-[state=on]:text-primary_color">
                                        Select
                                      </p>

                                      <svg
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5 12.1978H19"
                                          className="stroke-text_500 transition-all duration-300 ease-in-out group-hover:stroke-primary_color group-data-[state=on]:stroke-primary_color"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M12 5.19775L19 12.1978L12 19.1978"
                                          className="stroke-text_500 transition-all duration-300 ease-in-out group-hover:stroke-primary_color group-data-[state=on]:stroke-primary_color"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </ToggleGroupItem>
                            );
                          })}
                        </ToggleGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
          )}

        {modalityType === "individual" &&
          IndividualSportData.find((item) => item.tabValue === sportType) && (
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => {
                const selectedIndividualSport = IndividualSportData.find(
                  (item) => item.tabValue === sportType
                );
                return (
                  <FormItem>
                    <FormControl>
                      <ToggleGroup
                        type="single"
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedPosition(value);
                        }}
                      >
                        {selectedIndividualSport?.tabItems.map((card, i) => {
                          return (
                            <ToggleGroupItem
                              key={i}
                              value={card.tabItemValue}
                              className="group flex h-[136px] w-full items-center justify-start gap-6 rounded-lg border-2 border-solid border-background_900 bg-[#0f172a] px-0 hover:border-primary_color hover:bg-background_900 data-[state=on]:border-primary_color data-[state=on]:bg-[#0f172a]"
                            >
                              <div className="relative size-full max-w-[120px] rounded-lg object-cover sm:max-w-[160px]">
                                <Image
                                  src={card.tabItemImage}
                                  alt={card.tabItemAlt}
                                  fill
                                />
                              </div>
                              <div className="flex-start-col size-full gap-3 py-4 pr-3">
                                <div className="flex-start-col h-fit w-full gap-2">
                                  <p className="text-20-semibold text-left text-text_300">
                                    {card.tabItemName}
                                  </p>
                                  <p className="text-13 sm:text-16 text-left text-text_400">
                                    {card.tabProgram}
                                  </p>
                                </div>
                                <div className="flex w-full items-center justify-end">
                                  <div className="flex-center gap-[4px]">
                                    <p className="text-13 sm:text-16 text-left text-text_500 transition-all duration-300 ease-in-out group-hover:text-primary_color group-data-[state=on]:text-primary_color">
                                      Select
                                    </p>

                                    <svg
                                      width="24"
                                      height="25"
                                      viewBox="0 0 24 25"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M5 12.1978H19"
                                        className="stroke-text_500 transition-all duration-300 ease-in-out group-hover:stroke-primary_color group-data-[state=on]:stroke-primary_color"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M12 5.19775L19 12.1978L12 19.1978"
                                        className="stroke-text_500 transition-all duration-300 ease-in-out group-hover:stroke-primary_color group-data-[state=on]:stroke-primary_color"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </ToggleGroupItem>
                          );
                        })}
                      </ToggleGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          )}

        <div className="flex w-full items-center justify-end">
          <Button
            type="submit"
            className="mt-6 px-8 py-3 text-text_color transition-all duration-300 ease-out hover:bg-text_color hover:text-background_color sm:mt-8"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { MainForm };
