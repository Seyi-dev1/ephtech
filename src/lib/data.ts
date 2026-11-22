import type { StaticImageData } from "next/image";

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

export type Service = {
  index: string;
  title: string;
  scope: string;
  deliverables: string[];
  image: StaticImageData;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Building Materials Supply & Distribution",
    scope:
      "Wholesale and retail supply of Ephtech Boards, suspended ceiling grids, galvanised channels and studs, fasteners, jointing compounds and essential construction materials, dispatched from Lagos, Owerri and Aba.",
    deliverables: ["Wholesale & retail", "Boards & system components", "Nationwide dispatch"],
    image: siteDrone,
  },
  {
    index: "02",
    title: "Interior Design & Finishing Contracting",
    scope:
      "Turnkey design, supply and installation of suspended ceilings, dry-wall partitions, decorative wall panels, cornices, screeding and painting.",
    deliverables: ["Ceilings", "Partitions", "Cornices & painting"],
    image: appFitout,
  },
  {
    index: "03",
    title: "General Contracting & Building Construction",
    scope:
      "End-to-end execution of residential estates, detached duplexes, shopping complexes and industrial facilities, from substructure to handover.",
    deliverables: ["Residential", "Commercial", "Industrial"],
    image: projectCommercial,
  },
  {
    index: "04",
    title: "Civil & Structural Engineering",
    scope:
      "Site clearing, earthworks, road construction, drainage infrastructure, reinforced concrete frames and structural steel works.",
    deliverables: ["Earthworks", "Concrete frames", "Steel works"],
    image: problemSite,
  },
  {
    index: "05",
    title: "Quantity Surveying & Cost Estimation",
    scope:
      "Detailed Bills of Quantities, material take-offs, rate analysis, feasibility budgeting and construction cost control.",
    deliverables: ["BOQ", "Take-offs", "Cost control"],
    image: drafting,
  },
  {
    index: "06",
    title: "Real Estate Development & Project Management",
    scope:
      "Land acquisition, residential and commercial property development, project supervision and lifecycle facility management.",
    deliverables: ["Development", "Supervision", "Facility management"],
    image: projectResidence,
  },
];

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

export const comparison = {
  materials: [
    {
      key: "pop",
      name: "Traditional POP",
      color: "var(--muted)",
      verdict: "Low upfront cost. High lifecycle cost.",
      note: "Wet casting, heavy scaffolding, curing delays and a finish that depends entirely on artisan skill.",
    },
    {
      key: "gypsum",
      name: "Standard Gypsum",
      color: "var(--green)",
      verdict: "Familiar, fast and vulnerable to humidity.",
      note: "Light and easy to work, but absorbs moisture, stains, softens and requires extensive sanding.",
    },
    {
      key: "ephtech",
      name: "Ephtech Board",
      color: "var(--amber)",
      verdict: "Higher specification. Lower lifetime cost.",
      note: "Dry installation, moisture-resistant core, impact resistance and a factory-smooth face ready to paint.",
    },
  ],
  metrics: [
    { label: "Impact strength", pop: 28, gypsum: 44, ephtech: 92, popLabel: "Brittle", gypsumLabel: "Fragile", ephtechLabel: "High" },
    { label: "Moisture resistance", pop: 18, gypsum: 24, ephtech: 94, popLabel: "Absorbs", gypsumLabel: "Absorbs", ephtechLabel: "Resistant" },
    { label: "Installation speed", pop: 26, gypsum: 58, ephtech: 90, popLabel: "Slow", gypsumLabel: "Moderate", ephtechLabel: "Fast" },
    { label: "Surface finish", pop: 40, gypsum: 55, ephtech: 92, popLabel: "Manual", gypsumLabel: "Sanding", ephtechLabel: "Factory" },
    { label: "Lifecycle cost", pop: 24, gypsum: 46, ephtech: 88, popLabel: "High", gypsumLabel: "Medium", ephtechLabel: "Low" },
  ],
};

export const process = [
  {
    index: "01",
    title: "Specify",
    body: "We review your drawings, advise on the right system and issue a clear specification.",
  },
  {
    index: "02",
    title: "Quote",
    body: "A transparent BOQ, material take-off and delivery schedule, with no hidden allowances.",
  },
  {
    index: "03",
    title: "Supply",
    body: "Boards, grid and accessories dispatched from the branch closest to your site.",
  },
  {
    index: "04",
    title: "Install",
    body: "Trained crews, clean sites and a programme agreed before mobilisation.",
  },
  {
    index: "05",
    title: "Hand over",
    body: "Snag-free completion, documented handover and aftercare support.",
  },
];
