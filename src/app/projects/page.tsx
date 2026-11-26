import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import serviceRoad from "@/assets/images/service-road.jpg";
import workBuild from "@/assets/images/work-build.jpg";
import workInterior from "@/assets/images/work-interior.jpg";
import workRealEstate from "@/assets/images/work-real-estate.jpg";
import { selectedWork } from "@/lib/selected-work";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import ServiceGalleryCarousel from "@/components/service-gallery-carousel";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Construction, interiors, roads, property development and landscaping projects by Ephtech International. Selected client work and clearly labelled illustrative images.",
  alternates: { canonical: "/projects" },
};

const projectIntroMedia = [
  {
    src: "/media/selected-work/01.jpg",
    alt: "Completed brick duplex with a gated frontage.",
    note: "Completed work",
  },
  {
    src: "/media/finish-interiors/04.jpg",
    alt: "Completed office interior with a suspended ceiling and wall panels.",
    note: "Completed work",
  },
  {
    src: "/media/selected-work/03.jpg",
    alt: "Completed white residential building with a gated frontage.",
    note: "Completed work",
  },
  {
    src: "/media/finish-interiors/18.jpg",
    alt: "Staircase with a panelled wall and concealed lighting.",
    note: "Completed work",
  },
  {
    src: "/media/design-build/05.jpg",
    alt: "Completed two storey building with balconies.",
    note: "Client site",
  },
  {
    src: "/media/finish-interiors/17.jpg",
    alt: "Cathedral ceiling with a feature cross.",
    note: "Completed work",
  },
];

const projectTypes = [
  {
    index: "01",
    title: "Buildings and construction",
    service: "Design and building projects",
    body: "New residential and commercial buildings, structural works and the coordination that carries a site from drawings to handover.",
    href: "/services/design-and-building-projects",
    image: workBuild,
    alt: "Building under construction with columns, blockwork and formwork.",
    note: "Client site",
  },
  {
    index: "02",
    title: "Interiors and finishing",
    service: "Interior finishing",
    body: "Ceilings, partitions, wall linings, staircases, joinery and the final finishes that make a space usable.",
    href: "/services/interior-finishing",
    image: workInterior,
    alt: "Finished living room with a white panel wall, ceiling and warm lighting.",
    note: "Completed work",
  },
  {
    index: "03",
    title: "Roads and external works",
    service: "Road construction",
    body: "Road formation, drainage, paving and the external works that complete a site.",
    href: "/services/road-construction",
    image: serviceRoad,
    alt: "Road roller compacting asphalt on a road construction site.",
    note: "Illustrative image",
  },
  {
    index: "04",
    title: "Property development",
    service: "Real estate",
    body: "Residential and commercial property carried from land and concept through development and handover.",
    href: "/services/real-estate",
    image: workRealEstate,
    alt: "Completed residential building with a gated frontage.",
    note: "Completed work",
  },
];

const projectSteps = [
  {
    title: "Brief",
    body: "Tell us what you are building, the site and the outcome you need.",
  },
  {
    title: "Scope",
    body: "We confirm the work, the materials and the programme before mobilisation.",
  },
  {
    title: "Build",
    body: "One team carries construction, finishing and site coordination.",
  },
  {
    title: "Handover",
    body: "Snagging, documentation and aftercare close the project.",
  },
];

export default function ProjectsPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="What we build"
        label="Projects"
        title={
          <>
            Different projects.
            <br />
            One standard.
          </>
        }
        lede="Ephtech International works on new buildings, interior fit outs, ceilings and partitions, staircases and joinery, roads and external works, property development and landscaping. Some projects start with a bare site. Others begin with a single room, a drawing or a material schedule. The same company can carry the brief, the build, the finish and the supply, with teams working from Lagos, Owerri and Aba. Client media is labelled throughout, and stock imagery is marked illustrative."
        carousel={projectIntroMedia}
      />

      {/* ---------------- project types ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">01 / Project types</span>
              <h2 className="h2 mt-4">What we build.</h2>
            </div>
            <p className="body-lg lg:col-span-5" data-reveal>
              New buildings, interiors, external works and property. Use one type on its own, or
              combine several under one team.
            </p>
          </div>

          <div className="mt-10 grid gap-x-5 gap-y-10 md:grid-cols-2" data-reveal-group>
            {projectTypes.map((type) => (
              <Link key={type.title} href={type.href} className="group block">
                <div className="media relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    className="photo-grade object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                    {type.note}
                  </span>
                  <span className="mono absolute right-3 bottom-3 bg-forest/80 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-paper/80">
                    {type.index}
                  </span>
                </div>

                <div className="mt-4 border-t border-line pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
                        {type.service}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.03em]">
                        {type.title}
                      </h3>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-paper">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-muted">
                    {type.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div
            className="mt-10 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between"
            data-reveal
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
                Also part of the work
              </span>
              <Link
                href="/services/building-materials-supply"
                className="link-underline text-[12.5px] font-medium"
              >
                Building materials supply
              </Link>
              <Link
                href="/services/building-materials-importation"
                className="link-underline text-[12.5px] font-medium"
              >
                Importation
              </Link>
              <Link
                href="/services/landscaping"
                className="link-underline text-[12.5px] font-medium"
              >
                Landscaping
              </Link>
            </div>
            <Link href="/services" className="link-underline text-[13px] font-medium">
              All services
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- selected work carousel ---------------- */}
      <section className="section border-y border-line bg-paper-2">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">02 / Selected work</span>
              <h2 className="h2 mt-4">The work, in motion.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              A slow pass across completed interiors, buildings and residential projects, drawn
              from Ephtech client media.
            </p>
          </div>
        </div>

        <div className="mt-10" data-reveal>
          <ServiceGalleryCarousel items={selectedWork} serviceTitle="Selected work" />
        </div>
      </section>

      {/* ---------------- how a project runs ---------------- */}
      <section className="section bg-forest text-paper">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-amber/80">03 / How a project runs</span>
              <h2 className="h2 mt-4 text-paper">From first brief to handover.</h2>
            </div>
            <p className="body-lg lg:col-span-5 text-paper/55" data-reveal>
              Every project starts with a conversation about the site, the drawings and what the
              finished space needs to do.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
            {projectSteps.map((step, index) => (
              <div key={step.title} className="border-t border-paper/15 pt-4">
                <span className="mono text-[8.5px] tracking-[0.14em] text-amber/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.025em] text-paper">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-paper/55">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- closing cta ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">Next step</span>
              <h2 className="h2 mt-4">
                Have a project
                <br />
                in mind?
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                Send a brief, drawing or site address. We will confirm the scope, the programme and
                the right team.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4" data-reveal>
              <QuoteButton className="btn btn-dark w-full" message={WHATSAPP_MESSAGES.general}>
                Discuss a project
                <WhatsApp className="h-4 w-4" />
              </QuoteButton>
              <Link
                href="/contact"
                className="btn btn-ghost w-full border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-paper"
              >
                Contact the team
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
