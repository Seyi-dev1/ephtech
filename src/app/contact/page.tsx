import type { Metadata } from "next";
import Link from "next/link";
import { branches } from "@/lib/data";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  whatsappHref,
} from "@/lib/whatsapp";
import NigeriaMap from "@/components/nigeria-map";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  WhatsApp,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ephtech International in Lagos, Owerri and Aba. Discuss a building project, interior, material supply, property or external works.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "WhatsApp",
    detail: "Chat with the project team",
    href: whatsappHref(WHATSAPP_MESSAGES.general),
    icon: WhatsApp,
    external: true,
  },
  {
    label: "Phone",
    detail: WHATSAPP_DISPLAY,
    href: "tel:+2348032519288",
    icon: Phone,
    external: false,
  },
  {
    label: "Email",
    detail: "ephtechinternational@yahoo.com",
    href: "mailto:ephtechinternational@yahoo.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Company profile",
    detail: "Download the PDF",
    href: "/ephtech-company-profile.pdf",
    icon: Download,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="Contact"
        label="Contact"
        title="Talk to one team."
        lede="A building project, an interior, a material schedule or a property. Tell us what you are planning and we will point you to the right service and team."
        note="Project enquiries are reviewed within one business day."
      />

      {/* ---------------- map + branches ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6" data-reveal>
              <div className="bg-forest p-4 text-paper sm:p-6">
                <div className="flex items-center justify-between border-b border-paper/12 pb-3">
                  <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-paper/60">
                    Nigeria / 03 active branches
                  </span>
                  <span className="mono text-[8.5px] tracking-[0.14em] uppercase text-paper/60">
                    Supply route
                  </span>
                </div>
                <NigeriaMap />
                <div className="mt-4 flex items-center gap-6 border-t border-paper/12 pt-3">
                  <span className="mono flex items-center gap-2 text-[8.5px] tracking-[0.12em] uppercase text-paper/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    Active branch
                  </span>
                  <span className="mono flex items-center gap-2 text-[8.5px] tracking-[0.12em] uppercase text-paper/60">
                    <span className="w-6 border-t border-dashed border-amber/60" />
                    Supply route
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div>
                {branches.map((branch, index) => (
                  <div
                    key={branch.city}
                    data-reveal
                    className="grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-line py-6"
                  >
                    <span className="mono pt-1 text-[10px] tracking-[0.14em] text-muted">
                      0{index + 1}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-medium tracking-[-0.03em]">
                        {branch.city}
                      </h2>
                      <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted">
                        {branch.address.join(", ")}
                      </p>
                      <p className="mono mt-2 text-[8.5px] tracking-[0.12em] uppercase text-muted">
                        {branch.region} Nigeria
                      </p>
                    </div>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="mono flex items-center gap-2 border-b border-line pb-0.5 text-[8.5px] tracking-[0.12em] uppercase text-muted transition-colors hover:text-forest"
                    >
                      <Phone className="h-3 w-3" />
                      Call
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal>
                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <WhatsApp className="h-4 w-4" />
                  WhatsApp the team
                </a>
                <a href="tel:+2348032519288" className="btn btn-ghost">
                  <Phone className="h-4 w-4" />
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- channels ---------------- */}
      <section className="section border-y border-line bg-paper-2">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">Reach us</span>
              <h2 className="h2 mt-4">Choose the channel.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              WhatsApp is fastest for project enquiries. Phone and email work for drawings,
              documents and formal correspondence.
            </p>
          </div>

          <div
            className="mt-10 grid gap-px border-y border-line sm:grid-cols-2 lg:grid-cols-4"
            data-reveal-group
          >
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex flex-col gap-4 py-6 transition-colors hover:text-forest sm:px-5 sm:first:pl-0 sm:last:pr-0"
                >
                  <Icon className="h-5 w-5 text-muted transition-colors group-hover:text-forest" />
                  <div>
                    <span className="mono block text-[8.5px] tracking-[0.14em] uppercase text-muted">
                      {channel.label}
                    </span>
                    <span className="mt-2 block text-[15px] leading-snug">
                      {channel.detail}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-opacity group-hover:opacity-100" />
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link href="/services" className="link-underline text-[13px] font-medium">
              Explore our services
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <p className="mono text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted">
              Nationwide delivery · Scope confirmed with your project team
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- quote cta ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">Next step</span>
              <h2 className="h2 mt-4">
                Send the brief.
                <br />
                We will find the right team.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                Share a drawing, a site address or a scope. We will confirm the right services,
                the programme and the next step.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4" data-reveal>
              <QuoteButton className="btn btn-dark w-full">
                Start a project
                <WhatsApp className="h-4 w-4" />
              </QuoteButton>
              <a
                href="/ephtech-company-profile.pdf"
                download
                className="btn btn-ghost w-full border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-paper"
              >
                Download profile
                <Download className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
