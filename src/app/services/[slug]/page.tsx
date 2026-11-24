import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companyPrinciples, companyServices, getCompanyService } from "@/lib/company";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import QuoteButton from "@/components/quote-button";
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

  const related = companyServices
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main id="main" className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-2">
        <div className="shell pt-[clamp(128px,17vh,184px)] pb-[clamp(48px,7vw,88px)]">
          <Link
            href="/services"
            className="mono text-[10px] tracking-[0.16em] uppercase text-muted transition-colors hover:text-forest"
          >
            ← All services
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow block text-muted">Ephtech service</span>
              <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[0.95] font-medium tracking-[-0.045em]">
                {service.title}
              </h1>
              <p className="body-lg mt-6 max-w-2xl">{service.summary}</p>
            </div>
            <div className="lg:col-span-4">
              <div className="border-t border-line pt-4">
                <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
                  {service.imageNote}
                </span>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  Delivered by the Ephtech team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7" data-reveal>
              <div className="media relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  placeholder="blur"
                  className="photo-grade object-cover"
                />
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  {service.imageNote}
                </span>
              </div>
              <p className="mono mt-3 text-[8px] tracking-[0.14em] uppercase text-muted">
                Service · {service.title}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div data-reveal>
                <span className="eyebrow text-muted">The service</span>
                <p className="body-lg mt-4">{service.description}</p>
              </div>

              <div className="mt-8">
                <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
                  What it covers
                </span>
                <ul className="mt-4">
                  {service.capabilities.map((capability, index) => (
                    <li
                      key={capability}
                      className="grid grid-cols-[auto_1fr] gap-3 border-t border-line py-3 text-[13px] leading-relaxed text-ink"
                    >
                      <span className="mono pt-0.5 text-[8px] tracking-[0.12em] text-muted">
                        0{index + 1}
                      </span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-paper-2">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow text-muted">What good looks like</span>
              <h2 className="h2 mt-4">The outcome, not just the scope.</h2>
            </div>
            <div className="lg:col-span-7" data-reveal>
              {service.outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className="grid grid-cols-[auto_1fr] gap-4 border-t border-line py-4 last:border-b"
                >
                  <span className="mono pt-1 text-[9px] tracking-[0.14em] text-muted">
                    0{index + 1}
                  </span>
                  <p className="font-display text-lg font-medium tracking-[-0.02em]">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow text-muted">What you can expect</span>
              <h2 className="h2 mt-4">One team. Clear scope.</h2>
              <p className="body-lg mt-5">
                This service can stand alone or sit inside a wider Ephtech scope. The work is
                agreed before mobilisation.
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

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group border-t border-line pt-4"
                >
                  <span className="mono text-[8px] tracking-[0.12em] uppercase text-muted">
                    Ephtech service
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
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
