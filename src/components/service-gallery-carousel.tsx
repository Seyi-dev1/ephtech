"use client";

import Image, { type StaticImageData } from "next/image";
import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const groupWidthRef = useRef(1);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const pointerIdRef = useRef<number | null>(null);

  const slides = [...items, ...items, ...items, ...items];

  const applyOffset = () => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const wrapOffset = () => {
    const group = groupWidthRef.current || 1;
    while (offsetRef.current <= -group) offsetRef.current += group;
    while (offsetRef.current > 0) offsetRef.current -= group;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      groupWidthRef.current = track.scrollWidth / 4 || 1;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    let frame = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tick = () => {
      if (!draggingRef.current && !reduced.matches) {
        offsetRef.current -= 0.65;
        wrapOffset();
        applyOffset();
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    lastXRef.current = event.clientX;
    pointerIdRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const delta = event.clientX - lastXRef.current;
    lastXRef.current = event.clientX;
    offsetRef.current += delta;
    wrapOffset();
    applyOffset();
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (pointerIdRef.current !== null && event.currentTarget.hasPointerCapture(pointerIdRef.current)) {
      event.currentTarget.releasePointerCapture(pointerIdRef.current);
    }
    pointerIdRef.current = null;
  };

  return (
    <div
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-line bg-paper-2 py-4"
      aria-label={`${serviceTitle} gallery`}
    >
      <div
        ref={trackRef}
        className="service-gallery-track flex w-max cursor-grab touch-pan-y gap-3 select-none active:cursor-grabbing sm:gap-4"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {slides.map((item, index) => (
          <div
            key={`${item.alt}-${index}`}
            className="relative h-64 w-52 shrink-0 overflow-hidden bg-stone sm:h-[30rem] sm:w-[22rem]"
            aria-hidden={index >= items.length ? true : undefined}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 208px, 352px"
              placeholder="blur"
              draggable={false}
              className="pointer-events-none photo-grade object-cover"
            />
            <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
              {item.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
