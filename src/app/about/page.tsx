import type { Metadata } from "next";
import Link from "next/link";
import { branches } from "@/lib/data";
import { companyServices, companyStats } from "@/lib/company";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import NigeriaMap from "@/components/nigeria-map";
import PageIntro from "@/components/page-intro";
import ProjectCarousel from "@/components/project-carousel";
import QuoteButton from "@/components/quote-button";
import { ArrowRight, ArrowUpRight, Phone, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ephtech International Limited is a multidisciplinary construction, interiors, property and materials company operating across Lagos, Owerri and Aba.",
  alternates: { canonical: "/about" },
};

const aboutStats = [
  {
    label: "Branches",
    value: String(branches.length).padStart(2, "0"),
    detail: "Lagos, Owerri and Aba",
  },
  {
    label: "Service divisions",
    value: String(companyServices.length).padStart(2, "0"),
    detail: "One company",
  },
  {
    label: "Accountable team",
    value: "01",
    detail: "Brief to handover",
  },
  {
    label: "RC number",
    value: companyStats.rc.replace("RC ", ""),
    detail: "Registered in Nigeria",
  },
];

const aboutLayers = [
  {
    title: "Design and planning",
    body: "Project planning, design coordination and a buildability review before work starts.",
    tag: "Brief",
  },
  {
    title: "Construction",
    body: "Residential and commercial buildings, structural works and site supervision.",
    tag: "Build",
  },
  {
    title: "Interiors and finishing",
    body: "Ceilings, partitions, wall linings, staircases, joinery and final finishes.",
    tag: "Finish",
  },
  {
    title: "Materials and supply",
    body: "Boards, ceiling systems and imported finishes scheduled to the programme.",
    tag: "Supply",
  },
  {
    title: "Property and external works",
    body: "Real estate development, roads, drainage and landscaping.",
    tag: "Property",
  },
];

const aboutProjects = [
  {
    src: "/media/finish-interiors/04.jpg",
    alt: "Completed office interior with a suspended ceiling and wall panels.",
    title: "Office fit out",
    service: "Interior finishing",
    note: "Completed work",
    href: "/services/interior-finishing",
  },
  {
    src: "/media/finish-interiors/02.jpg",
    alt: "Finished living room with a panel wall and a white ceiling.",
    title: "Residential interior",
    service: "Interior finishing",
    note: "Completed work",
    href: "/services/interior-finishing",
  },
  {
    src: "/media/finish-interiors/18.jpg",
    alt: "Staircase with a panelled wall and concealed lighting.",
    title: "Staircase and joinery",
    service: "Interior finishing",
    note: "Completed work",
    href: "/services/interior-finishing",
  },
  {
    src: "/media/selected-work/03.jpg",
    alt: "Completed white residential building with a gated frontage.",
    title: "Residential building",
    service: "Design and building projects",
    note: "Completed work",
    href: "/services/design-and-building-projects",
  },
  {
    src: "/media/design-build/05.jpg",
    alt: "Completed two storey building with balconies.",
    title: "Building delivery",
    service: "Design and building projects",
    note: "Client site",
    href: "/services/design-and-building-projects",
  },
  {
    src: "/media/selected-work/01.jpg",
    alt: "Completed brick duplex with a gated frontage.",
    title: "Property development",
    service: "Real estate",
    note: "Completed work",
    href: "/services/real-estate",
  },
];

