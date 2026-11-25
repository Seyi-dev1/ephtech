import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import serviceLandscaping from "@/assets/images/service-landscaping.jpg";
import serviceRoad from "@/assets/images/service-road.jpg";
import workBuild from "@/assets/images/work-build.jpg";
import workCeiling from "@/assets/images/work-ceiling.jpg";
import workDetail from "@/assets/images/work-detail.jpg";
import workInterior from "@/assets/images/work-interior.jpg";
import workRealEstate from "@/assets/images/work-real-estate.jpg";
import workStairs from "@/assets/images/work-stairs.jpg";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected construction, interiors, ceilings, real estate and external works by Ephtech International. Client media and clearly-labelled illustrative images.",
  alternates: { canonical: "/projects" },
};

const work = [
  {
    image: workCeiling,
    title: "Office fit-out",
    service: "Interior finishing",
    note: "Completed work",
    alt: "Completed office interior with a suspended ceiling and wall panels.",
  },
  {
    image: workInterior,
    title: "Residential finish",
    service: "Interior finishing",
    note: "Completed work",
    alt: "Finished living room with a white panel wall, ceiling and warm lighting.",
  },
  {
    image: workStairs,
    title: "Staircase & joinery",
    service: "Interior finishing",
    note: "Completed work",
    alt: "Finished staircase with a panelled wall and concealed lighting.",
  },
  {
    image: workBuild,
    title: "Building in progress",
    service: "Design & building projects",
    note: "Completed work",
    alt: "Building under construction with columns, blockwork and formwork.",
  },
  {
    image: workRealEstate,
    title: "Residential development",
    service: "Real estate",
    note: "Completed work",
    alt: "Completed residential building with a gated frontage.",
  },
  {
    image: workDetail,
    title: "Feature interior",
    service: "Interior finishing",
    note: "Completed work",
    alt: "Decorative interior with a feature wall, curtains and ceiling detail.",
  },
  {
    image: serviceRoad,
    title: "Road works",
    service: "Road construction",
    note: "Illustrative image",
    alt: "Road roller compacting asphalt on a road construction site.",
  },
  {
    image: serviceLandscaping,
    title: "Landscape frontage",
    service: "Landscaping",
    note: "Illustrative image",
    alt: "Modern house with a green lawn, garden and landscaped frontage.",
  },
];

export default function ProjectsPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="Projects · Across the company"
        title="Built across the whole project."
        lede="Construction, ceilings, interiors, real estate and external works. The work is shown by service and setting, without inventing project names."
        note="Client-supplied work is marked “Completed work.” Online images are illustrative and marked “Illustrative image.”"
      />

      <section className="section">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">Selected work</span>
              <h2 className="h2 mt-4">The evidence.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              A cross-section of the company’s work — from the first structure to the final room.
            </p>
          </div>

          <div className="mt-10 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {work.map((item) => (
              <article key={item.title}>
                <div className="media relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    className="photo-grade object-cover"
                  />
                  <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                    {item.note}
                  </span>
                </div>
                <div className="mt-3 border-t border-line pt-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-medium tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-muted" />
                  </div>
                  <p className="mono mt-2 text-[8px] tracking-[0.12em] uppercase text-muted">
                    {item.service}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5" data-reveal>
            <p className="mono max-w-md text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted">
              Project references and site visits are available on request.
            </p>
            <QuoteButton className="link-underline shrink-0 text-[13px] font-medium">
              Discuss a project
              <WhatsApp className="h-3.5 w-3.5" />
            </QuoteButton>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-paper-2">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">More than one trade</span>
              <h2 className="h2 mt-4">The work spans services.</h2>
              <p className="body-lg mt-5 max-w-lg">
                A single project can draw on construction, finishing and supply. These images show
                the range, not a single product.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:col-start-9" data-reveal>
              <Link href="/services" className="btn btn-primary w-full">
                Explore our services
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact"
                className="btn btn-ghost w-full"
              >
                Discuss your project
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
