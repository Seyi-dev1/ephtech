import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import boardProduct from "@/assets/images/board-product.jpg";
import { branches } from "@/lib/data";
import { companyServices } from "@/lib/company";
import { selectedWork } from "@/lib/selected-work";
import { siteUrl } from "@/lib/site";
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, whatsappHref } from "@/lib/whatsapp";
import CompanyHero from "@/components/company-hero";
import NigeriaMap from "@/components/nigeria-map";
import QuoteButton from "@/components/quote-button";
import ServiceGalleryCarousel from "@/components/service-gallery-carousel";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Phone,
  WhatsApp,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Ephtech International: Design, Construction, Interiors & Materials",
  description:
    "Ephtech International Limited is a multi-disciplinary construction, interiors, property and materials company operating across Lagos, Owerri and Aba.",
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Ephtech International Ltd",
      url: siteUrl,
      slogan: "Success through Excellence",
      email: "ephtechinternational@yahoo.com",
      telephone: "+2348032519288",
      identifier: "RC 1216055",
      description:
        "A multi-disciplinary construction, building materials and interior finishing company operating from Lagos, Owerri and Aba.",
      areaServed: ["Lagos", "Owerri", "Aba", "Nigeria"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Km 36, Lekki-Epe Expressway, Kajola Bus Stop",
        addressLocality: "Ibeju-Lekki",
        addressRegion: "Lagos",
        addressCountry: "NG",
      },
      department: branches.map((branch) => ({
        "@type": "LocalBusiness",
        name: `Ephtech ${branch.city}`,
        telephone: "+2348032519288",
        address: {
          "@type": "PostalAddress",
          streetAddress: branch.address.slice(0, -1).join(", "),
          addressLocality: branch.city,
          addressRegion: branch.state,
          addressCountry: "NG",
        },
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ephtech International services",
        itemListElement: companyServices.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
            url: `${siteUrl}/services/${service.slug}`,
          },
        })),
      },
    },
    {
      "@type": "Product",
      name: "Ephtech Board",
      brand: { "@type": "Brand", name: "Ephtech" },
      category: "Engineered building board",
      description:
        "A dry board with a factory finish and moisture resistance, made as an alternative to POP, plasterboard and gypsum for ceilings and walls.",
      url: `${siteUrl}/board`,
    },
  ],
};

const boardAdvantages = [
  {
    lead: "Moisture resistance.",
    body: "Formulated for humid rooms and wet areas.",
  },
  {
    lead: "Impact resistance.",
    body: "Resists cracking, sagging and chipped edges.",
  },
  {
    lead: "Dry install.",
    body: "Zero curing downtime, so rooms finish sooner.",
  },
];

