"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const WORD = "EPHTECH";

export default function PageLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const mark = markRef.current;
    if (!root || !mark) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.querySelector<HTMLElement>(".site-nav");

    if (reduce) {
      document.documentElement.dataset.loader = "done";
      setFinished(true);
      return;
    }

    const chars = Array.from(mark.querySelectorAll<HTMLElement>("[data-loader-char]"));
    const countWrap = document.querySelector<HTMLElement>("[data-loader-count-wrap]");
    const countValue = document.querySelector<HTMLElement>("[data-loader-count]");
    const countTrack = document.querySelector<HTMLElement>("[data-count-track]");

    document.documentElement.classList.add("is-loading");
    document.documentElement.dataset.loader = "loading";
    window.dispatchEvent(new Event("ephtech:lock-scroll"));
    if (nav) gsap.set(nav, { opacity: 0 });

    gsap.set(chars, { yPercent: 120, opacity: 0 });
    gsap.set(mark, { visibility: "visible" });

    if (countWrap) {
      gsap.set(countWrap, { autoAlpha: 0, y: 12 });
      if (countTrack) gsap.set(countTrack, { y: 0 });
    }

    let cancelled = false;
    let revealAnnounced = false;
    const timelines: gsap.core.Timeline[] = [];

    const announceReveal = () => {
      if (cancelled || revealAnnounced) return;
      revealAnnounced = true;
      window.dispatchEvent(new Event("ephtech:loader-complete"));
    };

    const finish = () => {
      if (cancelled) return;
      document.documentElement.classList.remove("is-loading");
      document.documentElement.dataset.loader = "done";
      window.dispatchEvent(new Event("ephtech:unlock-scroll"));
      if (nav) gsap.set(nav, { clearProps: "opacity" });
      window.dispatchEvent(new Event("ephtech:page-reveal"));
      setFinished(true);
    };

    const liftCurtain = () => {
      if (cancelled) return;

      // The video and hero copy start as the curtain begins to move, not after
      // it has finished. This removes the empty frame between loader and hero.
      announceReveal();

      const tl = gsap.timeline({ onComplete: finish });
      timelines.push(tl);

      tl.to(
        root,
        { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
        0,
      );
      tl.to(mark, { opacity: 0, duration: 0.2, ease: "power1.out" }, 0);
      if (countWrap) {
        tl.to(countWrap, { opacity: 0, duration: 0.2, ease: "power1.out" }, 0);
      }
      if (nav) {
        tl.to(nav, { opacity: 1, duration: 0.55, ease: "power2.out" }, 0.18);
      }
    };

    const buildSequence = () => {
      if (cancelled) return;

      const timeline = gsap.timeline();
      timelines.push(timeline);

      if (chars.length) {
        timeline.set(chars, { opacity: 1 }, 0.05);
        timeline.to(
          chars,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.065,
            ease: "power3.out",
          },
          0.05,
        );
      }

      if (countWrap) {
        timeline.to(countWrap, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, 0.32);

        const counter = { value: 0 };
        const firstDigit = countTrack?.firstElementChild as HTMLElement | null;
        const fontSize = countValue ? parseFloat(getComputedStyle(countValue).fontSize) : 16;
        const rowHeight = firstDigit?.getBoundingClientRect().height || (fontSize || 16) * 0.82;

        timeline.to(
          counter,
          {
            value: 100,
            duration: 3.35,
            ease: "power2.inOut",
            onUpdate: () => {
              const value = Math.min(100, Math.round(counter.value));
              if (countTrack) {
                countTrack.style.transform = `translate3d(0, ${-value * rowHeight}px, 0)`;
              }
            },
          },
          0.35,
        );
      }

      timeline.call(liftCurtain, undefined, 3.95);
    };

    const fonts = document.fonts?.ready ?? Promise.resolve();
    const fontsGate = Promise.race([
      fonts,
      new Promise<void>((resolve) => window.setTimeout(resolve, 180)),
    ]);

    fontsGate.then(buildSequence);

    return () => {
      cancelled = true;
      timelines.forEach((tl) => tl.kill());
      document.documentElement.classList.remove("is-loading");
      document.documentElement.dataset.loader = "done";
      if (nav) gsap.set(nav, { clearProps: "opacity" });
      window.dispatchEvent(new Event("ephtech:unlock-scroll"));
    };
  }, []);

  if (finished) return null;

  return (
    <div className="page-loader" data-page-loader ref={rootRef} aria-hidden="true">
      <div className="page-loader__mark" ref={markRef}>
        <span className="page-loader__name" aria-label="EPHTECH">
          {WORD.split("").map((char, index) => (
            <span className="page-loader__char-mask" key={`${char}-${index}`} aria-hidden="true">
              <span className="page-loader__char" data-loader-char>
                {char}
              </span>
            </span>
          ))}
        </span>
      </div>
      <div className="page-loader__count" aria-hidden="true" data-loader-count-wrap>
        <span className="page-loader__count-label">Loading</span>
        <span className="page-loader__count-value" data-loader-count>
          <span className="page-loader__count-track" data-count-track>
            {Array.from({ length: 101 }, (_, value) => (
              <span className="page-loader__count-digit" key={value}>
                {String(value).padStart(3, "0")}
              </span>
            ))}
          </span>
        </span>
      </div>
      <div className="page-loader__bg" />
    </div>
  );
}
