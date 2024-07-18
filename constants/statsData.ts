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
    name: "Anuncios Activos",
    image: dumbbell,
    alt: "dumbbell icon",
    number: 1722,
    pre: "+",
  },
  {
    name: "Clientes Captados",
    image: sports,
    alt: "sports icon",
    number: 75,
  },
  {
    name: "Campañas Creadas",
    image: stats,
    alt: "variable stats icon",
    number: 2.5,
    scale: "M",
    pre: "+",
  },
  {
    name: "Conversaciones",
    image: experience,
    alt: "years of experience icon",
    number: 10,
    pre: "+",
  },
  {
    name: "Años de Experiencia",
    image: earth,
    alt: "earth icon",
    number: 173,
    pre: "",
  },
];
