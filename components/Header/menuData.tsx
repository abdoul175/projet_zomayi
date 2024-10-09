import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Sobre nosotros",
        path: "/about",
        newTab: false,
      },
      {
        id: 12,
        title: "Historia de la Asociación",
        path: "/contact",
        newTab: false,
      },
      {
        id: 13,
        title: "El español en Togo",
        path: "/blog",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "quién soy",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Comité Ejecutivo",
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "Comité Ampliado",
        path: "/contact",
        newTab: false,
      },
      {
        id: 23,
        title: "Responsables de Grupos",
        path: "/blog",
        newTab: false,
      },
      {
        id: 24,
        title: "Representantes en el Exterior",
        path: "/blog",
        newTab: false,
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "About",
  //   path: "/about",
  //   newTab: false,
  // },
];
export default menuData;
