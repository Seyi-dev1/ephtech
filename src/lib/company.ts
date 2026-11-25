import type { StaticImageData } from "next/image";
import boardProduct from "@/assets/images/board-product.jpg";
import panelInstall from "@/assets/images/panel-install.jpg";
import projectCivic from "@/assets/images/project-civic.jpg";
import projectCommercial from "@/assets/images/project-commercial.jpg";
import projectResidence from "@/assets/images/project-residence.jpg";
import serviceDesignPlan from "@/assets/images/service-design-plan.jpg";
import serviceImport from "@/assets/images/service-import.jpg";
import serviceImportCranes from "@/assets/images/service-import-cranes.jpg";
import serviceImportPort from "@/assets/images/service-import-port.jpg";
import serviceImportShip from "@/assets/images/service-import-ship.jpg";
import serviceLandscaping from "@/assets/images/service-landscaping.jpg";
import serviceRoad from "@/assets/images/service-road.jpg";
import serviceRoadFinish from "@/assets/images/service-road-finish.jpg";
import serviceRoadMachinery from "@/assets/images/service-road-machinery.jpg";
import serviceRoadPaving from "@/assets/images/service-road-paving.jpg";
import teamSite from "@/assets/images/team-site.jpg";
import workBuild from "@/assets/images/work-build.jpg";
import workCeiling from "@/assets/images/work-ceiling.jpg";
import workCeilingDetail from "@/assets/images/work-ceiling-detail.jpg";
import workDetail from "@/assets/images/work-detail.jpg";
import workInterior from "@/assets/images/work-interior.jpg";
import workRealEstate from "@/assets/images/work-real-estate.jpg";
import workStairs from "@/assets/images/work-stairs.jpg";

export type ServiceGalleryItem = {
  image: string | StaticImageData;
  alt: string;
  note: "Completed work" | "Illustrative image" | "Client site";
  video?: string;
};

export type CompanyService = {
  slug: string;
  title: string;
  summary: string;
  cardSummary: string;
  description: string;
  image: StaticImageData;
  alt: string;
  imageNote: "Completed work" | "Illustrative image";
  gallery: ServiceGalleryItem[];
  capabilities: string[];
  outcomes: string[];
};

