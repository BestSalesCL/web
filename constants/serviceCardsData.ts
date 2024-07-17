import card1 from "@/public/assets/images/card-1.avif";
import card2 from "@/public/assets/images/card-2.avif";
import card3 from "@/public/assets/images/card-3.avif";
import card4 from "@/public/assets/images/card-4.avif";
import { StaticImageData } from "next/image";

type Services = {
  title: string;
  cardNumber: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
};

export const ServiceCardsData: Services[] = [
  {
    // Change the title text
    title: "Free Ebook",
    cardNumber: "01 ",
    // Change the description text to add a description about the service you are offering
    description:
      "Download our ebook on health and training so you can learn the basics",
    image: card1,
    alt: "strong man doing pushups in the gym",
  },
  {
    title: "Football Training Program",
    cardNumber: "02 ",
    description:
      "Use our mobile app and train for 1 full month with a physical training plan focused on football and your particular position.",
    image: card2,
    alt: "athletic woman training in the gym",
  },
  {
    title: "Basketball Training Program",
    cardNumber: "03 ",
    description:
      "Download our mobile app and enjoy a complimentary month-long physical training program specifically for basketball and your unique position.",
    image: card3,
    alt: "man practicing box in the ring",
  },
  {
    title: "Golf Training Program",
    cardNumber: "04 ",
    description:
      "Install our mobile app and receive a full month of specialized golf training designed to enhance your performance on the golf course.",
    image: card4,
    alt: "people in a crossfit session",
  },
];
