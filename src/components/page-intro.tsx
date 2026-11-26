import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import IntroCarousel, { type IntroCarouselItem } from "@/components/intro-carousel";

export default function PageIntro({
  eyebrow,
  label,
  title,
  lede,
  note,
  image,
  imageAlt,
  imageNote,
  carousel,
  aside,
}: {
  eyebrow: string;
  label: string;
  title: ReactNode;
  lede?: string;
  note?: string;
  image?: StaticImageData;
  imageAlt?: string;
  imageNote?: string;
  carousel?: IntroCarouselItem[];
  aside?: ReactNode;
}) {
  const hasMedia = Boolean(carousel?.length || image || aside);

  return (
    <section className="border-b border-line bg-paper-2">
      <div className="shell pt-[clamp(112px,15vh,168px)] pb-[clamp(48px,6vw,88px)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <nav
            aria-label="Breadcrumb"
            className="mono flex flex-wrap items-center gap-2 text-[9px] tracking-[0.16em] uppercase text-muted"
          >
            <Link href="/" className="transition-colors hover:text-forest">
              Ephtech
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink" aria-current="page">
              {label}
            </span>
          </nav>
          <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-muted">
            Lagos, Owerri and Aba
          </span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className={hasMedia ? "lg:col-span-7" : "lg:col-span-8"} data-reveal>
            <span className="eyebrow text-muted">{eyebrow}</span>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,5.4vw,4.8rem)] leading-[0.95] font-medium tracking-[-0.045em] text-balance">
              {title}
            </h1>
            {lede ? <p className="body-lg mt-6 max-w-2xl">{lede}</p> : null}
          </div>

          {carousel?.length ? (
            <div
              className="lg:col-span-5 lg:flex lg:h-full lg:min-h-[380px] lg:flex-col"
              data-reveal
            >
              <div className="relative aspect-[4/3] lg:aspect-auto lg:flex-1">
                <IntroCarousel items={carousel} />
              </div>
            </div>
          ) : image ? (
            <figure
              className="lg:col-span-5 lg:flex lg:h-full lg:min-h-[380px] lg:flex-col"
              data-reveal
            >
              <div className="media relative aspect-[4/3] overflow-hidden border border-line lg:aspect-auto lg:flex-1">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  placeholder="blur"
                  className="photo-grade object-cover"
                />
                {imageNote ? (
                  <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                    {imageNote}
                  </span>
                ) : null}
              </div>
              {note ? (
                <figcaption className="mono mt-3 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted">
                  {note}
                </figcaption>
              ) : null}
            </figure>
          ) : aside ? (
            <div className="lg:col-span-5 lg:pt-1" data-reveal>
              {aside}
            </div>
          ) : (
            <aside className="lg:col-span-4 lg:pt-1" data-reveal>
              <div className="border border-line bg-paper">
                <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
                  <span className="mono text-[8.5px] tracking-[0.16em] uppercase text-muted">
                    Section note
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
                </div>
                {note ? (
                  <p className="mono px-5 py-5 text-[9px] leading-relaxed tracking-[0.12em] uppercase text-muted">
                    {note}
                  </p>
                ) : (
                  <p className="px-5 py-5 text-[13px] leading-relaxed text-muted">
                    Ephtech International Limited
                  </p>
                )}
                <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-3">
                  <span className="mono text-[8px] tracking-[0.14em] uppercase text-muted">
                    Ephtech International
                  </span>
                  <span className="mono text-[8px] tracking-[0.14em] uppercase text-muted">
                    RC 1216055
                  </span>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
