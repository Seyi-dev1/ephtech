import Image from "next/image";
import Link from "next/link";
import cathedralCeiling from "@/assets/images/cathedral-ceiling.jpg";
import { branches, images, services } from "@/lib/data";
import { homeFaqs } from "@/lib/faqs";
import { confirmedSpecs, formatSpec, pillars, product } from "@/lib/product";
import { siteUrl } from "@/lib/site";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  whatsappHref,
} from "@/lib/whatsapp";
import BoardMediaCarousel from "@/components/board-media-carousel";
import HeroImage from "@/components/hero-image";
import Comparison from "@/components/comparison";
import NigeriaMap from "@/components/nigeria-map";
import QuoteButton from "@/components/quote-button";
import RailVideo from "@/components/rail-video";
import WorkRail from "@/components/work-rail";
import {
  ArrowUpRight,
  Download,
  Phone,
  Plus,
  WhatsApp,
} from "@/components/icons";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Ephtech International Ltd",
      url: siteUrl,
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
    },
    {
      "@type": "Product",
      name: product.name,
      brand: { "@type": "Brand", name: "Ephtech" },
      category: product.category,
      description: product.description,
      additionalProperty: confirmedSpecs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: formatSpec(spec),
      })),
    },
  ],
};

const CATHEDRAL_VIDEO =
  "https://res.cloudinary.com/drikcqdzp/video/upload/w_640,q_auto,f_auto/ephtech/videos/cathedral.mp4";

