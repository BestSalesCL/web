type Links = {
  name: string;
  link: string;
};

export const NavLinksData: Links[] = [
  {
    name: "Servicios",
    link: "#services",  // Asegúrate de que esto coincide con el id en el componente
  },
  {
    name: "Workouts",
    link: "/workouts",
  },
];
