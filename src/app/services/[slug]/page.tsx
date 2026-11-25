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

  const related = companyServices.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main id="main" className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-2">
        <div className="shell pt-[clamp(128px,17vh,184px)] pb-[clamp(48px,7vw,88px)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/services"
              className="mono text-[10px] tracking-[0.16em] uppercase text-muted transition-colors hover:text-forest"
            >
              ← All services
            </Link>
            <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
              Ephtech / Services
            </span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="flex flex-col lg:col-span-7">
              <span className="eyebrow block text-muted">Ephtech service</span>
              <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[0.95] font-medium tracking-[-0.045em]">
                {service.title}
              </h1>
              <p className="body-lg mt-6 max-w-2xl">{service.summary}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <QuoteButton className="btn btn-primary">
                  Discuss this service
                  <WhatsApp className="h-3.5 w-3.5" />
                </QuoteButton>
                <Link href="/projects" className="link-underline text-[13px] font-medium">
                  See our work
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <figure className="lg:col-span-5">
              <div className="media relative aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  placeholder="blur"
                  className="photo-grade object-cover"
                />
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  {service.imageNote}
                </span>
              </div>
              <figcaption className="mono mt-3 text-[8px] tracking-[0.14em] uppercase text-muted">
                {service.title} · Ephtech International
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow text-muted">The service</span>
              <p className="body-lg mt-4">{service.description}</p>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <div className="flex items-end justify-between border-b border-line pb-3">
                <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
                  What it covers
                </span>
                <span className="mono text-[8px] tracking-[0.12em] uppercase text-muted">
                  Scope
                </span>
              </div>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {service.capabilities.map((capability, index) => (
                  <div key={capability} className="border-b border-line py-4">
                    <span className="mono text-[8px] tracking-[0.12em] text-muted">
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink">{capability}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-paper-2">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-muted">Examples</span>
              <h2 className="h2 mt-4">A closer look.</h2>
            </div>
            <p className="body-lg lg:col-span-5" data-reveal>
              Representative examples of the work. Client work is labelled; stock imagery is
              marked illustrative.
            </p>
          </div>

          <div className="mt-10" data-reveal>
            <ServiceGalleryCarousel items={service.gallery} serviceTitle={service.title} />
          </div>
        </div>
      </section>

      <section className="section border-b border-line bg-forest text-paper">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-reveal>
              <span className="eyebrow text-amber/80">What good looks like</span>
              <h2 className="h2 mt-4 text-paper">The outcome, not just the scope.</h2>
            </div>
            <p className="body-lg lg:col-span-5 text-paper/55" data-reveal>
              The work is judged by what is left behind: a clean finish, a clear handover and a
              space that holds up in use.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3" data-reveal-group>
            {service.outcomes.map((outcome, index) => (
              <div key={outcome} className="border-t border-paper/20 pt-4">
                <span className="mono text-[8.5px] tracking-[0.14em] text-amber/80">
                  0{index + 1}
                </span>
                <p className="mt-3 font-display text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.12] tracking-[-0.025em] text-paper">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-4" data-reveal>
              <span className="eyebrow text-muted">How we work</span>
              <h2 className="h2 mt-4">One team. Clear scope.</h2>
              <p className="body-lg mt-5">
                This service can stand alone or sit inside a wider Ephtech scope. The work is
                agreed before mobilisation.
              </p>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8" data-reveal>
              {companyPrinciples.map((principle, index) => (
                <div key={principle.title} className="border-t border-line py-4">
                  <span className="mono text-[8px] tracking-[0.12em] text-muted">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.025em]">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{principle.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section border-t border-line bg-paper-2">
          <div className="shell">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div data-reveal>
                <span className="eyebrow text-muted">Related services</span>
                <h2 className="h2 mt-4">Other services.</h2>
              </div>
              <Link href="/services" className="link-underline text-[13px] font-medium" data-reveal>
                All services
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
              {related.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="group block">
                  <div className="media relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      className="photo-grade object-cover"
                    />
                    <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                      {item.imageNote}
                    </span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3 border-t border-line pt-3">
                    <h3 className="font-display text-xl font-medium tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-forest" />
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{item.cardSummary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="shell">
          <div className="grid gap-8 bg-forest p-6 text-paper sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-amber/80">Next step</span>
              <h2 className="h2 mt-4 text-paper">
                Tell us about
                <br />
                the project.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/60">
                Send a brief, drawing or site address. We will confirm the scope and the right team.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4" data-reveal>
              <QuoteButton className="btn btn-primary w-full" message={WHATSAPP_MESSAGES.general}>
                Discuss a project
                <WhatsApp className="h-4 w-4" />
              </QuoteButton>
              <Link
                href="/contact"
                className="btn btn-ghost w-full border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-forest"
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
