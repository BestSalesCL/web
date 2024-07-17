import athlete1 from "@/public/assets/images/athletes/1.avif";
import athlete2 from "@/public/assets/images/athletes/2.avif";
import athlete3 from "@/public/assets/images/athletes/3.avif";
import athlete4 from "@/public/assets/images/athletes/4.avif";
import athlete5 from "@/public/assets/images/athletes/5.avif";
import athlete6 from "@/public/assets/images/athletes/6.avif";

import { StaticImageData } from "next/image";

type Athletes = {
  name: string;
  review: string;
  position: string;
  image: string | StaticImageData;
  alt: string;
};

export const AthleteReviewsData: Athletes[] = [
  {
    // Change the name text to add the real athlete name
    name: "Rafael Albornoz",

    // Change the review text to add the athlete review
    review:
      "“Significantly helped me regain strength in my spike and jump for volleyball.”",
    position: "-Volleyball Player",
    image: athlete6,
    alt: "volleyball player",
  },
  {
    name: "Marianne Saintard",
    review:
      "“Greatly helped me endure the competition and shoot accurately throughout the entire event.”",
    position: "-Archery Shooter",
    image: athlete4,
    alt: "archery shooter",
  },
  {
    name: "Jannice Rott",
    review:
      "“There was a noticeable before and after in how I trained, resulting in improved performance and confidence on the mountain.”",
    position: "-Mountain Climber",
    image: athlete2,
    alt: "Mountain Climber",
  },
  {
    name: "Cris Porter",
    review:
      "“Significantly boosted my confidence on the field, feeling strong and fast like never before.”",
    position: "-Soccer Player",
    image: athlete5,
    alt: "football player",
  },
  {
    name: "John Dlugoszewki",
    review:
      "“Training with BestLevel I have managed to significantly improve all aspects of my game, I am on another level right now.”",
    position: "-Basketball Player",
    image: athlete1,
    alt: "Basketball Player",
  },
  {
    name: "Alvaro Vicente",
    review:
      "“They helped me become an athlete from scratch, eventually reaching international competition over time.”",
    position: "-Football Player",
    image: athlete3,
    alt: "Football Player",
  },
];