export default function AboutPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="About Ephtech"
        label="About"
        title="One company. One standard."
        lede="Ephtech International Limited is a multidisciplinary construction, building materials and interior finishing company. We plan, build, finish, supply and develop, with one accountable team across Lagos, Owerri and Aba."
        aside={
          <div>
            <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
              <span className="eyebrow text-muted">Company at a glance</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-px border border-line bg-line">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="bg-paper p-4 sm:p-5">
                  <dt className="mono text-[8px] tracking-[0.14em] uppercase text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-none font-medium tracking-[-0.03em]">
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-[10.5px] leading-snug text-muted">{stat.detail}</p>
                </div>
              ))}
            </dl>

            <p className="mono mt-3 text-[8px] leading-relaxed tracking-[0.14em] uppercase text-muted">
              One company across construction, interiors, materials and property.
            </p>
          </div>
        }
      />

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow text-muted">Who we are</span>
              <h2 className="h2 mt-4">Success through Excellence</h2>
              <p className="body-lg mt-6">
                Ephtech brings design, construction, interiors, materials and property under one
                company. That range matters because projects rarely fit into a single trade: a
                building needs a structure, a finish needs a system, and a property needs both.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                Our teams work from the first brief to the final handover, with the same standard
                of coordination and site discipline across every service.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/services" className="btn btn-primary">
                  Explore our services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <QuoteButton className="btn btn-ghost">
                  Start a project
                  <WhatsApp className="h-3.5 w-3.5" />
                </QuoteButton>
              </div>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <div className="flex items-end justify-between gap-4 border-b border-line pb-3">
                <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
                  One company, end to end
                </span>
                <span className="mono text-[8px] tracking-[0.12em] uppercase text-muted">
                  {String(aboutLayers.length).padStart(2, "0")} disciplines
                </span>
              </div>

              <div>
                {aboutLayers.map((layer, index) => (
                  <div
                    key={layer.title}
                    className="grid grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-line py-4 sm:gap-6 sm:py-5"
                  >
                    <span className="mono pt-1 text-[9px] tracking-[0.14em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium tracking-[-0.025em]">
                        {layer.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-[12.5px] leading-relaxed text-muted">
                        {layer.body}
                      </p>
                    </div>
                    <span className="mono pt-1 text-[8px] tracking-[0.12em] uppercase text-muted">
                      {layer.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper-2">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-6">
              <div data-reveal>
                <span className="eyebrow text-muted">What we cover</span>
                <h2 className="h2 mt-4">Our services. The work behind them.</h2>
                <p className="body-lg mt-5 max-w-lg">
                  Choose a single service or bring us in across the whole project. The scope
                  changes; the accountability does not.
                </p>
              </div>

              <div
                className="mt-8 grid gap-x-6 border-t border-line sm:grid-cols-2"
                data-reveal-group
              >
                {companyServices.map((service, index) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-start justify-between gap-3 border-b border-line py-3.5"
                  >
                    <span className="mono pt-1 text-[8px] tracking-[0.12em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-[15.5px] leading-tight font-medium tracking-[-0.02em]">
                      {service.title}
                    </span>
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-forest" />
                  </Link>
                ))}
              </div>

              <Link
                href="/services"
                className="link-underline mt-5 inline-flex text-[13px] font-medium"
                data-reveal
              >
                Explore all services
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-6" data-reveal>
              <ProjectCarousel items={aboutProjects} />
              <p className="mono mt-3 text-[8px] leading-relaxed tracking-[0.14em] uppercase text-muted">
                Selected work. Client images are labelled.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-forest text-paper">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-amber/80">Where we are</span>
              <h2 className="h2 mt-4 text-paper">Three branches. One standard.</h2>
            </div>
            <p className="body-lg lg:col-span-5 text-paper/55" data-reveal>
              Coordination and support from Lagos, Owerri and Aba, with project delivery across
              Nigeria.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4" data-reveal>
              <div className="flex h-full flex-col bg-forest-2 p-3 sm:p-4">
                <div className="flex items-center justify-between border-b border-paper/12 pb-2.5">
                  <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-paper/60">
                    Nigeria / 03 branches
                  </span>
                  <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-paper/60">
                    Supply route
                  </span>
                </div>
                <div className="min-h-[240px] flex-1 py-2">
                  <NigeriaMap />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8" data-reveal-group>
              {branches.map((branch, index) => (
                <div
                  key={branch.city}
                  className="grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-paper/12 py-5 last:border-b"
                >
                  <span className="mono pt-1 text-[10px] tracking-[0.14em] text-paper/45">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-[-0.03em]">
                      {branch.city}
                    </h3>
                    <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-paper/55">
                      {branch.address.join(", ")}
                    </p>
                    <p className="mono mt-2 text-[8.5px] tracking-[0.12em] uppercase text-paper/45">
                      {branch.region} Nigeria
                    </p>
                  </div>
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="mono flex items-center gap-2 border-b border-paper/20 pb-0.5 text-[8.5px] tracking-[0.12em] uppercase text-paper/60 transition-colors hover:text-amber"
                  >
                    <Phone className="h-3 w-3" />
                    Call
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">Next step</span>
              <h2 className="h2 mt-4">
                Work with
                <br />
                one team.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                Bring us a brief, a drawing or a site. We will confirm the right services and the
                team to lead them.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4" data-reveal>
              <QuoteButton className="btn btn-dark w-full" message={WHATSAPP_MESSAGES.general}>
                Start a project
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
