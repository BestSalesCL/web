import dumbbell from "@/public/assets/icons/stat1.svg";
import sports from "@/public/assets/icons/stat2.svg";
import stats from "@/public/assets/icons/stat3.svg";
import earth from "@/public/assets/icons/stat4.svg";
import experience from "@/public/assets/icons/stat5.svg";
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
    name: "Anuncios Administrados",
    image: dumbbell,
    alt: "dumbbell icon",
    number: 2000,
    pre: "+",
  },
  {
    name: "Personas Alcanzadas",
    image: stats,
    alt: "sports icon",
    number: 3,
    scale: "M",
    pre: "+",
  },
  {
    name: "Campañas Creadas",
    image: sports,
    alt: "variable stats icon",
    number: 73,

  },
  {
    name: "Mensajes Recibidos",
    image: experience,
    alt: "years of experience icon",
    number: 20000,
    pre: "+",
  },
  {
    name: "Soporte y Atención",
    image: earth,
    alt: "earth icon",
    number: 24,
    pre: "Hrs ",

  },
];
