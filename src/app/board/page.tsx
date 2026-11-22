import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { applications, sectors } from "@/lib/applications";
import { faqs } from "@/lib/faqs";
import { confirmedSpecs, formatSpec, pillars, product } from "@/lib/product";
import {
  WHATSAPP_MESSAGES,
  whatsappHref,
} from "@/lib/whatsapp";
import BoardMediaCarousel from "@/components/board-media-carousel";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import SystemComponents from "@/components/system-components";
import { ArrowUpRight, Download, Plus, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "The Ephtech Board",
  description:
    "The dry, factory-finished alternative to POP and gypsum. Explore the Ephtech Board system, its components, applications and specification.",
  alternates: { canonical: "/board" },
};

export default function BoardPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="02: The board"
        title={
          <>
            The board,
            <br />
            up close.
          </>
        }
        lede="Ephtech Board is a dry, factory-finished, impact-resistant system that replaces wet POP, plasterboard and fragile gypsum. The result is a ceiling that stays flat, holds its edge and survives the climate it was built for."
        note="Photography is illustrative. Full dimensional schedule is issued with your quotation."
      />

      {/* ---------------- board + pillars ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow text-muted" data-reveal>
                Why it performs
              </span>
              <h2 className="h2 mt-5" data-reveal>
                Engineered,
                <br />
                not improvised.
              </h2>

              <div className="mt-10">
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
            </div>

            <div className="lg:col-span-7" data-reveal>
              <BoardMediaCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- system components ---------------- */}
      <section className="section border-y border-line bg-paper-2">
        <div className="shell">
          <SystemComponents />
        </div>
      </section>

      {/* ---------------- applications ---------------- */}
      <section id="applications" className="section scroll-mt-24">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">Where it goes</span>
              <h2 className="h2 mt-4">Multiple uses. One dry system.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              Ceilings, walls, wet areas and joinery, plus the sectors where the board is specified
              every day.
            </p>
          </div>

          <div
            className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
            data-reveal-group
          >
            {applications.map((application) => (
              <article key={application.id} className="group">
                <div className="media relative aspect-[4/3]">
                  <Image
                    src={application.image}
                    alt={application.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    className="photo-grade object-cover"
                  />
                  <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                    {application.category}
                  </span>
                </div>
                <div className="mt-4 border-t border-line pt-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.03em]">
                      {application.title}
                    </h3>
                    <span className="mono mt-1 text-[8.5px] tracking-[0.14em] text-muted">
                      {application.index}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {application.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-3 border-t border-line pt-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
            <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
              Also specified in
            </span>
            <p className="text-[13px] leading-relaxed text-muted">{sectors.join(" · ")}</p>
          </div>
        </div>
      </section>

      {/* ---------------- specification ---------------- */}
      <section id="specification" className="section scroll-mt-24 border-y border-line bg-paper-2">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow text-muted">Specification</span>
              <h2 className="h2 mt-4">
                Confirmed,
                <br />
                not assumed.
              </h2>
              <p className="body-lg mt-5 max-w-md">
                Only verified figures are published here. The full schedule is issued with your
                quotation and material take-off.
              </p>
              <a
                href="/ephtech-company-profile.pdf"
                download
                className="link-underline mt-6 inline-flex text-[13px] font-medium"
              >
                Download company profile
                <Download className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-line">
                {confirmedSpecs.map((spec) => (
                  <div
                    key={spec.key}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-5"
                    data-reveal
                  >
                    <span className="mono text-[9px] tracking-[0.14em] uppercase text-muted">
                      {spec.label}
                    </span>
                    <span className="font-display text-xl font-medium tracking-[-0.02em]">
                      {formatSpec(spec)}
                    </span>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-6 border-b border-line py-5" data-reveal>
                  <span className="mono text-[9px] tracking-[0.14em] uppercase text-muted">
                    Category
                  </span>
                  <span className="max-w-[60%] text-right font-display text-xl font-medium tracking-[-0.02em]">
                    {product.category}
                  </span>
                </div>
              </div>
              <p className="mono mt-5 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted">
                Panel dimensions and thickness are confirmed in writing before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- faq ---------------- */}
      <section id="faq" className="section scroll-mt-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow text-muted">Questions</span>
              <h2 className="h2 mt-5">Before you specify.</h2>
              <p className="body-lg mt-5 max-w-sm">
                Straight answers on delivery, samples, installation, pricing and coverage.
              </p>
            </div>
            <div className="lg:col-span-8">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-t border-line py-5" data-reveal>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-medium tracking-[-0.025em] [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <Plus className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">{faq.a}</p>
                </details>
              ))}
              <div className="border-t border-line pt-5">
                <Link href="/contact" className="link-underline text-[13px] font-medium">
                  Ask something else
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- closing cta ---------------- */}
      <section className="section pt-0">
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
                Send drawings for a material take-off, or request a sample and compare the system
                yourself.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4" data-reveal>
              <QuoteButton className="btn btn-dark w-full" message={WHATSAPP_MESSAGES.system}>
                Request the system
                <WhatsApp className="h-4 w-4" />
              </QuoteButton>
              <a
                href={whatsappHref(WHATSAPP_MESSAGES.sample)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-full border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-paper"
              >
                Ask for a sample
                <WhatsApp className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
