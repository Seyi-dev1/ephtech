import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companyPrinciples, companyServices, getCompanyService } from "@/lib/company";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import QuoteButton from "@/components/quote-button";
import ServiceGalleryCarousel from "@/components/service-gallery-carousel";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return companyServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getCompanyService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getCompanyService(slug);
  if (!service) notFound();

  const serviceIndex = companyServices.findIndex((item) => item.slug === service.slug) + 1;
  const related = companyServices.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main id="main" className="bg-paper text-ink">
      {/* ---------------- service hero ---------------- */}
      <section className="relative overflow-hidden border-b border-line bg-paper-2">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 55% at 12% 18%, rgba(232,163,61,0.1), transparent 65%)",
          }}
          aria-hidden="true"
        />

        <div className="shell relative z-10">
          <div className="grid gap-8 pt-[clamp(112px,15vh,168px)] lg:grid-cols-12 lg:gap-0">
            <div className="flex flex-col pb-10 lg:col-span-6 lg:py-14 lg:pr-14">
              <nav
                aria-label="Breadcrumb"
                className="mono flex flex-wrap items-center gap-2 text-[9px] tracking-[0.16em] uppercase text-muted"
                data-reveal
              >
                <Link href="/" className="transition-colors hover:text-forest">
                  Ephtech
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/services" className="transition-colors hover:text-forest">
                  Services
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-ink" aria-current="page">
                  {String(serviceIndex).padStart(2, "0")}
                </span>
              </nav>

              <div className="mt-16 lg:mt-auto lg:pt-16">
                <span className="eyebrow text-muted" data-reveal>
                  Service {String(serviceIndex).padStart(2, "0")} of{" "}
                  {String(companyServices.length).padStart(2, "0")}
                </span>
                <h1
                  className="mt-4 max-w-xl font-display text-[clamp(2.5rem,4.6vw,4.2rem)] leading-[0.95] font-medium tracking-[-0.045em] text-balance"
                  data-reveal
                >
                  {service.title}
                </h1>
                <p
                  className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted"
                  data-reveal
                >
                  {service.summary}
                </p>

                <div
                  className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
                  data-reveal
                >
                  <QuoteButton className="btn btn-primary">
                    Discuss this service
                    <WhatsApp className="h-3.5 w-3.5" />
                  </QuoteButton>
                  <Link href="/projects" className="btn btn-ghost">
                    See our work
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div
                className="mono mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-[8.5px] tracking-[0.14em] uppercase text-muted"
                data-reveal
              >
                <span>Lagos, Owerri and Aba</span>
                <span>RC 1216055</span>
              </div>
            </div>

            <div className="relative lg:col-span-6 lg:py-14" data-reveal>
              <div className="media relative aspect-[4/3] overflow-hidden border border-line lg:aspect-auto lg:h-full lg:min-h-[560px]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  className="photo-grade object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  {service.imageNote}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="mono text-[8px] tracking-[0.14em] uppercase text-paper/65">
                    Ephtech International
                  </p>
                  <p className="mt-1 font-display text-lg font-medium tracking-[-0.02em] text-paper">
                    {service.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- outcome rail ---------------- */}
      <section className="border-b border-line bg-paper" aria-label="Service outcomes">
        <div className="shell grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {service.outcomes.map((outcome, index) => (
            <div
              key={outcome}
              className="flex gap-4 py-5 md:px-6 md:first:pl-0 md:last:pr-0"
              data-reveal
            >
              <span className="mono pt-1 text-[9px] tracking-[0.14em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-[clamp(1.05rem,1.4vw,1.3rem)] leading-snug tracking-[-0.02em]">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- overview ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28" data-reveal>
                <span className="eyebrow text-muted">01 / The service</span>
                <h2 className="h2 mt-4">What it covers.</h2>
                <p className="body-lg mt-5 max-w-sm">{service.description}</p>
                <Link
                  href="/contact"
                  className="link-underline mt-6 inline-flex text-[13px] font-medium"
                >
                  Discuss your scope
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8" data-reveal>
              <div className="flex items-end justify-between border-b border-line pb-3">
                <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
                  Scope areas
                </span>
                <span className="mono text-[8px] tracking-[0.12em] uppercase text-muted">
                  {String(service.capabilities.length).padStart(2, "0")} in total
                </span>
              </div>

              <div>
                {service.capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="grid grid-cols-[auto_1fr] items-baseline gap-5 border-b border-line py-5 sm:gap-8 sm:py-6"
                  >
                    <span className="mono text-[9px] tracking-[0.14em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-[clamp(1.15rem,1.9vw,1.6rem)] leading-snug tracking-[-0.02em]">
                      {capability}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- gallery ---------------- */}
      <section className="section border-y border-line bg-paper-2">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">02 / Examples</span>
              <h2 className="h2 mt-4">A closer look.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              Representative examples of the work. Client work is labelled; stock imagery is
              marked illustrative.
            </p>
          </div>
        </div>

        <div className="mt-10" data-reveal>
          <ServiceGalleryCarousel items={service.gallery} serviceTitle={service.title} />
        </div>
      </section>

      {/* ---------------- approach ---------------- */}
      <section className="section bg-forest text-paper">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-amber/80">03 / How we work</span>
              <h2 className="h2 mt-4 text-paper">One team. Clear scope.</h2>
            </div>
            <p className="body-lg lg:col-span-5 text-paper/55" data-reveal>
              This service can stand alone or sit inside a wider Ephtech scope. The work is agreed
              before mobilisation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
            {companyPrinciples.map((principle, index) => (
              <div key={principle.title} className="border-t border-paper/15 pt-4">
                <span className="mono text-[8.5px] tracking-[0.14em] text-amber/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.025em] text-paper">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-paper/55">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- related services ---------------- */}
      {related.length > 0 && (
        <section className="section border-t border-line bg-paper-2">
          <div className="shell">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div data-reveal>
                <span className="eyebrow text-muted">04 / Related services</span>
                <h2 className="h2 mt-4">Other services.</h2>
              </div>
              <Link
                href="/services"
                className="link-underline text-[13px] font-medium"
                data-reveal
              >
                All services
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-10 border-t border-line" data-reveal-group>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group grid grid-cols-[5.5rem_1fr_auto] items-center gap-4 border-b border-line py-4 sm:grid-cols-[7rem_1fr_auto] sm:gap-6 sm:py-5"
                >
                  <div className="media relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="120px"
                      placeholder="blur"
                      className="photo-grade object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-[-0.025em] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 max-w-md text-[12.5px] leading-relaxed text-muted">
                      {item.cardSummary}
                    </p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-paper">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- closing cta ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">Next step</span>
              <h2 className="h2 mt-4">
                Tell us about
                <br />
                the project.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                Send a brief, drawing or site address. We will confirm the scope and the right team.
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
