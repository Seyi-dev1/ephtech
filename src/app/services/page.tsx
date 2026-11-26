import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { companyPrinciples, companyServices } from "@/lib/company";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services from Ephtech International across design and building, road construction, interior finishing, building materials, importation, real estate and landscaping.",
  alternates: { canonical: "/services" },
};

const introMedia = [
  {
    src: "/media/finish-interiors/04.jpg",
    alt: "Completed office interior with a suspended ceiling and wall panels.",
    note: "Completed work",
  },
  {
    src: "/media/finish-interiors/02.jpg",
    alt: "Finished living room with a panel wall and a white ceiling.",
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
  {
    src: "/media/finish-interiors/01.jpg",
    alt: "Suspended ceiling with a concealed blue light cove.",
    note: "Completed work",
  },
];

export default function ServicesPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="Design, build, supply and property"
        label="Services"
        title="The services we deliver."
        lede="Ephtech International works across seven service divisions: design and building projects, interior finishing, road construction, building materials supply, importation of modern materials, real estate and landscaping. Use one service on its own, or combine several under one team and one scope. Work is delivered from our Lagos, Owerri and Aba branches, with the same standard of coordination from first brief to handover."
        carousel={introMedia}
      />

      <section className="section">
        <div className="shell">
          <div className="mb-10 grid gap-5 border-b border-line pb-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">What we do</span>
              <h2 className="h2 mt-4">One company. A full range.</h2>
            </div>
            <p className="body-lg lg:col-span-5" data-reveal>
              Most clients start with one service and add others as the project grows. You are not
              committing to a fixed sequence.
            </p>
          </div>

          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2" data-reveal-group>
            {companyServices.map((service) => (
              <article key={service.slug}>
                <Link href={`/services/${service.slug}`} className="group block">
                  <div className="media relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      placeholder="blur"
                      className="photo-grade object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                      {service.imageNote}
                    </span>
                  </div>
                  <div className="mt-4 border-t border-line pt-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-2xl font-medium tracking-[-0.03em]">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="mt-1.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-forest" />
                    </div>
                    <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-muted">
                      {service.summary}
                    </p>
                    <p className="mono mt-3 text-[8px] leading-relaxed tracking-[0.1em] uppercase text-muted">
                      {service.capabilities.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-paper-2">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">No fixed package</span>
              <h2 className="h2 mt-4">Choose the services your project needs.</h2>
              <p className="body-lg mt-5 max-w-lg">
                A client may need a single ceiling installation, a material supply, a road or a
                complete building. We scope the work that is actually required and leave the rest
                open.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9" data-reveal>
              <p className="mono text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted">
                One service or several. Same standard.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <QuoteButton className="btn btn-primary w-full" message={WHATSAPP_MESSAGES.general}>
                  Discuss your scope
                  <WhatsApp className="h-4 w-4" />
                </QuoteButton>
                <Link href="/projects" className="btn btn-ghost w-full">
                  See the work
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow text-muted">What you can expect</span>
              <h2 className="h2 mt-4">One team. Clear scope. No hand-offs.</h2>
              <p className="body-lg mt-5">
                The same company can carry the brief, the build, the finish and the supply — or
                step in for a single service.
              </p>
            </div>
            <div className="lg:col-span-7" data-reveal>
              {companyPrinciples.map((principle) => (
                <div key={principle.title} className="border-t border-line py-4 last:border-b">
                  <h3 className="font-display text-xl font-medium tracking-[-0.025em]">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{principle.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">Next step</span>
              <h2 className="h2 mt-4">
                Tell us what you are building.
                <br />
                We will scope the right services.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                Send a brief, a drawing or a site address. We will confirm the scope and the next
                step.
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
