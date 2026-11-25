"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import { ArrowRight } from "@/components/icons";

export type ServiceGalleryItem = {
  image: StaticImageData;
  alt: string;
  note: "Completed work" | "Illustrative image";
};

type Props = {
  items: ServiceGalleryItem[];
  serviceTitle: string;
};

export default function ServiceGalleryCarousel({ items, serviceTitle }: Props) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const activeItem = items[active];

  const step = (delta: number) => {
    setActive((current) => (current + delta + items.length) % items.length);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    }
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null) return;
    const delta = (event.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(delta) > 44) step(delta < 0 ? 1 : -1);
  };

  if (!activeItem) return null;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-line pb-3">
        <div
          className="flex flex-wrap gap-x-5 gap-y-2"
          role="group"
          aria-label="Choose a gallery example"
        >
          {items.map((item, index) => (
            <button
              key={`${item.alt}-${index}`}
              type="button"
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              className={`mono border-b pb-1 text-left text-[10px] tracking-[0.14em] uppercase transition-colors ${
                active === index
                  ? "border-amber font-medium text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              <span className="mr-1.5 opacity-50">0{index + 1}</span>
              Example
            </button>
          ))}
        </div>
        <span className="mono text-[9px] tracking-[0.14em] text-muted">
          {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div
        id="service-gallery-panel"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${serviceTitle} gallery`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="group relative mt-3 touch-pan-y overflow-hidden border border-line bg-paper-2 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      >
        <div className="relative h-[clamp(320px,52vw,600px)]">
          <div
            className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
            style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
          >
            {items.map((item, index) => (
              <div
                key={`${item.alt}-${index}`}
                className="relative h-full w-full shrink-0"
                aria-hidden={active !== index}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  className="photo-grade object-cover"
                />
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  {item.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => step(-1)}
          className="absolute top-1/2 left-3 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/85 text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper sm:left-4"
          aria-label="Previous example"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          className="absolute top-1/2 right-3 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/85 text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper sm:right-4"
          aria-label="Next example"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span
          aria-live="polite"
          aria-atomic="true"
          className="mono text-[10px] tracking-[0.14em] uppercase text-muted sm:text-[8px]"
        >
          {activeItem.note} · {serviceTitle}
        </span>
        <div className="flex items-center gap-1.5">
          {items.map((item, index) => (
            <button
              key={`${item.alt}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show example ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === index ? "w-6 bg-amber" : "w-1.5 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
