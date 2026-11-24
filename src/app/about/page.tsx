import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import teamSite from "@/assets/images/team-site.jpg";
import workBuild from "@/assets/images/work-build.jpg";
import { branches } from "@/lib/data";
import { companyPrinciples, companyServices, companyStats } from "@/lib/company";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import NigeriaMap from "@/components/nigeria-map";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import { ArrowRight, ArrowUpRight, Phone, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ephtech International Limited is a multi-disciplinary construction, interiors, property and materials company operating across Lagos, Owerri and Aba.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="About Ephtech"
        title="One company. One standard."
        lede="Ephtech International Limited is a multi-disciplinary construction, building materials and interior finishing company. We plan, build, finish, supply and develop — with one accountable team across Lagos, Owerri and Aba."
        note={`${companyStats.rc} · ${companyStats.branches}`}
      />

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow text-muted">Who we are</span>
              <h2 className="h2 mt-4">Building a better tomorrow.</h2>
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
                <QuoteButton className="link-underline text-[13px] font-medium">
                  Start a project
                  <WhatsApp className="h-3.5 w-3.5" />
                </QuoteButton>
              </div>
            </div>

            <figure className="lg:col-span-7" data-reveal>
              <div className="media relative aspect-[16/10] overflow-hidden">
                <Image
                  src={teamSite}
                  alt="Ephtech team on a construction site."
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  placeholder="blur"
                  className="photo-grade object-cover"
                />
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  One team · Client site
                </span>
              </div>
              <figcaption className="mono mt-3 text-[8px] tracking-[0.14em] uppercase text-muted">
                Site coordination · Design, construction and finishing under one company.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section bg-paper-2">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">What we cover</span>
              <h2 className="h2 mt-4">Eight services. One company.</h2>
            </div>
            <p className="body-lg lg:col-span-5" data-reveal>
              Choose a single service or bring us in across the whole project. The scope changes;
              the accountability does not.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-2 sm:grid-cols-2" data-reveal-group>
            {companyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start justify-between gap-4 border-t border-line py-4"
              >
                <div>
                  <h3 className="font-display text-xl font-medium tracking-[-0.025em]">
                    {service.title}
                  </h3>
                  <p className="mt-1 max-w-lg text-[12.5px] leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-forest" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <figure className="lg:col-span-5" data-reveal>
              <div className="media relative aspect-[4/5] overflow-hidden">
                <Image
                  src={workBuild}
                  alt="Building under construction with columns, blockwork and formwork."
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  placeholder="blur"
                  className="photo-grade object-cover"
                />
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  Client site
                </span>
              </div>
            </figure>
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">How we work</span>
              <h2 className="h2 mt-4">The brief stays connected to the work.</h2>
              <p className="body-lg mt-6">
                We scope the services your project actually needs, then keep the same team close
                to the work from brief to handover.
              </p>
              <div className="mt-8">
                {companyPrinciples.map((principle) => (
                  <div key={principle.title} className="border-t border-line py-4">
                    <h3 className="font-display text-lg font-medium tracking-[-0.02em]">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>
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
