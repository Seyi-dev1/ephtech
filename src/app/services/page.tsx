import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { process, services } from "@/lib/data";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import { ArrowUpRight, Phone, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six integrated divisions: building materials, interior finishing, general contracting, civil engineering, quantity surveying and real estate development.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="04: One team, start to finish"
        title="One team from specification to handover."
        lede="The board is the core. The wider divisions below are delivered by the same team, under one contract and one programme, so responsibility never changes hands mid-project."
        note="Civil engineers · Quantity surveyors · Interior finishing specialists"
      />

      {/* ---------------- divisions ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">Six integrated divisions</span>
              <h2 className="h2 mt-4">What one team covers.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              From the first take-off to the final handover, the same company carries the
              specification, the supply and the installation.
            </p>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2" data-reveal-group>
            {services.map((service) => (
              <article key={service.index}>
                <div className="media relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={`Illustrative image for ${service.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    placeholder="blur"
                    className="photo-grade object-cover"
                  />
                  <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                    Division {service.index}
                  </span>
                </div>
                <div className="mt-4 border-t border-line pt-3">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.03em]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{service.scope}</p>
                  <p className="mono mt-3 text-[8.5px] leading-relaxed tracking-[0.1em] uppercase text-muted">
                    {service.deliverables.join(" · ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- process ---------------- */}
      <section className="section border-y border-line bg-forest text-paper">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-amber/80">How we work</span>
              <h2 className="h2 mt-5 text-paper">
                Five steps. No hand-offs.
              </h2>
            </div>
            <p className="body-lg lg:col-span-5 text-paper/55" data-reveal>
              Each stage is agreed before mobilisation, so the programme, the cost and the finish
              are clear from the start.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5" data-reveal-group>
            {process.map((step) => (
              <div key={step.index} className="border-t border-paper/12 pt-4">
                <span className="mono text-[9px] tracking-[0.14em] uppercase text-paper/45">
                  {step.index}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-paper/55">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-paper/12 pt-6" data-reveal>
            <QuoteButton className="btn btn-primary">
              Request a quote
              <WhatsApp className="h-4 w-4" />
            </QuoteButton>
            <Link href="/projects" className="link-underline text-[13px] font-medium text-paper">
              See work on site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- closing cta ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">One contract</span>
              <h2 className="h2 mt-4">
                One team.
                <br />
                One point of accountability.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                Tell us what you are building. We will confirm the scope, the programme and the
                right division to lead it.
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
                <Phone className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
