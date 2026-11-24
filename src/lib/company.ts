import type { StaticImageData } from "next/image";
import boardProduct from "@/assets/images/board-product.jpg";
import serviceImport from "@/assets/images/service-import.jpg";
import serviceLandscaping from "@/assets/images/service-landscaping.jpg";
import serviceRoad from "@/assets/images/service-road.jpg";
import teamSite from "@/assets/images/team-site.jpg";
import workBuild from "@/assets/images/work-build.jpg";
import workCeiling from "@/assets/images/work-ceiling.jpg";
import workDetail from "@/assets/images/work-detail.jpg";
import workInterior from "@/assets/images/work-interior.jpg";
import workPlan from "@/assets/images/work-plan.jpg";
import workRealEstate from "@/assets/images/work-real-estate.jpg";
import workStairs from "@/assets/images/work-stairs.jpg";

export type ChapterId = "plan" | "build" | "finish" | "supply" | "place";

export type Chapter = {
  id: ChapterId;
  index: string;
  name: string;
  title: string;
  summary: string;
  image: StaticImageData;
  alt: string;
};

export type CompanyService = {
  slug: string;
  title: string;
  chapter: ChapterId;
  summary: string;
  description: string;
  image: StaticImageData;
  alt: string;
  imageNote: "Completed work" | "Illustrative image";
  capabilities: string[];
  outcomes: string[];
};

export const chapters: Chapter[] = [
  {
    id: "plan",
    index: "01",
    name: "Plan",
    title: "Design & building projects",
    summary:
      "Project planning, design coordination and building delivery from the first drawing to handover.",
    image: workPlan,
    alt: "Building under construction with columns, blockwork and formwork.",
  },
  {
    id: "build",
    index: "02",
    name: "Build",
    title: "Roads & civil works",
    summary:
      "Road construction, earthworks, drainage and external works delivered with the same site discipline as our buildings.",
    image: serviceRoad,
    alt: "Road roller compacting asphalt on a road construction site.",
  },
  {
    id: "finish",
    index: "03",
    name: "Finish",
    title: "Ceilings, walls & interiors",
    summary:
      "Ceiling and wall systems, dry partitioning, joinery and interior finishing under one installation team.",
    image: workCeiling,
    alt: "Completed office interior with a suspended ceiling and wall panels.",
  },
  {
    id: "supply",
    index: "04",
    name: "Supply",
    title: "Materials & importation",
    summary:
      "Building materials, modern systems, importation and site delivery — specified and supplied as one package.",
    image: boardProduct,
    alt: "Stack of Ephtech boards showing the factory-finished face.",
  },
  {
    id: "place",
    index: "05",
    name: "Place",
    title: "Real estate & landscaping",
    summary:
      "Property development, residential and commercial places, external works and landscape environments.",
    image: workRealEstate,
    alt: "Completed residential building with a gated frontage.",
  },
];