const siteWorkTeaser = [
  {
    image: images.heroInstall,
    alt: "Illustrative interior with a finished linear ceiling, concealed lighting and a panel wall.",
    caption: "Linear ceilings",
  },
  {
    image: images.mediaWall,
    alt: "Illustrative interior with a media wall, TV recess, shelving and concealed lighting.",
    caption: "Media walls",
  },
];

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroImage video />

      {/* ---------------- trust band ---------------- */}
      <section aria-label="Why Ephtech" className="border-y border-line bg-paper-2">
        <div className="shell py-2 sm:grid sm:grid-cols-3 sm:gap-10 sm:py-6">
          {[
            {
              label: "Accountability",
              title: "One supplier. One installer. One contract.",
              body: "Specified, supplied and installed by one team.",
            },
            {
              label: "Coverage",
              title: "Lagos, Owerri and Aba",
              body: "Dispatch and technical support from all three branches, with nationwide delivery.",
            },
            {
              label: "System",
              title: "Board, grid and jointing compound",
              body: "Supplied as one system so nothing is missing on site.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border-b border-line py-4 last:border-b-0 sm:border-b-0 sm:py-0"
            >
              <span className="mono block text-[9px] tracking-[0.16em] uppercase text-muted">
                {item.label}
              </span>
              <p className="mt-2 font-display text-[17px] font-medium tracking-[-0.02em]">
                {item.title}
              </p>
              <p className="mt-1.5 hidden text-[13px] leading-relaxed text-muted sm:block">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- product + work rail ---------------- */}
      <WorkRail />

      {/* ---------------- problem + comparison ---------------- */}
      <section id="problem" className="section scroll-mt-24">
        <div className="shell">
          <Comparison />
        </div>
      </section>

      {/* ---------------- board overview ---------------- */}
      <section id="board" className="section scroll-mt-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-8">
            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
              <span className="eyebrow text-muted" data-reveal>
                02: The board
              </span>
              <h2 className="h2 mt-5" data-reveal>
                The board,
                <br />
                up close.
              </h2>
              <p className="body-lg mt-6 max-w-md" data-reveal>
                Ephtech Board is a dry, factory-finished, impact-resistant system that replaces wet
                POP, plasterboard and fragile gypsum. The result is a ceiling that stays flat, holds
                its edge and survives the climate it was built for.
              </p>
            </div>

            <div
              className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1"
              data-reveal
            >
              <BoardMediaCarousel />
            </div>

            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
              <div>
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    data-reveal
                    className="grid grid-cols-[auto_1fr] gap-4 border-t border-line py-5"
                  >
                    <span className="mono pt-1 text-[10px] tracking-[0.14em] text-muted">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium tracking-[-0.025em]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-muted">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="mono mt-5 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted"
                data-reveal
              >
                {confirmedSpecs.map((spec) => `${spec.label}: ${formatSpec(spec)}`).join(" · ")}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3" data-reveal>
                <QuoteButton className="btn btn-primary" message={WHATSAPP_MESSAGES.system}>
                  Request a quote
                  <WhatsApp className="h-4 w-4" />
                </QuoteButton>
                <Link href="/board" className="link-underline text-[13px] font-medium">
                  See the full system
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- built on site (teaser) ---------------- */}
      <section id="site-work" className="section scroll-mt-24 bg-paper-2">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">03: Built on site</span>
              <h2 className="h2 mt-4">The finish, up close.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              A completed cathedral ceiling, plus ceiling and joinery details from the same dry
              system.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">Recent project</span>
              <h3 className="h3 mt-3 max-w-lg">A cathedral ceiling, set out in grid.</h3>
              <p className="body-lg mt-4 max-w-md">
                A suspended grid with a feature cross, finished in a church interior. The same
                board system, specified and installed by one team.
              </p>
              <p className="mono mt-5 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted">
                Suspended grid · Feature cross · Paint-ready finish
              </p>
            </div>

            <figure className="lg:col-span-5" data-reveal>
              <div className="media relative aspect-[3/4]">
                <RailVideo
                  src={CATHEDRAL_VIDEO}
                  poster={cathedralCeiling.src}
                  label="Completed cathedral ceiling with a suspended grid and a feature cross."
                  startAt={10}
                />
                <span className="mono absolute top-3 left-3 bg-amber px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-forest">
                  Completed installation
                </span>
              </div>
              <figcaption className="mono mt-3 text-[8.5px] tracking-[0.14em] uppercase text-muted">
                Cathedral ceiling · Suspended grid with feature cross
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2" data-reveal-group>
            {siteWorkTeaser.map((item) => (
              <figure key={item.caption}>
                <div className="media relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    placeholder="blur"
                    className="photo-grade object-cover"
                  />
                </div>
                <figcaption className="mono mt-3 text-[8.5px] tracking-[0.14em] uppercase text-muted">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mono mt-6 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted">
            Completed installation filmed on site. Supporting interiors are illustrative.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <Link href="/projects" className="btn btn-ghost justify-center">
              See all site work
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <QuoteButton className="link-underline shrink-0 text-[13px] font-medium">
              Discuss a project
              <WhatsApp className="h-3.5 w-3.5" />
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* ---------------- one team (summary) ---------------- */}
      <section id="services" className="section scroll-mt-24 bg-forest text-paper">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-amber/80">04: One team, start to finish</span>
              <h2 className="h2 mt-5 text-paper">
                One team from specification to handover.
              </h2>
            </div>
            <div className="lg:col-span-5" data-reveal>
              <p className="body-lg text-paper/55">
                The board is the core. The wider divisions below are delivered by the same team,
                under one contract and one programme.
              </p>
              <p className="mono mt-4 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-paper/45">
                Civil engineers · Quantity surveyors · Interior finishing specialists
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {services.map((service) => (
              <div key={service.index} className="border-t border-paper/12 py-5">
                <span className="mono text-[9px] tracking-[0.14em] text-amber/60">
                  {service.index}
                </span>
                <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.025em]">
                  {service.title}
                </h3>
                <p className="mono mt-2 text-[8.5px] leading-relaxed tracking-[0.1em] uppercase text-paper/50">
                  {service.deliverables.join(" · ")}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-paper/12 pt-6" data-reveal>
            <QuoteButton className="btn btn-primary">
              Request a quote
              <WhatsApp className="h-4 w-4" />
            </QuoteButton>
            <Link href="/services" className="link-underline text-[13px] font-medium text-paper">
              Explore all six divisions
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- faq (short) ---------------- */}
      <section id="faq" className="section scroll-mt-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow text-muted">05: Questions</span>
              <h2 className="h2 mt-5">Before you specify.</h2>
              <p className="body-lg mt-5 max-w-sm">
                Straight answers on delivery, samples, installation and pricing.
              </p>
            </div>
            <div className="lg:col-span-8">
              {homeFaqs.map((faq) => (
                <details key={faq.q} className="group border-t border-line py-5" data-reveal>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-medium tracking-[-0.025em] [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <Plus className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">{faq.a}</p>
                </details>
              ))}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link href="/board#faq" className="link-underline text-[13px] font-medium">
                    All questions
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link href="/contact" className="link-underline text-[13px] font-medium">
                    Ask something else
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <QuoteButton className="btn btn-primary">
                  Request a quote
                  <WhatsApp className="h-4 w-4" />
                </QuoteButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- branches + quote ---------------- */}
      <section id="contact" className="section scroll-mt-24">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">06: Where we are</span>
              <h2 className="h2 mt-5">Three branches. One standard.</h2>
            </div>
            <p className="body-lg lg:col-span-5" data-reveal>
              Dispatch and technical support from Lagos (South-West), Owerri and Aba (South-East),
              with delivery scheduled to site nationwide.
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

      {/* ---------------- closing quote ---------------- */}
      <section id="quote" aria-label="Request a quote" className="section pt-0">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">Next step</span>
              <h2 className="h2 mt-4">
                Specify it once.
                <br />
                Build it right.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                Send drawings for a material take-off, or download the company profile and compare
                the system yourself.
              </p>
              <p className="mono mt-5 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-forest/55">
                Send drawings · Receive a take-off · Dispatch or install
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4" data-reveal>
              <QuoteButton className="btn btn-dark w-full">
                Request a quote
                <WhatsApp className="h-4 w-4" />
              </QuoteButton>
              <a
                href="/ephtech-company-profile.pdf"
                download
                className="btn btn-ghost w-full border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-paper"
              >
                Download profile
                <Download className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
