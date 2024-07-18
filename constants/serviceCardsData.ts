import card1 from "@/public/assets/images/1.avif";
import card2 from "@/public/assets/images/2.avif";
import card3 from "@/public/assets/images/3.avif";
import card4 from "@/public/assets/images/4.avif";
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
    title: "Consulta GRATIS",
    cardNumber: "01 ",
    // Change the description text to add a description about the service you are offering
    description:
      "Contáctanos para obtener una consulta totalmente gratuita, en la que te explicaremos cómo aplicar estrategias de adquisición de clientes adaptadas a tu empresa y contexto, que incrementarán el tráfico y las ventas.",
    image: card2,
    alt: "people in a meeting",
  },
  {
    title: "Manejo de Campañas",
    cardNumber: "02 ",
    description:
      "Ideal si estás interesado en optimizar o crear campañas de marketing enfocadas en establecer ciclos de adquisición efectivos. Estas campañas te permitirán fidelizar a tus clientes actuales, captar nuevos y generar más ventas a corto y mediano plazo.",
    image: card4,
    alt: "facebook ads dashboard",
  },
  {
    title: "Creacion de Contenido",
    cardNumber: "03 ",
    description:
      "Diseñado si deseas crear contenido dinámico para tus campañas que aborde los sesgos psicológicos de los consumidores y sus motivaciones de compra, es esencial contar con un equipo de grabación y edición profesional. Podemos ayudarte a lograrlo.",
    image: card3,
    alt: "woman making recording herself",
  },
  {
    title: "Asesoria de Marketing",
    cardNumber: "04 ",
    description:
      "Perfecto, si deseas obtener una guía y orientación sobre cómo desarrollar una estrategia de marketing efectiva para captar más clientes, fidelizar a los actuales o construir una imagen de marca sólida y reconocida en el mercado, estamos aquí para ayudarte.",
    image: card1,
    alt: "people in a presentation",
  },
];