export const companyServices: CompanyService[] = [
  {
    slug: "design-and-building-projects",
    title: "Design & Building Projects",
    chapter: "plan",
    summary:
      "A single team to take a building project from early design coordination through construction and handover.",
    description:
      "We coordinate the design, the programme and the site team so the building you brief is the building that gets delivered. The service covers project planning, design coordination, construction delivery and handover support, with clear reporting at every stage.",
    image: workPlan,
    alt: "Building under construction with columns, blockwork and formwork.",
    imageNote: "Completed work",
    capabilities: [
      "Project planning and programme development",
      "Design coordination and buildability review",
      "Residential and commercial building delivery",
      "Site supervision and quality control",
      "Handover documentation and aftercare",
    ],
    outcomes: [
      "One point of accountability from brief to handover",
      "A programme agreed before mobilisation",
      "The same team carrying design intent through to site",
    ],
  },
  {
    slug: "road-construction",
    title: "Road Construction",
    chapter: "build",
    summary:
      "Roads, drainage and external works planned around the site, the traffic and the long-term maintenance of the surface.",
    description:
      "Our civil works cover road formation, earthworks, drainage, paving and finishing. We plan the works around access and site logistics, then deliver a surface that drains, holds its profile and stands up to daily use.",
    image: serviceRoad,
    alt: "Road roller compacting asphalt on a road construction site.",
    imageNote: "Illustrative image",
    capabilities: [
      "Road formation and earthworks",
      "Drainage and stormwater works",
      "Paving, asphalt and surface finishing",
      "Kerbs, access and external works",
      "Site logistics and traffic planning",
    ],
    outcomes: [
      "Drainage considered before the surface is laid",
      "Works sequenced around access and live sites",
      "A maintainable finish, not just a finished surface",
    ],
  },
  {
    slug: "ceiling-and-wall-systems",
    title: "Ceiling & Wall Systems",
    chapter: "finish",
    summary:
      "Suspended ceilings, dry partitions and wall linings specified, supplied and installed by one team.",
    description:
      "From a simple flat ceiling to stepped set-outs, concealed lighting and acoustic partitions, we specify the right system and install it cleanly. The Ephtech Board system sits at the centre of this service, supported by grids, channels, jointing compounds and trained crews.",
    image: workCeiling,
    alt: "Completed office interior with a suspended ceiling and wall panels.",
    imageNote: "Completed work",
    capabilities: [
      "Suspended ceiling systems",
      "Dry-wall partitions and wall linings",
      "Feature ceilings and concealed lighting",
      "Acoustic and moisture-resistant systems",
      "Jointing, finishing and paint-ready surfaces",
    ],
    outcomes: [
      "Flat, consistent ceiling planes",
      "Dry installation with no curing downtime",
      "A finish detailed for the way the room is used",
    ],
  },
  {
    slug: "interior-finishing",
    title: "Interior Finishing",
    chapter: "finish",
    summary:
      "Turnkey fit-out, feature walls, staircases, joinery and the final details that make a space feel complete.",
    description:
      "We take interiors from bare shell to a finished, usable space. The scope can include partitions, wall panels, staircases, built-in joinery, screeding, painting and the final coordination of lighting and finishes.",
    image: workInterior,
    alt: "Finished living room with a white panel wall, ceiling and warm lighting.",
    imageNote: "Completed work",
    capabilities: [
      "Turnkey interior fit-out",
      "Feature walls and wall panels",
      "Staircases and built-in joinery",
      "Screeding, painting and surface finishes",
      "Lighting and finish coordination",
    ],
    outcomes: [
      "One team responsible for the finished room",
      "Details resolved before installation",
      "A clean, coordinated handover",
    ],
  },
  {
    slug: "building-materials-supply",
    title: "Supply & Installation of Building Materials",
    chapter: "supply",
    summary:
      "Boards, ceiling systems, grids, channels and accessories supplied as one package — with installation support when needed.",
    description:
      "We supply modern building materials and the system components that go with them, so nothing is missing on site. Materials can be delivered from the branch closest to the project, with technical support and installation teams available where the scope requires it.",
    image: boardProduct,
    alt: "Stack of Ephtech boards showing the factory-finished face.",
    imageNote: "Completed work",
    capabilities: [
      "Ephtech Board and factory-finished panels",
      "Suspended ceiling grids and channels",
      "Jointing compounds, fasteners and accessories",
      "Site delivery and material scheduling",
      "Installation support and technical advice",
    ],
    outcomes: [
      "One supplier for the system, not a list of parts",
      "Materials scheduled to the programme",
      "Support from the same team that installs",
    ],
  },
  {
    slug: "building-materials-importation",
    title: "Importation of Modern Building Materials",
    chapter: "supply",
    summary:
      "Sourcing and importing modern materials for projects that need a specification beyond the local catalogue.",
    description:
      "We source and import modern building materials for projects with specific performance, finish or availability requirements. The service covers supplier selection, shipping coordination, clearing and delivery to the branch or site.",
    image: serviceImport,
    alt: "Aerial view of a logistics port with shipping containers and cargo handling equipment.",
    imageNote: "Illustrative image",
    capabilities: [
      "Supplier sourcing and product verification",
      "Shipping and clearing coordination",
      "Import documentation and logistics",
      "Warehousing and branch distribution",
      "Site delivery and material handling",
    ],
    outcomes: [
      "Access to specifications beyond the local market",
      "A single coordination point for import logistics",
      "Materials delivered when the programme needs them",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    chapter: "place",
    summary:
      "Property development and residential or commercial places, from land and concept through delivery.",
    description:
      "We develop residential and commercial property with the same construction and finishing teams that deliver our building projects. The scope covers early feasibility, concept coordination, development delivery and project management.",
    image: workRealEstate,
    alt: "Completed residential building with a gated frontage.",
    imageNote: "Completed work",
    capabilities: [
      "Residential and commercial property development",
      "Land and feasibility coordination",
      "Concept and design coordination",
      "Development delivery and project management",
      "Handover and property presentation",
    ],
    outcomes: [
      "Construction knowledge applied at development stage",
      "One team from concept to completed property",
      "A finished place, not just a structure",
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    chapter: "place",
    summary:
      "External environments, planting, paving and the landscape details that complete a property.",
    description:
      "Landscaping completes the way a property is experienced. We coordinate soft and hard landscaping, planting, paving and external works with the building and finishing programme so the outside is ready when the inside is.",
    image: serviceLandscaping,
    alt: "Modern house with a green lawn, garden and landscaped frontage.",
    imageNote: "Illustrative image",
    capabilities: [
      "Soft landscaping and planting",
      "Paving and external circulation",
      "Garden and courtyard works",
      "External works coordination",
      "Property presentation and aftercare",
    ],
    outcomes: [
      "External works planned with the building programme",
      "A landscape that reads as part of the property",
      "One team for the last details, inside and out",
    ],
  },
];

export const servicesByChapter = (id: ChapterId) =>
  companyServices.filter((service) => service.chapter === id);

export const getChapter = (id: ChapterId) =>
  chapters.find((chapter) => chapter.id === id);

export const getCompanyService = (slug: string) =>
  companyServices.find((service) => service.slug === slug);

export const companyStats = {
  rc: "RC 1216055",
  branches: "Lagos · Owerri · Aba",
  chapters: "5 chapters · 8 services",
  team: "One accountable team",
};

export const companyProcess = [
  {
    index: "01",
    title: "Brief",
    body: "We start with the site, the use and the budget — not a catalogue of products.",
  },
  {
    index: "02",
    title: "Plan",
    body: "Design coordination, programme, materials and the right delivery team are agreed before mobilisation.",
  },
  {
    index: "03",
    title: "Build",
    body: "Civil, structural and building works are sequenced around access, safety and the programme.",
  },
  {
    index: "04",
    title: "Finish",
    body: "Ceilings, walls, joinery and interior finishes are delivered by the same accountable team.",
  },
  {
    index: "05",
    title: "Hand over",
    body: "Snagging, documentation and aftercare close the loop — inside and out.",
  },
];


export const companyImage = workStairs;
export const companyDetail = workDetail;
export const companyTeam = teamSite;
export const companyBuild = workBuild;
