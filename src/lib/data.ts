import hero from "@/assets/images/hero.jpg";
import problemSite from "@/assets/images/problem-site.jpg";
import appCeiling from "@/assets/images/app-ceiling.jpg";
import appPartition from "@/assets/images/app-partition.jpg";
import appWall from "@/assets/images/app-wall.jpg";
import appFitout from "@/assets/images/app-fitout.jpg";
import projectResidence from "@/assets/images/project-residence.jpg";
import projectCivic from "@/assets/images/project-civic.jpg";
import projectCommercial from "@/assets/images/project-commercial.jpg";
import siteDrone from "@/assets/images/site-drone.jpg";
import drafting from "@/assets/images/drafting.jpg";
import office from "@/assets/images/office.jpg";
import ceilingDetail from "@/assets/images/ceiling-detail.jpg";
import featureWall from "@/assets/images/feature-wall.jpg";
import hallWorks from "@/assets/images/hall-works.jpg";
import heroInstall from "@/assets/images/hero-install.jpg";
import interiorWorks from "@/assets/images/interior-works.jpg";
import mediaWall from "@/assets/images/media-wall.jpg";
import panelInstall from "@/assets/images/panel-install.jpg";

export const images = {
  hero,
  problemSite,
  appCeiling,
  appPartition,
  appWall,
  appFitout,
  projectResidence,
  projectCivic,
  projectCommercial,
  siteDrone,
  drafting,
  office,
  ceilingDetail,
  featureWall,
  hallWorks,
  heroInstall,
  interiorWorks,
  mediaWall,
  panelInstall,
};

export type Branch = {
  city: string;
  state: string;
  region: string;
  address: string[];
  phone: string;
};

export const branches: Branch[] = [
  {
    city: "Lagos",
    state: "Lagos",
    region: "South-West",
    address: ["Km 36, Lekki-Epe Expressway", "Kajola Bus Stop, Ibeju-Lekki", "Lagos State"],
    phone: "+234 803 251 9288",
  },
  {
    city: "Owerri",
    state: "Imo",
    region: "South-East",
    address: ["Suite 9, Graylite Plaza", "Area L, World Bank", "Owerri, Imo State"],
    phone: "+234 803 251 9288",
  },
  {
    city: "Aba",
    state: "Abia",
    region: "South-East",
    address: ["No. 8 Okigwe Road", "Opp. Okigwe Road Primary School / UBA", "Aba, Abia State"],
    phone: "+234 803 251 9288",
  },
];
