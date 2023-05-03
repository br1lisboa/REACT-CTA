import { ROUTE } from "../../constants";
import faceSVG from "../../assets/images/icon-facebook.svg";
import igSVG from "../../assets/images/icon-ig.svg";
import ytbSVG from "../../assets/images/icon-ytb.svg";

export const LinksNavBar = [
  { link: ROUTE.INICIO, text: "INICIO" },
  { link: ROUTE.INSTITUCIONAL, text: "INSTITUCIONAL" },
  { link: ROUTE.COMISION_DIRECTIVA, text: "COMISIÓN DIRECTIVA" },
  { link: ROUTE.COMO_AFILIARSE, text: "COMO AFILIARSE" },
  { link: ROUTE.CONTACTO, text: "CONTACTO" },
  {
    link: "http://archivos.bibliotecacta.org.ar/site/php/index.php",
    text: "BIBLIOTECA",
    target: "_blank",
  },
];

export const IconsNavBar = [
  {
    icon: { faceSVG },
    alt: "facebook",
    link: "https://www.facebook.com/ctaachaco",
  },
  {
    icon: { igSVG },
    alt: "instagram",
    link: "https://www.instagram.com/cta.autonoma.chaco/",
  },
  { icon: { ytbSVG }, alt: "youtube", link: "http://youtube.com" },
];