const workSteps = [
  {
    title: "Brief and site review",
    body: "We visit the site, read the drawings and agree what the space needs to do. Budget, programme and site constraints are put on the table before anything is priced.",
  },
  {
    title: "Scope and materials",
    body: "You receive a scope that states what is included, what is not, and the materials and quantities involved. The programme is agreed before the team mobilises.",
  },
  {
    title: "Build and finish",
    body: "Construction, ceilings, partitions, joinery and finishes are carried in sequence by the same team, with site coordination and progress reporting.",
  },
  {
    title: "Handover and aftercare",
    body: "We complete snagging, hand over the documents and stay available after completion. The people who built the work are the people you call.",
  },
];

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <CompanyHero />

      {/* ---------------- services ---------------- */}
      <section id="services" className="section scroll-mt-24">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">What we do</span>
              <h2 className="h2 mt-5">The services we deliver.</h2>
            </div>
            <p className="body-lg lg:col-span-5" data-reveal>
              Ephtech works across construction, interiors, materials and property. Whether you
              need one service or the whole project, the same team carries the scope from first
              brief to handover.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" data-reveal-group>
            {companyServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative block overflow-hidden bg-forest ${
                  index === companyServices.length - 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="media relative aspect-square lg:aspect-[16/11]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    className="photo-grade object-cover"
                  />
                  <div className="service-card__scrim absolute inset-0" aria-hidden="true" />
                  <span className="mono absolute top-3 left-3 z-10 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                    {service.imageNote}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <h3 className="font-display text-[clamp(1.4rem,2.4vw,2.1rem)] leading-[1.02] font-medium tracking-[-0.03em] text-paper">
                          {service.title}
                        </h3>
                        <p className="mt-2 max-w-[38ch] text-[12px] leading-relaxed text-paper/75">
                          {service.cardSummary}
                        </p>
                      </div>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-paper/35 text-paper transition-colors duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-forest">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5" data-reveal>
            <Link href="/services" className="btn btn-ghost">
              Explore all services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <QuoteButton className="link-underline text-[13px] font-medium">
              Start a project
              <WhatsApp className="h-3.5 w-3.5" />
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* ---------------- selected work ---------------- */}
      <section className="section bg-paper-2">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">Selected work</span>
              <h2 className="h2 mt-4">The work, up close.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              Finished interiors, completed exteriors and the details that carry a project through
              to handover.
            </p>
          </div>
        </div>

        <div className="mt-10" data-reveal>
          <ServiceGalleryCarousel items={selectedWork} serviceTitle="Selected work" speed={0.55} />
        </div>

        <div className="shell mt-8 flex justify-end" data-reveal>
          <Link href="/projects" className="link-underline text-[13px] font-medium">
            See the work
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ---------------- products ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6" data-reveal>
              <span className="eyebrow text-muted">Products & materials</span>
              <h2 className="h2 mt-4">The products we supply.</h2>
            </div>
            <p className="body-lg lg:col-span-5 lg:col-start-8" data-reveal>
              Ephtech International imports and supplies a number of building products. At the
              forefront right now is the Ephtech Board.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-12" data-reveal>
            <Link href="/board" className="group block lg:col-span-7 lg:h-full">
              <div className="media relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[420px]">
                <Image
                  src={boardProduct}
                  alt="Stack of Ephtech boards showing the finished face."
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  placeholder="blur"
                  className="photo-grade object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  Ephtech Board
                </span>
              </div>
            </Link>

            <div className="relative z-10 mx-4 -mt-8 border border-line bg-paper p-6 sm:mx-6 sm:p-8 lg:col-span-5 lg:mr-0 lg:-ml-14 lg:mt-12 lg:mb-12">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
                <span className="mono text-[8.5px] tracking-[0.16em] uppercase text-forest">
                  At the forefront
                </span>
                <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
                  01 / Flagship
                </span>
              </div>

              <h3 className="mt-4 font-display text-3xl font-medium tracking-[-0.03em]">
                Ephtech Board
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                A dry board with a factory finish for ceilings, partitions and wall linings. It
                replaces wet POP and fragile gypsum. It resists moisture and impact, holds a flat
                face that is ready for paint, and installs without curing downtime.
              </p>

              <ul className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                {boardAdvantages.map((advantage) => (
                  <li key={advantage.lead} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green" />
                    <span className="text-[12.5px] leading-relaxed text-muted">
                      <strong className="font-medium text-ink">{advantage.lead}</strong>{" "}
                      {advantage.body}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link href="/board" className="btn btn-primary">
                  Explore the board
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/board#specification" className="link-underline text-[13px] font-medium">
                  Board specification
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="mt-8 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between"
            data-reveal
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
                Also supplied
              </span>
              {[
                { label: "Ceiling systems", href: "/board" },
                { label: "Building materials", href: "/services/building-materials-supply" },
                { label: "Imported finishes", href: "/services/building-materials-importation" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="link-underline text-[12.5px] font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/services" className="link-underline text-[13px] font-medium">
              All services
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- how we work ---------------- */}
      <section className="section border-y border-line bg-paper-2">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">How we work</span>
              <h2 className="h2 mt-5">The same team, from first brief to handover.</h2>
            </div>
            <p className="body-lg lg:col-span-5" data-reveal>
              A project runs better when one team owns the scope, the programme and the finish. We
              agree the work first, build it in a clear sequence, and stay available after handover.
            </p>
          </div>

          <div
            className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4"
            data-reveal-group
          >
            {workSteps.map((step, index) => (
              <div key={step.title} className="border-t border-line pt-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="mono text-[9px] tracking-[0.14em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-12 lg:items-end"
            data-reveal
          >
            <div className="lg:col-span-8">
              <span className="eyebrow text-muted">One accountable team</span>
              <p className="mt-4 max-w-3xl font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.03em]">
                The same people carry the brief, the build, the finish and the supply. You are not
                passed between trades or left to coordinate the gaps.
              </p>
              <div className="mono mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[8.5px] tracking-[0.14em] uppercase text-muted">
                <span>One accountable team</span>
                <span>Lagos, Owerri and Aba</span>
                <span>Seven service divisions</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4">
              <QuoteButton className="btn btn-primary w-full">
                Start a project
                <WhatsApp className="h-4 w-4" />
              </QuoteButton>
              <Link href="/about" className="btn btn-ghost w-full">
                About Ephtech
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- branches ---------------- */}
      <section id="contact" className="section scroll-mt-24">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">Where we are</span>
              <h2 className="h2 mt-5">Three branches. One standard.</h2>
            </div>
            <p className="body-lg lg:col-span-5" data-reveal>
              Coordination and support from Lagos, Owerri and Aba, with project delivery across
              Nigeria.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4" data-reveal>
              <div className="flex h-full flex-col bg-forest p-3 text-paper sm:p-4">
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
                <div className="flex items-center gap-5 border-t border-paper/12 pt-2.5">
                  <span className="mono flex items-center gap-2 text-[8px] tracking-[0.12em] uppercase text-paper/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    Active branch
                  </span>
                  <span className="mono flex items-center gap-2 text-[8px] tracking-[0.12em] uppercase text-paper/60">
                    <span className="w-5 border-t border-dashed border-amber/60" />
                    Supply route
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8" data-reveal-group>
              {branches.map((branch, index) => (
                <div
                  key={branch.city}
                  className="grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-line py-5 last:border-b"
                >
                  <span className="mono pt-1 text-[10px] tracking-[0.14em] text-muted">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-[-0.03em]">
                      {branch.city}
                    </h3>
                    <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted">
                      {branch.address.join(", ")}
                    </p>
                    <p className="mono mt-2 text-[8.5px] tracking-[0.12em] uppercase text-muted">
                      {branch.region} Nigeria
                    </p>
                  </div>
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="mono flex items-center gap-2 border-b border-line pb-0.5 text-[8.5px] tracking-[0.12em] uppercase text-muted transition-colors hover:text-forest"
                  >
                    <Phone className="h-3 w-3" />
                    Call
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal>
            <a
              href={whatsappHref(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <WhatsApp className="h-4 w-4" />
              WhatsApp the team
            </a>
            <a href="tel:+2348032519288" className="btn btn-ghost">
              <Phone className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
            <Link href="/contact" className="link-underline text-[13px] font-medium sm:ml-2">
              Full contact details
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- closing ---------------- */}
      <section id="quote" aria-label="Start a project" className="section pt-0">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">Next step</span>
              <h2 className="h2 mt-4">
                Tell us what
                <br />
                you&apos;re building.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                A room, a building, a road or a property. We will confirm the scope and the right
                team to lead it.
              </p>
              <p className="mono mt-5 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-forest/55">
                Brief · Scope · Programme · One accountable team
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4" data-reveal>
              <QuoteButton className="btn btn-dark w-full" message={WHATSAPP_MESSAGES.general}>
                Start a project
                <WhatsApp className="h-4 w-4" />
              </QuoteButton>
              <a
                href="/ephtech-company-profile.pdf"
                download
                className="btn btn-ghost w-full border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-paper"
              >
                Download company profile
                <Download className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
