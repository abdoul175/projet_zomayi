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
        path: "/component7",
        newTab: false,
      },
      {
        id: 23,
        title: "Responsables de Grupos",
        path: "/component8",
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
        title: "Grupo de Baile",
        path: "/",
        newTab: false,
      },
      {
        id: 32,
        title: "Grupo de Fútbol",
        path: "/",
        newTab: false,
      },
      {
        id: 33,
        title: "Grupo de Artes Escénicas",
        path: "/",
        newTab: false,
      },
      {
        id: 34,
        title: "Grupo de Artes Culinarios",
        path: "/",
        newTab: false,
      },
      {
        id: 35,
        title: "Grupo de Artes plásticos",
        path: "/",
        newTab: false,
      },
      {
        id: 36,
        title: "Grupo de Turismo",
        path: "/",
        newTab: false,
      },
      {
        id: 37,
        title: "Grupo de Teatro",
        path: "/",
        newTab: false,
      },
      {
        id: 38,
        title: "Grupo de Periodismo y Interpretación",
        path: "/",
        newTab: false,
      },
      {
        id: 39,
        title: "Grupo de Música",
        path: "/",
        newTab: false,
      },
      {
        id: 399,
        title: "Portugués",
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
        title: "Proyectos",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Contáctanos",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Colaboradores y socios",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "Donación",
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
        title: "Actividades",
        path: "/",
        newTab: false,
      },
      {
        id: 52,
        title: "Eventos",
        path: "/",
        newTab: false,
      },
      {
        id: 53,
        title: "Artículos",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Togo",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Conoce el país",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Sitios turísticos",
        path: "/",
        newTab: false,
      },
      {
        id: 63,
        title: "Fiestas tradicionales",
        path: "/",
        newTab: false,
      },
      {
        id: 64,
        title: "Literatura",
        path: "/",
        newTab: false,
      },
      {
        id: 65,
        title: "Civilización e historia",
        path: "/",
        newTab: false,
      },
    ],
  },
];

export default menuData;
