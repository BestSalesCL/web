import athlete1 from "@/public/assets/images/athletes/1.avif";
import athlete2 from "@/public/assets/images/athletes/2.avif";
import athlete3 from "@/public/assets/images/athletes/3.avif";
import athlete4 from "@/public/assets/images/athletes/4.avif";
import athlete5 from "@/public/assets/images/athletes/5.avif";
// import athlete6 from "@/public/assets/images/athletes/6.avif";

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
    name: "Dr. Joaquín González",
    review:
      "“Acabo de egresar de Medicina, empecé mi Marca personal y con BestSales pude lograr 3 videos con más de 100k. Y una media de 30 mil visualizaciones por video”",
    position: "Marca Personal",
    image: athlete4,
    alt: "archery shooter",
  },
  {
    name: "Diego Perez",
    review:
      "“Tengo 119 seguidores en mi Instagram, y genere más de 100 clientes a través de anuncios el último mes desde que contrate BestSales.”",
    position: "-Tecno DPB",
    image: athlete2,
    alt: "Mountain Climber",
  },
  {
    name: "Gabriel Valenzuela",
    review:
      "“Estuve tomando decisiones de marketing durante un año sin saber del tema, consiguiendo pocos clientes. Contrate BestSales y pude conseguir lo que no había podido antes hacer.”",
    position: "-Isekai Films",
    image: athlete5,
    alt: "football player",
  },
  {
    name: "Ignacio Gonzalez",
    review:
      "“Estuve 1 año mejorando mi producto sin tener ni siquiera 1 cliente. Ahora, después de haber contratado a BestSales puedo gozar de mantener a mis clientes en la mejor forma física posible.”",
    position: "-BestLevel",
    image: athlete1,
    alt: "Basketball Player",
  },
  {
    name: "Gonzalo Schafer",
    review:
      "“Empecé a dar conciertos y pasé de ver a mis familiares en el público, a no verlos entre la audiencia que se genera.”",
    position: "-DJ",
    image: athlete3,
    alt: "Football Player",
  },
];
