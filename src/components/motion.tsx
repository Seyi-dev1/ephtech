"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    if (document.documentElement.classList.contains("is-loading")) {
      lenis.stop();
    }

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    const lockScroll = () => lenis.stop();
    const unlockScroll = () => lenis.start();
    window.addEventListener("ephtech:lock-scroll", lockScroll);
    window.addEventListener("ephtech:unlock-scroll", unlockScroll);

    let heroTl: gsap.core.Timeline | null = null;

    const context = gsap.context(() => {
      /* ---------- hero ---------- */
      const heroLines = gsap.utils.toArray<HTMLElement>("[data-hero-line]");
      const slashLines = gsap.utils.toArray<HTMLElement>("[data-slash]");

      if (heroLines.length || slashLines.length) {
        const SLASH_FROM = "polygon(-8% -20%, -8% -20%, -8% 120%, -16% 120%)";
        const SLASH_TO = "polygon(-8% -20%, 108% -20%, 108% 120%, -16% 120%)";

        gsap.set(heroLines, { yPercent: 112 });
        gsap.set(slashLines, { clipPath: SLASH_FROM });
        gsap.set("[data-hero-fade]", { opacity: 0, y: 12 });

        heroTl = gsap.timeline({ paused: true });

        if (heroLines.length) {
          heroTl.fromTo(
            heroLines,
            { yPercent: 112 },
            { yPercent: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" },
            0,
          );
        }

        if (slashLines.length) {
          heroTl.fromTo(
            slashLines,
            { clipPath: SLASH_FROM },
            { clipPath: SLASH_TO, duration: 1.1, stagger: 0.18, ease: "power4.out" },
            0,
          );
        }

        const specBar = document.querySelector<HTMLElement>("[data-spec-bar]");
        if (specBar) {
          heroTl.to(
            specBar,
            { clipPath: "inset(0 0 0 0)", duration: 1.05, ease: "power3.inOut" },
            0.35,
          );
        }

        heroTl.fromTo(
          "[data-hero-fade]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.09, ease: "power3.out" },
          0.2,
        );

        const tl = heroTl;

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          if (!Number.isFinite(target)) return;
          const decimals = Number(el.dataset.decimals ?? 0);
          const state = { value: 0 };
          el.textContent = (0).toFixed(decimals);
          tl.to(
            state,
            {
              value: target,
              duration: 1.3,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = state.value.toFixed(decimals);
              },
            },
            0.85,
          );
        });
      }

      /* ---------- scroll reveals ---------- */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        gsap.fromTo(
          Array.from(group.children),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.085,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 86%", once: true },
          },
        );
      });

      /* ---------- image reveals ---------- */
      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.25,
            ease: "power3.inOut",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      /* ---------- lines ---------- */
      gsap.utils.toArray<HTMLElement>("[data-line]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.inOut",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          },
        );
      });

      /* ---------- counters ---------- */
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count ?? 0);
        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(state.value)).padStart(2, "0");
          },
        });
      });

      /* ---------- parallax ---------- */
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      /* ---------- process line ---------- */
      const processLine = document.querySelector("[data-process-line]");
      if (processLine) {
        gsap.fromTo(
          processLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: processLine.parentElement ?? processLine,
              start: "top 75%",
              end: "bottom 55%",
              scrub: 0.4,
            },
          },
        );
      }
    });

    /* ---------- hero board: light-follow ---------- */
    const board = document.querySelector<HTMLElement>(".hero-board");
    const sheen = document.querySelector<SVGGradientElement>("#hbSheen");
    const shadow = document.querySelector<SVGGElement>("[data-board-shadow]");
    const canHover = window.matchMedia("(hover: hover)").matches;

    let boardRaf = 0;
    let boardX = 0;
    let boardY = 0;
    let boardTargetX = 0;
    let boardTargetY = 0;

    const renderBoard = () => {
      boardX += (boardTargetX - boardX) * 0.065;
      boardY += (boardTargetY - boardY) * 0.065;

      if (sheen) {
        sheen.setAttribute(
          "gradientTransform",
          `translate(${(boardX * 0.03).toFixed(4)} ${(boardY * 0.024).toFixed(4)})`,
        );
      }
      if (shadow) {
        shadow.setAttribute(
          "transform",
          `translate(${(-boardX * 2).toFixed(2)} ${(-boardY * 1.4).toFixed(2)})`,
        );
      }

      const moving =
        Math.abs(boardTargetX - boardX) > 0.0015 ||
        Math.abs(boardTargetY - boardY) > 0.0015;

      boardRaf = moving ? requestAnimationFrame(renderBoard) : 0;
    };

    const startBoard = () => {
      if (!boardRaf) boardRaf = requestAnimationFrame(renderBoard);
    };

    const pointBoard = (event: PointerEvent) => {
      if (!board) return;
      const rect = board.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = (event.clientY - rect.top) / rect.height;

      boardTargetX = (nx - 0.5) * 2;
      boardTargetY = (ny - 0.5) * 2;

      board.style.setProperty("--gx", `${(nx * 100).toFixed(2)}%`);
      board.style.setProperty("--gy", `${(ny * 100).toFixed(2)}%`);

      const wasLensing = board.classList.contains("is-lensing");
      board.classList.add("is-lensing");
      if (!wasLensing) {
        boardX = boardTargetX;
        boardY = boardTargetY;
      }

      startBoard();
    };

    const leaveBoard = () => {
      boardTargetX = 0;
      boardTargetY = 0;
      board?.classList.remove("is-lensing");
      startBoard();
    };

    if (board && canHover && (sheen || shadow)) {
      board.addEventListener("pointermove", pointBoard);
      board.addEventListener("pointerenter", pointBoard);
      board.addEventListener("pointerleave", leaveBoard);
    }

    /* ---------- start hero after the loader / video ---------- */
    let heroStarted = false;
    let heroHold: gsap.core.Tween | null = null;
    const playHero = (delay: number) => {
      if (heroStarted) return;
      heroStarted = true;
      heroHold = gsap.delayedCall(delay, () => heroTl?.play(0));
    };

    const hasVideo = !!document.querySelector("[data-hero-video]");
    const hasLoader = !!document.querySelector("[data-page-loader]");
    const loaderDone = document.documentElement.dataset.loader === "done";
    let heroFallback = 0;

    const onHeroStart = () => playHero(0.08);
    const loaderIsActive = hasLoader && !loaderDone;

    if (loaderIsActive) {
      // The curtain owns the reveal. Once it has cleared, the copy enters
      // immediately, without animating behind an overlay.
      window.addEventListener("ephtech:page-reveal", onHeroStart, { once: true });
      heroFallback = window.setTimeout(onHeroStart, 4500);
    } else if (hasVideo) {
      window.addEventListener("ephtech:hero-video-start", onHeroStart, { once: true });
      heroFallback = window.setTimeout(onHeroStart, 3000);
    } else {
      onHeroStart();
    }

    /* ---------- anchor navigation ---------- */
    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      lenis.start();
      lenis.scrollTo(target as HTMLElement, { offset: -94, duration: 1.15 });
    };
    document.addEventListener("click", onAnchorClick);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => undefined);
    const refreshTimer = window.setTimeout(refresh, 1200);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      board?.removeEventListener("pointermove", pointBoard);
      board?.removeEventListener("pointerenter", pointBoard);
      board?.removeEventListener("pointerleave", leaveBoard);
      if (boardRaf) cancelAnimationFrame(boardRaf);
      window.removeEventListener("ephtech:lock-scroll", lockScroll);
      window.removeEventListener("ephtech:unlock-scroll", unlockScroll);
      window.removeEventListener("ephtech:hero-video-start", onHeroStart);
      window.removeEventListener("ephtech:page-reveal", onHeroStart);
      window.removeEventListener("load", refresh);
      window.clearTimeout(refreshTimer);
      window.clearTimeout(heroFallback);
      heroHold?.kill();
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  const pathname = usePathname();
  const firstRoute = useRef(true);

  /*
   * App Router keeps the layout mounted between routes, so the initial GSAP
   * context does not see the new page. Initialise reveals for each new route
   * so client-side navigation never leaves content hidden by the boot styles.
   */
  useEffect(() => {
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    if (pathname === "/") {
      gsap.set("[data-hero-line]", { yPercent: 0 });
      gsap.set("[data-hero-fade]", { opacity: 1, y: 0 });
          }

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        gsap.fromTo(
          Array.from(group.children),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.085,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 86%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.25,
            ease: "power3.inOut",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-line]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.inOut",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          },
        );
      });

      const processLine = document.querySelector("[data-process-line]");
      if (processLine) {
        gsap.fromTo(
          processLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: processLine.parentElement ?? processLine,
              start: "top 75%",
              end: "bottom 55%",
              scrub: 0.4,
            },
          },
        );
      }
    });

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
    };
  }, [pathname]);

  return null;
}
