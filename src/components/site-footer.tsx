import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-forest text-paper">
      <div className="shell pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-semibold tracking-[-0.03em]">
                EPHTECH
              </span>
              <span className="mono text-[8px] tracking-[0.26em] text-paper/60">
                INTERNATIONAL
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-paper/60">
              A multi-disciplinary construction, materials and interior finishing company.
              Durable, cost-effective work delivered with engineering integrity and client
              satisfaction.
            </p>
            <div className="mono mt-6 text-[8.5px] tracking-[0.14em] uppercase text-paper/55">
              RC 1216055
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="mono text-[8.5px] tracking-[0.16em] uppercase text-paper/55">
              Explore
            </span>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-paper/65 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="mono text-[8.5px] tracking-[0.16em] uppercase text-paper/55">
              Contact
            </span>
            <ul className="mt-4 space-y-2.5 text-[13px] text-paper/65">
              <li>
                <a href="tel:+2348032519288" className="transition-colors hover:text-amber">
                  +234 803 251 9288
                </a>
              </li>
              <li>
                <a
                  href="mailto:ephtechinternational@yahoo.com"
                  className="transition-colors hover:text-amber"
                >
                  ephtechinternational@yahoo.com
                </a>
              </li>
              <li className="pt-2 text-paper/60">
                Km 36, Lekki-Epe Expressway
                <br />
                Ibeju-Lekki, Lagos
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="mono text-[8.5px] tracking-[0.16em] uppercase text-paper/55">
              Branches
            </span>
            <ul className="mt-4 space-y-2.5 text-[13px] text-paper/65">
              {[
                { city: "Lagos", region: "South-West" },
                { city: "Owerri", region: "South-East" },
                { city: "Aba", region: "South-East" },
              ].map((branch) => (
                <li key={branch.city} className="flex items-baseline justify-between gap-3">
                  <span>{branch.city}</span>
                  <span className="mono text-[8px] tracking-[0.12em] uppercase text-paper/40">
                    {branch.region}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-6">
          <span
            className="block font-display text-[clamp(4rem,13.5vw,12.5rem)] leading-[0.78] font-medium tracking-[-0.06em] text-paper/[0.07]"
            aria-hidden="true"
          >
            EPHTECH
          </span>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-paper/10 pt-5 sm:flex-row sm:items-center">
          <p className="mono text-[8px] tracking-[0.12em] uppercase text-paper/55">
            © 2026 Ephtech International Ltd · RC 1216055
          </p>
          <p className="mono text-[8px] tracking-[0.12em] uppercase text-paper/60">
            Building materials · Construction · Interior finishings
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="mono text-[8px] tracking-[0.12em] uppercase text-paper/55 transition-colors hover:text-amber"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="mono text-[8px] tracking-[0.12em] uppercase text-paper/55 transition-colors hover:text-amber"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
