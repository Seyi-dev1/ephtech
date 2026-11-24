import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { chapters, companyProcess, servicesByChapter } from "@/lib/company";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eight integrated services across five chapters: design and building projects, road construction, ceilings and wall systems, interior finishing, building materials, importation, real estate and landscaping.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="Services · 5 chapters · 8 services"
        title="One company. Every stage."
        lede="Ephtech International plans, builds, finishes, supplies and develops. The same accountable team can carry a project from the first brief to the final landscape detail."
        note="Project photography is client-supplied. Online images are illustrative and marked as such."
      />

      <nav aria-label="Service chapters" className="border-b border-line bg-paper">
        <div className="shell flex flex-wrap gap-x-6 gap-y-2 py-4">
          {chapters.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="mono text-[9px] tracking-[0.14em] uppercase text-muted transition-colors hover:text-forest"
            >
              {chapter.index} {chapter.name}
            </a>
          ))}
        </div>
      </nav>

      <section className="section">
        <div className="shell">
          <div className="mb-12 grid gap-5 border-b border-line pb-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">The chapters</span>
              <h2 className="h2 mt-4">The whole build, under one name.</h2>
            </div>
            <p className="body-lg lg:col-span-5" data-reveal>
              Not every project needs every chapter. Every project gets the same standard of
              coordination, documentation and site discipline.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {chapters.map((chapter, chapterIndex) => {
              const chapterServices = servicesByChapter(chapter.id);
              const imageFirst = chapterIndex % 2 === 0;
              return (
                <section
                  key={chapter.id}
                  id={chapter.id}
                  className="scroll-mt-24 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12"
                >
                  <div
                    className={`lg:col-span-6 ${imageFirst ? "" : "lg:order-2"}`}
                    data-reveal
                  >
                    <div className="media relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={chapter.image}
                        alt={chapter.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        placeholder="blur"
                        className="photo-grade object-cover"
                      />
                      <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                        {chapter.index} / {chapter.name}
                      </span>
                      <span className="mono absolute right-3 bottom-3 bg-forest/80 px-2 py-1 text-[7.5px] tracking-[0.12em] uppercase text-paper/80">
                        {chapter.id === "build" ? "Illustrative image" : "Client work"}
                      </span>
                    </div>
                    <p className="mono mt-3 text-[8px] leading-relaxed tracking-[0.12em] uppercase text-muted">
                      {chapter.summary}
                    </p>
                  </div>

                  <div className={`lg:col-span-6 ${imageFirst ? "" : "lg:order-1"}`}>
                    <div data-reveal>
                      <span className="eyebrow text-muted">Chapter {chapter.index}</span>
                      <h2 className="h2 mt-3">{chapter.title}</h2>
                    </div>

                    <div className="mt-7">
                      {chapterServices.map((service, index) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-line py-5 transition-colors hover:bg-paper-2/60"
                        >
                          <span className="mono pt-1 text-[10px] tracking-[0.14em] text-muted">
                            0{index + 1}
                          </span>
                          <div>
                            <h3 className="font-display text-xl font-medium tracking-[-0.025em]">
                              {service.title}
                            </h3>
                            <p className="mt-1.5 max-w-lg text-[13px] leading-relaxed text-muted">
                              {service.summary}
                            </p>
                          </div>
                          <ArrowUpRight className="mt-1 h-4 w-4 text-muted transition-colors group-hover:text-forest" />
                        </Link>
                      ))}
                      <div className="border-t border-line pt-4">
                        <Link
                          href={`/services/${chapterServices[0].slug}`}
                          className="link-underline text-[12px] font-medium"
                        >
                          Explore {chapter.name.toLowerCase()}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-forest text-paper">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-amber/80">How we work</span>
              <h2 className="h2 mt-5 text-paper">One team. Five stages. No hand-offs.</h2>
            </div>
            <p className="body-lg lg:col-span-5 text-paper/55" data-reveal>
              The same company can carry the brief, the build, the finish and the final handover.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5" data-reveal-group>
            {companyProcess.map((step) => (
              <div key={step.index} className="border-t border-paper/12 pt-4">
                <span className="mono text-[9px] tracking-[0.14em] uppercase text-amber/60">
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
              Start a project
              <WhatsApp className="h-4 w-4" />
            </QuoteButton>
            <Link href="/projects" className="link-underline text-[13px] font-medium text-paper">
              See the work
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">Not sure where to start?</span>
              <h2 className="h2 mt-4">
                Tell us what you are building.
                <br />
                We will find the right chapter.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                Send a brief, a drawing or a site address. We will confirm the scope, the right
                team and the next step.
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