export const companyServices: CompanyService[] = [
  {
    slug: "design-and-building-projects",
    title: "Design & Building Projects",
    summary:
      "A single team to take a building project from early design coordination through construction and handover.",
    cardSummary: "From design coordination to construction and handover.",
    description:
      "We coordinate the design, the programme and the site team so the building you brief is the building that gets delivered. The service covers project planning, design coordination, construction delivery and handover support, with clear reporting throughout.",
    image: serviceDesignPlan,
    alt: "Architectural floor plan with room layouts and measured dimensions.",
    imageNote: "Illustrative image",
    gallery: [
      {
        image: "/media/design-build/01.jpg",
        alt: "Building under construction with blockwork and a pitched roof.",
        note: "Client site",
      },
      {
        image: "/media/design-build/02.jpg",
        alt: "Two-storey building under construction with scaffolding.",
        note: "Client site",
      },
      {
        image: "/media/design-build/03.jpg",
        alt: "Roof structure and ceiling framing under construction.",
        note: "Client site",
      },
      {
        image: "/media/design-build/04.jpg",
        alt: "Timber roof framing on a residential building.",
        note: "Client site",
      },
      {
        image: "/media/design-build/05.jpg",
        alt: "Completed two-storey building with balconies.",
        note: "Client site",
      },
      {
        image: "/media/design-build/06.jpg",
        alt: "Completed house with a hipped roof.",
        note: "Client site",
      },
      {
        image: "/media/design-build/07.jpg",
        alt: "Ground slab and site team at work.",
        note: "Client site",
      },
      {
        image: "/media/design-build/08.jpg",
        alt: "Curved staircase formwork under construction.",
        note: "Client site",
      },
      {
        image: "/media/design-build/09.jpg",
        alt: "Reinforced concrete staircase under construction.",
        note: "Client site",
      },
      {
        image: "/media/design-build/10.jpg",
        alt: "Groundworks and site team preparing a building footprint.",
        note: "Client site",
      },
      {
        image: "/media/design-build/11.jpg",
        alt: "Foundation slab and reinforcement on site.",
        note: "Client site",
      },
      {
        image: "/media/design-build/12.jpg",
        alt: "Staircase blockwork and reinforcement in progress.",
        note: "Client site",
      },
      {
        image: "/media/design-build/13.jpg",
        alt: "Building frame at first-floor level.",
        note: "Client site",
      },
      {
        image: "/media/design-build/14.jpg",
        alt: "Foundation blockwork and reinforcement.",
        note: "Client site",
      },
      {
        image: "/media/design-build/15.jpg",
        alt: "Blockwork walls at foundation level.",
        note: "Client site",
      },
      {
        image: "/media/design-build/16.jpg",
        alt: "Ground-floor slab with reinforcement laid out.",
        note: "Client site",
      },
      {
        image: "/media/design-build/17.jpg",
        alt: "Blockwork walls and site progress.",
        note: "Client site",
      },
      {
        image: "/media/design-build/video-01.jpg",
        video: "/videos/design-build/01.mp4",
        alt: "Site progress video.",
        note: "Client site",
      },
      {
        image: "/media/design-build/video-02.jpg",
        video: "/videos/design-build/02.mp4",
        alt: "Construction works video.",
        note: "Client site",
      },
      {
        image: "/media/design-build/video-03.jpg",
        video: "/videos/design-build/03.mp4",
        alt: "Site progress video.",
        note: "Client site",
      },
      {
        image: "/media/design-build/video-04.jpg",
        video: "/videos/design-build/04.mp4",
        alt: "Construction works video.",
        note: "Client site",
      },
      {
        image: "/media/design-build/video-05.jpg",
        video: "/videos/design-build/05.mp4",
        alt: "Site progress video.",
        note: "Client site",
      },
      {
        image: "/media/design-build/video-06.jpg",
        video: "/videos/design-build/06.mp4",
        alt: "Construction works video.",
        note: "Client site",
      },
    ],
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
    summary:
      "Roads, drainage and external works planned around the site, the traffic and the long-term maintenance of the surface.",
    cardSummary: "Roads, drainage and external works built around the site.",
    description:
      "Our civil works cover road formation, earthworks, drainage, paving and finishing. We plan the works around access and site logistics, then deliver a surface that drains, holds its profile and stands up to daily use.",
    image: serviceRoad,
    alt: "Road roller compacting asphalt on a road construction site.",
    imageNote: "Illustrative image",
    gallery: [
      {
        image: serviceRoad,
        alt: "Road roller compacting asphalt on a road construction site.",
        note: "Illustrative image",
      },
      {
        image: serviceRoadPaving,
        alt: "Paving equipment and crew laying asphalt on a road.",
        note: "Illustrative image",
      },
      {
        image: serviceRoadFinish,
        alt: "Newly paved road with traffic barriers during construction.",
        note: "Illustrative image",
      },
      {
        image: serviceRoadMachinery,
        alt: "Heavy machinery lined up for road construction.",
        note: "Illustrative image",
      },
    ],
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
    slug: "interior-finishing",
    title: "Interior Finishing",
    summary:
      "Turnkey fit-out, suspended ceilings, partitions, feature walls, staircases, joinery and the final details that complete a space.",
    cardSummary: "Ceilings, partitions, joinery and final finishes.",
    description:
      "We take interiors from bare shell to a finished, usable space. The scope covers suspended ceilings, dry partitions, wall linings, feature walls, staircases, built-in joinery, screeding, painting and the final coordination of lighting and finishes.",
    image: workInterior,
    alt: "Finished living room with a white panel wall, ceiling and warm lighting.",
    imageNote: "Completed work",
    gallery: [
      {
        image: workInterior,
        alt: "Finished living room with a white panel wall, ceiling and warm lighting.",
        note: "Completed work",
      },
      {
        image: workCeiling,
        alt: "Completed office interior with a suspended ceiling and wall panels.",
        note: "Completed work",
      },
      {
        image: workStairs,
        alt: "Finished staircase with a panelled wall and concealed lighting.",
        note: "Completed work",
      },
      {
        image: workDetail,
        alt: "Completed decorative interior with a detailed ceiling and wall finish.",
        note: "Completed work",
      },
    ],
    capabilities: [
      "Suspended ceilings and dry partitions",
      "Feature walls, wall linings and acoustic options",
      "Staircases and built-in joinery",
      "Screeding, painting and surface finishes",
      "Lighting and finish coordination",
    ],
    outcomes: [
      "One team responsible for ceilings, walls and the finished room",
      "Dry installation with no curing downtime",
      "A clean, coordinated handover",
    ],
  },
  {
    slug: "building-materials-supply",
    title: "Supply & Installation of Building Materials",
    summary:
      "Boards, ceiling systems, grids, channels and accessories supplied as one package — with installation support when needed.",
    cardSummary: "Boards, grids and system components delivered as one package.",
    description:
      "We supply modern building materials and the system components that go with them, so nothing is missing on site. Materials can be delivered from the branch closest to the project, with technical support and installation teams available where the scope requires it.",
    image: boardProduct,
    alt: "Stack of Ephtech boards showing the factory-finished face.",
    imageNote: "Completed work",
    gallery: [
      {
        image: boardProduct,
        alt: "Stack of Ephtech boards showing the factory-finished face.",
        note: "Completed work",
      },
      {
        image: workCeiling,
        alt: "Completed office interior with a suspended ceiling and wall panels.",
        note: "Completed work",
      },
      {
        image: panelInstall,
        alt: "Ceiling and wall panels being installed on site.",
        note: "Illustrative image",
      },
      {
        image: workCeilingDetail,
        alt: "Completed ceiling and wall detail.",
        note: "Completed work",
      },
    ],
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
    summary:
      "Sourcing and importing modern materials for projects that need a specification beyond the local catalogue.",
    cardSummary: "Modern materials sourced, cleared and delivered to site.",
    description:
      "We source and import modern building materials for projects with specific performance, finish or availability requirements. The service covers supplier selection, shipping coordination, clearing and delivery to the branch or site.",
    image: serviceImport,
    alt: "Aerial view of a logistics port with shipping containers and cargo handling equipment.",
    imageNote: "Illustrative image",
    gallery: [
      {
        image: serviceImport,
        alt: "Aerial view of a logistics port with shipping containers and cargo handling equipment.",
        note: "Illustrative image",
      },
      {
        image: serviceImportShip,
        alt: "Stacked shipping containers on a cargo ship.",
        note: "Illustrative image",
      },
      {
        image: serviceImportPort,
        alt: "Container port with cranes, cargo ship and stacked containers.",
        note: "Illustrative image",
      },
      {
        image: serviceImportCranes,
        alt: "Cargo cranes working over a container ship at port.",
        note: "Illustrative image",
      },
    ],
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
    summary:
      "Property development and residential or commercial places, from land and concept through delivery.",
    cardSummary: "Property developed from land and concept to a finished place.",
    description:
      "We develop residential and commercial property with the same construction and finishing teams that deliver our building projects. The scope covers early feasibility, concept coordination, development delivery and project management.",
    image: workRealEstate,
    alt: "Completed residential building with a gated frontage.",
    imageNote: "Completed work",
    gallery: [
      {
        image: workRealEstate,
        alt: "Completed residential building with a gated frontage.",
        note: "Completed work",
      },
      {
        image: projectResidence,
        alt: "Modern residential house with large glazing and landscaped surroundings.",
        note: "Illustrative image",
      },
      {
        image: projectCommercial,
        alt: "Modern commercial building with a pool and terrace.",
        note: "Illustrative image",
      },
      {
        image: projectCivic,
        alt: "Contemporary civic building with a dramatic geometric facade.",
        note: "Illustrative image",
      },
    ],
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
    summary:
      "External environments, planting, paving and the landscape details that complete a property.",
    cardSummary: "Planting, paving and external spaces that complete the property.",
    description:
      "Landscaping completes the way a property is experienced. We coordinate soft and hard landscaping, planting, paving and external works with the building and finishing programme so the outside is ready when the inside is.",
    image: serviceLandscaping,
    alt: "Modern house with a green lawn, garden and landscaped frontage.",
    imageNote: "Illustrative image",
    gallery: [
      {
        image: serviceLandscaping,
        alt: "Modern house with a green lawn, garden and landscaped frontage.",
        note: "Illustrative image",
      },
      {
        image: projectResidence,
        alt: "Modern residential house with mature planting and a landscaped setting.",
        note: "Illustrative image",
      },
      {
        image: workRealEstate,
        alt: "Completed residential exterior with a planted frontage and paved access.",
        note: "Completed work",
      },
      {
        image: projectCommercial,
        alt: "Landscaped terrace and pool area at a modern property.",
        note: "Illustrative image",
      },
    ],
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

export const getCompanyService = (slug: string) =>
  companyServices.find((service) => service.slug === slug);

export const companyStats = {
  rc: "RC 1216055",
  branches: "Lagos · Owerri · Aba",
  team: "One accountable team",
};

export const companyPrinciples = [
  {
    title: "One accountable team",
    body: "The same company can carry the brief, the build, the finish and the supply — or step in for a single service.",
  },
  {
    title: "Scope agreed first",
    body: "We confirm what is included, what is not, and the programme before mobilisation.",
  },
  {
    title: "Materials confirmed",
    body: "Systems, quantities and delivery are checked against the drawings and the site.",
  },
  {
    title: "Finish and aftercare",
    body: "Snagging, documentation and a clear handover close the job properly.",
  },
];

export const companyImage = workStairs;
export const companyDetail = workDetail;
export const companyTeam = teamSite;
export const companyBuild = workBuild;
