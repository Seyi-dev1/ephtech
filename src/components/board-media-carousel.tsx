"use client";

import Image, { type StaticImageData } from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import boardProduct from "@/assets/images/board-product.jpg";
import BoardVisual from "@/components/board-visual";
import { ArrowRight } from "@/components/icons";
import { cloudinaryVideo } from "@/lib/cloudinary";

type Slide = {
  id: string;
  label: string;
  caption: string;
  video?: string;
  poster?: string;
  image?: StaticImageData;
};

const slides: Slide[] = [
  {
    id: "board",
    label: "Board",
    caption: "Board, engineered core",
  },
  {
    id: "board-product",
    label: "Product",
    caption: "The board, factory-finished",
    image: boardProduct,
  },
  {
    id: "packaging",
    label: "Packaging",
    caption: "Packed for dispatch",
    video: cloudinaryVideo("ephtech/videos/ephtech-board-packaging"),
    poster: "/videos/ephtech-board-packaging-poster.jpg",
  },
  {
    id: "installation",
    label: "Installation",
    caption: "On-site installation",
    video: cloudinaryVideo("ephtech/videos/ephtech-board-installation"),
    poster: "/videos/ephtech-board-installation-poster.jpg",
  },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 translate-x-0.5">
      <path d="M8 5.14v13.72L19 12 8 5.14Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" />
    </svg>
  );
}

export default function BoardMediaCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [compact, setCompact] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const touchStartX = useRef<number | null>(null);

  const activeSlide = slides[active];
  const hasVideo = Boolean(activeSlide.video);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
    setPlaying(false);
  }, [active]);

  const playVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    videoRefs.current.forEach((other, otherIndex) => {
      if (other && otherIndex !== index) other.pause();
    });
    video.play().catch(() => undefined);
  };

  const toggleVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused) {
      playVideo(index);
    } else {
      video.pause();
    }
  };

  const step = (delta: number) => {
    setActive((current) => (current + delta + slides.length) % slides.length);
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

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-line pb-3">
        <div
          className="grid w-full grid-cols-2 gap-x-4 gap-y-2.5 sm:flex sm:w-auto sm:flex-wrap sm:gap-x-5 sm:gap-y-2"
          role="group"
          aria-label="Choose board media"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
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
              {slide.label}
            </button>
          ))}
        </div>
        <span className="mono hidden text-[9px] tracking-[0.14em] text-muted sm:inline">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div
        id="board-media-panel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Board media"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="group relative mt-3 touch-pan-y overflow-hidden border border-line bg-fog outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      >
        <div className="relative h-[clamp(400px,68vw,540px)] lg:h-[clamp(460px,38vw,560px)]">
          <div
            className={`absolute inset-0 flex items-center justify-center p-1 transition-opacity duration-500 sm:p-5 ${
              active === 0 ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={active !== 0}
          >
            <div className="w-full max-w-[560px]">
              <BoardVisual light compact={compact} />
            </div>
          </div>

          {slides.map((slide, index) => {
            if (index === 0) return null;
            const isActive = active === index;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                {slide.video && slide.poster ? (
                  <video
                    ref={(element) => {
                      videoRefs.current[index] = element;
                    }}
                    src={slide.video}
                    poster={slide.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onClick={() => toggleVideo(index)}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    className="mx-auto block h-full w-auto max-w-full cursor-pointer object-contain"
                    aria-label={`${slide.label} video`}
                  />
                ) : slide.image ? (
                  <Image
                    src={slide.image}
                    alt="Stack of Ephtech boards showing the factory-finished face."
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    placeholder="blur"
                    className="object-contain p-1 sm:p-4"
                  />
                ) : null}
                {slide.video && isActive && !playing ? (
                  <button
                    type="button"
                    onClick={() => playVideo(index)}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3"
                    aria-label={`Play ${slide.label.toLowerCase()} video`}
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink/20 bg-paper/90 text-forest shadow-sm backdrop-blur-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper">
                      <PlayIcon />
                    </span>
                    <span className="mono bg-paper/90 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-forest">
                      Play {slide.label.toLowerCase()}
                    </span>
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => step(-1)}
          className="absolute left-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/85 text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper sm:left-3 sm:flex sm:h-10 sm:w-10"
          aria-label="Previous media"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          className="absolute right-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/85 text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper sm:right-3 sm:flex sm:h-10 sm:w-10"
          aria-label="Next media"
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
          {activeSlide.caption}
        </span>
        <div className="flex items-center gap-3">
          {hasVideo ? (
            <button
              type="button"
              onClick={() => toggleVideo(active)}
              className="flex h-9 w-9 items-center justify-center border border-line text-muted transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              aria-label={playing ? `Pause ${activeSlide.label.toLowerCase()} video` : `Play ${activeSlide.label.toLowerCase()} video`}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>
          ) : null}
          <div className="flex items-center gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${slide.label}`}
                aria-current={active === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index ? "w-6 bg-amber" : "w-1.5 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
