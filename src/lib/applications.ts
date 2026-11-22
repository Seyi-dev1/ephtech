import type { StaticImageData } from "next/image";

import { images } from "@/lib/data";

export type Application = {
  id: string;
  index: string;
  category: "Ceilings" | "Walls" | "Wet areas" | "Joinery";
  title: string;
  summary: string;
  image: StaticImageData;
  alt: string;
};

export const applications: Application[] = [
  {
    id: "pop-ceilings",
    index: "01",
    category: "Ceilings",
    title: "POP-design ceilings",
    summary:
      "Stepped, cove-lit and paint-ready. Multi-level set-outs with LED coves, spotlights and HVAC vents.",
    image: images.ceilingDetail,
    alt: "Illustrative interior with a decorative stepped ceiling and recessed lighting.",
  },
  {
    id: "suspended-ceilings",
    index: "02",
    category: "Ceilings",
    title: "Lay-in suspended ceilings",
    summary: "A suspended grid for offices, halls and hospitals, with acoustic options.",
    image: images.hallWorks,
    alt: "Illustrative interior with a large suspended ceiling grid above a hall.",
  },
  {
    id: "wet-areas",
    index: "03",
    category: "Wet areas",
    title: "Kitchen & bathroom walls",
    summary: "Moisture-resistant lining for kitchens, bathrooms and wet areas.",
    image: images.appCeiling,
    alt: "Illustrative interior with a bright kitchen and a smooth white wall and ceiling finish.",
  },
  {
    id: "interior-walls",
    index: "04",
    category: "Walls",
    title: "Interior walls & partitions",
    summary: "Partitions and linings for offices, shops, hospitals and schools.",
    image: images.panelInstall,
    alt: "Illustrative interior with large wall panels being fixed.",
  },
  {
    id: "tv-consoles",
    index: "05",
    category: "Joinery",
    title: "TV consoles & feature walls",
    summary:
      "Media walls with shadow gaps, integrated lighting, reception backdrops and bulkheads.",
    image: images.mediaWall,
    alt: "Illustrative interior with a finished media wall, TV recess and concealed lighting.",
  },
  {
    id: "interior-doors",
    index: "06",
    category: "Joinery",
    title: "Interior doors",
    summary: "Door openings, linings and surrounds, detailed with the wall system.",
    image: images.featureWall,
    alt: "Illustrative interior with a decorative wall, door opening and display niches.",
  },
];

export const sectors = [
  "Residential homes",
  "Commercial buildings",
  "Corporate offices",
  "Shopping centres",
  "Hotels",
  "Churches",
  "Hospitals",
  "Clubs",
  "Studios",
  "Restaurants",
  "Schools",
  "Lounges",
  "Airports",
];
