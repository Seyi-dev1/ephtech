"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Wordmark from "@/components/wordmark";
import { Close, Download, Mail, Phone, WhatsApp } from "@/components/icons";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  whatsappHref,
} from "@/lib/whatsapp";

const links = [
  { label: "The Board", href: "/board" },
  { label: "Applications", href: "/board#applications" },
  { label: "Site work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/board#faq" },
  { label: "Contact", href: "/contact" },
];

const branchLine = "Lagos · Owerri · Aba";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navLight, setNavLight] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 48;
      setScrolled((previous) => (previous === next ? previous : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setNavLight(true);
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setNavLight(false), 720);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (menuOpen) {
      root.classList.add("menu-open");
      document.body.style.overflow = "hidden";
    } else {
      root.classList.remove("menu-open");
      document.body.style.overflow = "";
    }
    window.dispatchEvent(
      new CustomEvent(menuOpen ? "ephtech:lock-scroll" : "ephtech:unlock-scroll"),
    );
    return () => {
      root.classList.remove("menu-open");
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("ephtech:unlock-scroll"));
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const overlay = menuRef.current;
    const trigger = triggerRef.current;
    if (!overlay) return;

    const focusables = Array.from(
      overlay.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
    ).filter((element) => element.offsetParent !== null);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const focusTimer = window.setTimeout(
      () => first?.focus({ preventScroll: true }),
      320,
    );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus({ preventScroll: true });
    };
  }, [menuOpen, closeMenu]);

  const overHero = pathname === "/" && !scrolled && !menuOpen && !navLight;
  const expanded = menuOpen || navLight;
  const lightLogo = navLight || overHero;

  return (
    <>
      <header
        className={`site-nav ${
          scrolled && !menuOpen && !navLight ? "is-scrolled" : ""
        } ${expanded ? "is-open" : ""} ${overHero ? "is-over-hero" : ""}`}
      >
        <Link
          href="/"
          aria-label="Ephtech International home"
          className="site-nav__logo"
          onClick={() => {
            if (menuOpen) closeMenu();
          }}
        >
          <span className="site-nav__logo-stack">
            <span
              aria-hidden="true"
              className={`site-nav__logo-tone ${lightLogo ? "opacity-0" : "opacity-100"}`}
            >
              <Wordmark />
            </span>
            <span
              aria-hidden="true"
              className={`site-nav__logo-tone ${lightLogo ? "opacity-100" : "opacity-0"}`}
            >
              <Wordmark light />
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2.5">
          <a
            href={whatsappHref(WHATSAPP_MESSAGES.quote)}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-quote hidden items-center justify-center md:flex"
            aria-label="Request a quote on WhatsApp"
          >
            <WhatsApp className="h-4 w-4" />
            <span className="text-[12px] font-medium">Quote</span>
          </a>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => (menuOpen ? closeMenu() : openMenu())}
            className="nav-menu-trigger"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="nav-menu-trigger__label">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <span className="nav-menu-trigger__icon" aria-hidden="true">
              <span className={`nav-dots ${menuOpen ? "is-hidden" : ""}`}>
                <i />
                <i />
                <i />
              </span>
              <Close className={`nav-x h-4 w-4 ${menuOpen ? "is-visible" : ""}`} />
            </span>
          </button>
        </div>
      </header>

      <div
        ref={menuRef}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`site-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="site-menu__bg" aria-hidden="true" />
        <div className="site-menu__inner">
          <div className="site-menu__body">
            <nav aria-label="Primary" className="site-menu__nav">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="site-menu__link"
                  style={{
                    transitionDelay: menuOpen
                      ? `${180 + index * 55}ms`
                      : "0ms",
                  }}
                >
                  <span className="site-menu__dot" aria-hidden="true" />
                  <span className="site-menu__label">{link.label}</span>
                  <span className="site-menu__index mono">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="site-menu__mobile-contact">
              <span className="site-menu__meta-label">Quote or contact</span>
              <a
                href={whatsappHref(WHATSAPP_MESSAGES.quote)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="site-menu__cta no-underline"
                aria-label="Request a quote on WhatsApp"
              >
                <span>Request a quote</span>
                <span className="site-menu__cta-icon">
                  <WhatsApp className="h-4 w-4" />
                </span>
              </a>
              <div className="site-menu__mobile-contact-links">
                <a
                  href="tel:+2348032519288"
                  onClick={closeMenu}
                  className="site-menu__mobile-contact-link"
                >
                  <Phone className="h-4 w-4" />
                  {WHATSAPP_DISPLAY}
                </a>
                <a
                  href="mailto:ephtechinternational@yahoo.com"
                  onClick={closeMenu}
                  className="site-menu__mobile-contact-link"
                >
                  <Mail className="h-4 w-4" />
                  ephtechinternational@yahoo.com
                </a>
              </div>
            </div>

            <aside
              className="site-menu__aside"
              style={{ transitionDelay: menuOpen ? "420ms" : "0ms" }}
            >
              <div className="site-menu__meta">
                <span className="site-menu__meta-label">Phone</span>
                <a
                  href="tel:+2348032519288"
                  className="site-menu__meta-value site-menu__meta-link"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>

              <div className="site-menu__meta">
                <span className="site-menu__meta-label">Email</span>
                <a
                  href="mailto:ephtechinternational@yahoo.com"
                  className="site-menu__meta-value site-menu__meta-link"
                >
                  ephtechinternational@yahoo.com
                </a>
              </div>

              <div className="site-menu__meta">
                <span className="site-menu__meta-label">WhatsApp</span>
                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-menu__meta-value site-menu__meta-link text-[15px]"
                >
                  <WhatsApp className="h-4 w-4" />
                  Chat with the team
                </a>
              </div>

              <div className="site-menu__meta">
                <span className="site-menu__meta-label">Branches</span>
                <span className="site-menu__meta-value site-menu__meta-value--small">
                  {branchLine}
                </span>
              </div>

              <a
                href={whatsappHref(WHATSAPP_MESSAGES.quote)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="site-menu__cta no-underline"
                aria-label="Request a quote on WhatsApp"
              >
                <span>Request a quote</span>
                <span className="site-menu__cta-icon">
                  <WhatsApp className="h-4 w-4" />
                </span>
              </a>
              <p className="site-menu__note">
                Opens WhatsApp with the inventory team.
              </p>

              <a
                href="/ephtech-company-profile.pdf"
                download
                className="site-menu__download"
              >
                <Download className="h-3.5 w-3.5" />
                Company profile (PDF)
              </a>
            </aside>
          </div>

          <div
            className="site-menu__footer"
            style={{ transitionDelay: menuOpen ? "520ms" : "0ms" }}
          >
            <span>RC 1216055</span>
            <span>Building materials · Construction · Interior finishings</span>
            <span>3 branches · 6 divisions</span>
          </div>
        </div>
      </div>
    </>
  );
}
