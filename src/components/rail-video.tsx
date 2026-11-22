"use client";

import { useEffect, useRef, useState } from "react";

export default function RailVideo({
  src,
  poster,
  label,
  startAt,
}: {
  src: string;
  poster: string;
  label: string;
  startAt?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const video = videoRef.current;
    if (!video) return;

    const seekToStart = () => {
      if (startAt !== undefined && video.currentTime < startAt - 0.2) {
        video.currentTime = startAt;
      }
    };

    if (video.readyState >= 1) {
      seekToStart();
    } else {
      video.addEventListener("loadedmetadata", seekToStart, { once: true });
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (media.matches) {
        video.pause();
        seekToStart();
      } else {
        video.play().catch(() => undefined);
      }
    };

    update();
    media.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      video.removeEventListener("loadedmetadata", seekToStart);
    };
  }, [inView, startAt]);

  const onTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || startAt === undefined) return;
    if (video.currentTime < startAt - 0.3) {
      video.currentTime = startAt;
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      onTimeUpdate={onTimeUpdate}
      className="photo-grade h-full w-full object-cover"
    />
  );
}
