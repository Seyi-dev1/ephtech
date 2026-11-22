"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/data";

const photos = [
  {
    image: images.heroInstall,
    alt: "Illustrative interior with a finished linear ceiling, concealed lighting and a panel wall.",
  },
  {
    image: images.mediaWall,
    alt: "Illustrative interior with a media wall, TV recess, shelving and concealed lighting.",
  },
  {
    image: images.hallWorks,
    alt: "Illustrative interior with a large suspended ceiling grid above a hall.",
  },
  {
    image: images.featureWall,
    alt: "Illustrative interior with a decorative wall, door opening and display niches.",
  },
  {
    image: images.panelInstall,
    alt: "Illustrative interior with large wall panels being fixed.",
  },
  {
    image: images.ceilingDetail,
    alt: "Illustrative interior with a decorative stepped ceiling and recessed panels.",
  },
  {
    image: images.interiorWorks,
    alt: "Illustrative interior with a decorative ceiling set-out and services.",
  },
];

const SPEED = 0.8;
const MOBILE_SPEED = 0.4;

export default function SiteGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const pointerRef = useRef({
    id: -1,
    startX: 0,
    startOffset: 0,
    lastX: 0,
    lastTime: 0,
  });
  const [reduced, setReduced] = useState(false);
  const speedRef = useRef(SPEED);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => {
      speedRef.current = media.matches ? MOBILE_SPEED : SPEED;
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    let halfWidth = track.scrollWidth / 2;

    const measure = () => {
      halfWidth = track.scrollWidth / 2;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      draggingRef.current = true;
      velocityRef.current = 0;
      pointerRef.current = {
        id: event.pointerId,
        startX: event.clientX,
        startOffset: offsetRef.current,
        lastX: event.clientX,
        lastTime: performance.now(),
      };
      track.setPointerCapture(event.pointerId);
      track.style.cursor = "grabbing";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!draggingRef.current || event.pointerId !== pointerRef.current.id) return;
      const now = performance.now();
      const dt = Math.max(now - pointerRef.current.lastTime, 1);
      const dx = event.clientX - pointerRef.current.lastX;

      velocityRef.current = (dx / dt) * 16;
      offsetRef.current =
        pointerRef.current.startOffset + (event.clientX - pointerRef.current.startX);
      pointerRef.current.lastX = event.clientX;
      pointerRef.current.lastTime = now;
    };

    const releasePointer = (event: PointerEvent) => {
      if (event.pointerId !== pointerRef.current.id) return;
      draggingRef.current = false;
      pointerRef.current.id = -1;
      track.style.cursor = "grab";
      if (track.hasPointerCapture(event.pointerId)) {
        track.releasePointerCapture(event.pointerId);
      }
    };

    const tick = () => {
      if (!draggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.1) {
          offsetRef.current += velocityRef.current;
          velocityRef.current *= 0.95;
        } else {
          velocityRef.current = 0;
          offsetRef.current -= speedRef.current;
        }
      }

      if (halfWidth > 0) {
        if (offsetRef.current <= -halfWidth) offsetRef.current += halfWidth;
        if (offsetRef.current > 0) offsetRef.current -= halfWidth;
      }

      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      frame = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    track.querySelectorAll("img").forEach((image) => {
      if (!image.complete) image.addEventListener("load", measure, { once: true });
    });
    window.addEventListener("load", measure);
    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", releasePointer);
    track.addEventListener("pointercancel", releasePointer);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("load", measure);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", releasePointer);
      track.removeEventListener("pointercancel", releasePointer);
      track.style.transform = "";
      track.style.cursor = "";
    };
  }, [reduced]);

  const imagesToRender = [...photos, ...photos];
  const maskFill = "var(--paper-2)";

  return (
    <div className="relative overflow-hidden bg-paper-2 py-4">
      {reduced ? (
        <div className="flex items-center gap-3 overflow-x-auto px-[clamp(20px,4vw,64px)] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {photos.map((photo) => (
            <div
              key={photo.alt}
              className="relative h-64 w-52 flex-shrink-0 overflow-hidden sm:h-[25rem] sm:w-64"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 208px, 256px"
                className="pointer-events-none h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
          <div
            ref={trackRef}
            className="flex w-max cursor-grab touch-pan-y select-none gap-3 py-4 sm:gap-4"
            style={{ willChange: "transform" }}
          >
            {imagesToRender.map((photo, index) => (
              <div
                key={`${photo.alt}-${index}`}
                className="relative h-64 w-52 flex-shrink-0 overflow-hidden sm:h-[25rem] sm:w-64"
              >
                <Image
                  src={photo.image}
                  alt={index < photos.length ? photo.alt : ""}
                  fill
                  sizes="(max-width: 640px) 208px, 256px"
                  loading="lazy"
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden sm:block sm:h-[100px]">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
          <path fill={maskFill} d="M0 0H1440V50C1440 50 1200 100 720 100C240 100 0 50 0 50V0Z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden sm:block sm:h-[100px]">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
          <path fill={maskFill} d="M0 100H1440V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z" />
        </svg>
      </div>
    </div>
  );
}
