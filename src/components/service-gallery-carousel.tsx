"use client";

import Image, { type StaticImageData } from "next/image";
import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

export type ServiceGalleryItem = {
  image: string | StaticImageData;
  alt: string;
  note: "Completed work" | "Illustrative image" | "Client site";
  video?: string;
};

type Props = {
  items: ServiceGalleryItem[];
  serviceTitle: string;
  speed?: number;
};

export default function ServiceGalleryCarousel({ items, serviceTitle, speed = 0.65 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const groupWidthRef = useRef(1);
  const pointerDownRef = useRef(false);
  const draggingRef = useRef(false);
  const videoPlayingRef = useRef(false);
  const lastXRef = useRef(0);
  const pointerIdRef = useRef<number | null>(null);

  const copies = items.length > 10 ? 2 : 4;
  const slides = Array.from({ length: copies }, () => items).flat();

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
      groupWidthRef.current = track.scrollWidth / copies || 1;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    let frame = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tick = () => {
      if (
        !pointerDownRef.current &&
        !draggingRef.current &&
        !videoPlayingRef.current &&
        !reduced.matches
      ) {
        offsetRef.current -= speed;
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
  }, [copies, speed]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerDownRef.current = true;
    draggingRef.current = false;
    lastXRef.current = event.clientX;
    pointerIdRef.current = event.pointerId;
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerDownRef.current) return;
    const delta = event.clientX - lastXRef.current;

    if (!draggingRef.current) {
      if (Math.abs(delta) < 6) return;
      draggingRef.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    lastXRef.current = event.clientX;
    offsetRef.current += delta;
    wrapOffset();
    applyOffset();
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerDownRef.current = false;
    draggingRef.current = false;
    if (pointerIdRef.current !== null && event.currentTarget.hasPointerCapture(pointerIdRef.current)) {
      event.currentTarget.releasePointerCapture(pointerIdRef.current);
    }
    pointerIdRef.current = null;
  };

  const onPointerLeave = () => {
    if (draggingRef.current) return;
    pointerDownRef.current = false;
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
        onPointerLeave={onPointerLeave}
      >
        {slides.map((item, index) => (
          <div
            key={`${item.alt}-${index}`}
            className="relative h-72 w-60 shrink-0 overflow-hidden bg-stone sm:h-[32rem] sm:w-[24rem]"
            aria-hidden={index >= items.length ? true : undefined}
          >
            {item.video ? (
              <video
                src={item.video}
                poster={typeof item.image === "string" ? item.image : item.image.src}
                controls
                muted
                loop
                playsInline
                preload="none"
                aria-label={item.alt}
                onPlay={() => {
                  videoPlayingRef.current = true;
                }}
                onPause={() => {
                  videoPlayingRef.current = false;
                }}
                onEnded={() => {
                  videoPlayingRef.current = false;
                }}
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 240px, 384px"
                placeholder={typeof item.image === "string" ? "empty" : "blur"}
                draggable={false}
                className="pointer-events-none photo-grade object-cover"
              />
            )}
            <span className="mono absolute top-3 left-3 z-10 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
              {item.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
