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
        path: "/component1",
        newTab: false,
      },
      {
        id: 12,
        title: "Historia de la Asociación",
        path: "/component4",
        newTab: false,
      },
      {
        id: 13,
        title: "El español en Togo",
        path: "/component2",
        newTab: false,
      },
      {
        id: 14,
        title: "¿Cómo formar parte de nosotros?",
        path: "/component3",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Directorio",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Comité Ejecutivo",
        path: "/component5",
        newTab: false,
      },
      {
        id: 22,
        title: "Comité Ampliado",
        path: "/",
        newTab: false,
      },
      {
        id: 23,
        title: "Responsables de Grupos",
        path: "/",
        newTab: false,
      },
      {
        id: 24,
        title: "Representantes en el Exterior",
        path: "/component6",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Nuestros grupos",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Grupo de Lectura",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Colabora",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Colabora",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Actividades y eventos",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Actividades y eventos",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Togo",
    path: "/",
    newTab: false,
  },
];
export default menuData;
