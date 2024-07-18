import dumbbell from "@/public/assets/icons/dumbbell.svg";
import sports from "@/public/assets/icons/sports.svg";
import stats from "@/public/assets/icons/variables.svg";
import earth from "@/public/assets/icons/earth.svg";
import experience from "@/public/assets/icons/experience.svg";
import { StaticImageData } from "next/image";

type Stats = {
  name: string;
  image: string | StaticImageData;
  alt: string;
  number: number;
  scale?: string;
  pre?: string;
};

export const StatsData: Stats[] = [
  {
    name: "Excercises",
    image: dumbbell,
    alt: "dumbbell icon",
    number: 1722,
    pre: "+",
  },
  {
    name: "Sports",
    image: sports,
    alt: "sports icon",
    number: 75,
  },
  {
    name: "Variables Tracked",
    image: stats,
    alt: "variable stats icon",
    number: 2.5,
    scale: "M",
    pre: "+",
  },
  {
    name: "Different Countries",
    image: earth,
    alt: "earth icon",
    number: 173,
    pre: "+",
  },
  {
    name: "Years of Experience",
    image: experience,
    alt: "years of experience icon",
    number: 10,
    pre: "+",
  },
];
