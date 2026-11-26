"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/icons";

export type IntroCarouselItem = {
  src: string;
  alt: string;
  note?: string;
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3 translate-x-px">
      <path d="M8 5.14v13.72L19 12 8 5.14Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3">
      <path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" />
    </svg>
  );
}

export default function IntroCarousel({
  items,
  interval = 4500,
}: {
  items: IntroCarouselItem[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(media.matches);
      if (media.matches) setAutoplay(false);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const isPlaying = autoplay && !reduced && !hovered && !focused;

  useEffect(() => {
    if (!isPlaying || items.length < 2) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setActive((current) => (current + 1) % items.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [isPlaying, items.length, interval]);

  const step = (delta: number) => {
    setActive((current) => (current + delta + items.length) % items.length);
  };

  const activeItem = items[active];

  return (
    <div
      className="group relative h-full w-full overflow-hidden border border-line bg-stone"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected Ephtech work"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      {items.map((item, index) => (
        <div
          key={`${item.src}-${index}`}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="photo-grade object-cover"
          />
        </div>
      ))}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/65 via-transparent to-transparent"
        aria-hidden="true"
      />

      <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
        {activeItem.note ?? "Ephtech work"}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
        <div className="min-w-0">
          <span
            className="mono block text-[8px] tracking-[0.14em] uppercase text-paper/65"
            aria-live="polite"
            aria-atomic="true"
          >
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <p className="mt-1 truncate font-display text-sm font-medium tracking-[-0.01em] text-paper">
            Ephtech International
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {!reduced ? (
            <button
              type="button"
              onClick={() => setAutoplay((current) => !current)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-paper/30 bg-forest/35 text-paper backdrop-blur-sm transition-colors hover:border-paper hover:bg-paper hover:text-forest"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
          ) : null}

          <div className="flex items-center gap-1.5">
            {items.map((item, index) => (
              <button
                key={`dot-${item.src}-${index}`}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show image ${index + 1} of ${items.length}`}
                aria-current={active === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index ? "w-5 bg-amber" : "w-1.5 bg-paper/45 hover:bg-paper/80"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => step(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-paper/30 bg-forest/35 text-paper backdrop-blur-sm transition-colors hover:border-paper hover:bg-paper hover:text-forest"
            aria-label="Next image"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
