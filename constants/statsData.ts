import dumbbell from "@/public/assets/icons/dumbbell.svg";
import sports from "@/public/assets/icons/sports.svg";
import stats from "@/public/assets/icons/variables.svg";
import earth from "@/public/assets/icons/earth.svg";
import experience from "@/public/assets/icons/mensajes.svg";
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
    name: "Años de Experiencia",
    image: earth,
    alt: "earth icon",
    number: 173,
    pre: "",
  },
  {
    name: "Conversaciones",
    image: experience,
    alt: "years of experience icon",
    number: 10,
    pre: "+",
  },
];
