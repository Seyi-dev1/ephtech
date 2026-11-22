"use client";

import { useEffect, useRef } from "react";

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      return;
    }

    const loaderDone = document.documentElement.dataset.loader === "done";
    let cancelled = false;
    let announced = false;

    const announce = () => {
      if (cancelled || announced) return;
      announced = true;
      window.dispatchEvent(new Event("ephtech:hero-video-start"));
    };

    const start = () => {
      if (cancelled) return;

      try {
        video.currentTime = 0;
      } catch {
        // The seek is best-effort; playback still starts below.
      }

      video.play().catch(() => undefined);

      let handled = false;
      const onSeeked = () => {
        if (handled) return;
        handled = true;
        video.removeEventListener("seeked", onSeeked);
        requestAnimationFrame(announce);
      };

      video.addEventListener("seeked", onSeeked, { once: true });
      window.setTimeout(onSeeked, 160);
    };

    if (loaderDone) {
      start();
    } else {
      window.addEventListener("ephtech:loader-complete", start, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("ephtech:loader-complete", start);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      data-hero-video
      className="hero-image__video"
      muted
      loop
      playsInline
      preload="auto"
      poster="/videos/ephtech-hero-poster.jpg"
      aria-hidden="true"
    >
      <source
        src="https://res.cloudinary.com/drikcqdzp/video/upload/q_auto,f_auto/ephtech/videos/ephtech-hero.mp4"
        type="video/mp4"
      />
    </video>
  );
}
