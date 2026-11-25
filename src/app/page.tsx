import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import boardProduct from "@/assets/images/board-product.jpg";
import teamSite from "@/assets/images/team-site.jpg";
import workBuild from "@/assets/images/work-build.jpg";
import workCeiling from "@/assets/images/work-ceiling.jpg";
import workInterior from "@/assets/images/work-interior.jpg";
import workRealEstate from "@/assets/images/work-real-estate.jpg";
import { branches } from "@/lib/data";
import { companyPrinciples, companyServices } from "@/lib/company";
import { siteUrl } from "@/lib/site";
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, whatsappHref } from "@/lib/whatsapp";
import CompanyHero from "@/components/company-hero";
import NigeriaMap from "@/components/nigeria-map";
import QuoteButton from "@/components/quote-button";
import {
  ArrowRight,
  ArrowUpRight,
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
      category: "Factory-finished building board",
      description:
        "A dry, factory-finished, moisture-resistant alternative to POP, plasterboard and gypsum for ceilings and walls.",
      url: `${siteUrl}/board`,
    },
  ],
};

const selectedWork = [
  {
    image: workCeiling,
    title: "Office fit-out",
    service: "Interior finishing",
    alt: "Completed office interior with a suspended ceiling and wall panels.",
  },
  {
    image: workInterior,
    title: "Residential finish",
    service: "Interior finishing",
    alt: "Finished living room with a white panel wall, ceiling and warm lighting.",
  },
  {
    image: workBuild,
    title: "Building in progress",
    service: "Design & building projects",
    alt: "Building under construction with columns, blockwork and formwork.",
  },
  {
    image: workRealEstate,
    title: "Residential development",
    service: "Real estate",
    alt: "Completed residential building with a gated frontage.",
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
              <h2 className="h2 mt-4">Finished rooms. Working sites.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              A company built across the whole project — from structure and services to the last
              ceiling detail.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
            {selectedWork.map((item) => (
              <Link key={item.title} href="/projects" className="group block">
                <div className="media relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    className="photo-grade object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                    Completed work
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-2.5">
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mono mt-1 text-[8px] tracking-[0.12em] uppercase text-muted">
                      {item.service}
                    </p>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-forest" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-end" data-reveal>
            <Link href="/projects" className="link-underline text-[13px] font-medium">
              See the work
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- products ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6" data-reveal>
              <span className="eyebrow text-muted">Products & materials</span>
              <h2 className="h2 mt-4">
                The board is one product.
                <br />
                The company is the system.
              </h2>
              <p className="body-lg mt-6 max-w-lg">
                Ephtech Board is our flagship factory-finished board, supported by ceiling systems,
                building materials and imported finishes. Explore the product range as part of the
                wider Ephtech service.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/products" className="btn btn-primary">
                  Explore products
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/board" className="link-underline text-[13px] font-medium">
                  Ephtech Board
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <Link href="/board" className="group block lg:col-span-6" data-reveal>
              <div className="media relative aspect-[16/10] overflow-hidden">
                <Image
                  src={boardProduct}
                  alt="Stack of Ephtech boards showing the factory-finished face."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  className="photo-grade object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  Flagship product
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
                <span className="font-display text-xl font-medium tracking-[-0.025em]">
                  Ephtech Board
                </span>
                <span className="mono text-[8px] tracking-[0.12em] uppercase text-muted">
                  Factory-finished board system
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- principles ---------------- */}
      <section className="section bg-forest text-paper">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-amber/80">How we work</span>
              <h2 className="h2 mt-5 text-paper">One team. Clear scope. No hand-offs.</h2>
            </div>
            <p className="body-lg lg:col-span-5 text-paper/55" data-reveal>
              Use one service or combine several. The scope is agreed around your project, not a
              fixed package.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
            {companyPrinciples.map((principle) => (
              <div key={principle.title} className="border-t border-paper/12 pt-4">
                <h3 className="mt-1 font-display text-lg font-medium tracking-[-0.02em]">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-paper/55">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>

          <figure className="mt-10" data-reveal>
            <div className="media relative aspect-[16/7] overflow-hidden">
              <Image
                src={teamSite}
                alt="Ephtech team on a construction site."
                fill
                sizes="100vw"
                placeholder="blur"
                className="photo-grade object-cover"
              />
              <span className="mono absolute bottom-3 left-3 bg-forest/80 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-paper/80">
                One team · Client site
              </span>
            </div>
            <figcaption className="mono mt-3 text-[8px] tracking-[0.14em] uppercase text-paper/45">
              The same team across design, construction, finishing and supply.
            </figcaption>
          </figure>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-paper/12 pt-5" data-reveal>
            <QuoteButton className="btn btn-primary">
              Start a project
              <WhatsApp className="h-4 w-4" />
            </QuoteButton>
            <Link href="/about" className="link-underline text-[13px] font-medium text-paper">
              About Ephtech
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
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
