import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "The terms that apply to Ephtech International quotations, supply, delivery and installation.",
};

export default function TermsPage() {
  return (
    <main className="bg-paper text-ink">
      <div className="shell pt-[clamp(128px,17vh,184px)] pb-24">
        <nav
          aria-label="Breadcrumb"
          className="mono flex flex-wrap items-center gap-2 text-[9px] tracking-[0.16em] uppercase text-muted"
        >
          <Link href="/" className="transition-colors hover:text-forest">
            Ephtech
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink" aria-current="page">
            Terms
          </span>
        </nav>

        <span className="eyebrow mt-10 block text-muted">Legal</span>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[0.95] font-medium tracking-[-0.045em]">
          Terms of use.
        </h1>
        <p className="mono mt-5 text-[10px] tracking-[0.16em] uppercase text-muted">
          Last updated 15 November 2026
        </p>

        <div className="mt-12 max-w-2xl space-y-8 text-[15px] leading-relaxed text-muted">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Website content
            </h2>
            <p>
              Product descriptions, dimensions and performance notes on this site are indicative.
              The specification that applies to your project is the one stated in your quotation,
              proforma invoice or contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Quotations
            </h2>
            <p>
              Quotations are valid for 30 days unless stated otherwise, and are subject to a site
              survey, stock availability and confirmation of the final quantities. Prices are
              exclusive of delivery and installation unless the quotation says otherwise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Orders and payment
            </h2>
            <p>
              Orders are confirmed by a proforma invoice. Dispatch and installation are scheduled
              after payment and a confirmed delivery window. Delivery dates are agreed per site and
              may be affected by access, weather or events outside our control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Installation
            </h2>
            <p>
              Where Ephtech supplies and installs, the work is carried out by our teams or approved
              installers under one contract. The client is responsible for safe site access, power,
              clear working areas and protecting completed work after handover.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Warranty
            </h2>
            <p>
              Materials and workmanship are covered as stated in your contract. The warranty does
              not cover misuse, water ingress, structural movement, alterations by others or work
              carried out by third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Liability and law
            </h2>
            <p>
              Our liability is limited to the extent permitted by Nigerian law. These terms are
              governed by the laws of the Federal Republic of Nigeria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Contact
            </h2>
            <p>
              Ephtech International Ltd · RC 1216055
              <br />
              Km 36, Lekki-Epe Expressway, Ibeju-Lekki, Lagos
              <br />
              <a
                href="mailto:ephtechinternational@yahoo.com"
                className="text-ink underline underline-offset-4"
              >
                ephtechinternational@yahoo.com
              </a>{" "}
              ·{" "}
              <a href="tel:+2348032519288" className="text-ink underline underline-offset-4">
                +234 803 251 9288
              </a>
            </p>
          </section>
        </div>

        <div className="mt-14 flex flex-wrap gap-6 border-t border-line pt-6">
          <Link href="/privacy" className="link-underline text-[13px] font-medium text-ink">
            Privacy policy
          </Link>
          <Link href="/" className="link-underline text-[13px] font-medium text-ink">
            Return to the homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
