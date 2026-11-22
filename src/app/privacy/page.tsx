import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Ephtech International handles the details you send with a quote request, site enquiry or WhatsApp message.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-paper text-ink">
      <div className="shell pt-[clamp(128px,17vh,184px)] pb-24">
        <Link
          href="/"
          className="mono text-[10px] tracking-[0.16em] uppercase text-muted transition-colors hover:text-forest"
        >
          ← Back to home
        </Link>

        <span className="eyebrow mt-10 block text-muted">Legal</span>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[0.95] font-medium tracking-[-0.045em]">
          Privacy policy.
        </h1>
        <p className="mono mt-5 text-[10px] tracking-[0.16em] uppercase text-muted">
          Last updated 15 November 2026
        </p>

        <div className="mt-12 max-w-2xl space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            Ephtech International Ltd (RC 1216055) handles personal information in line with the
            Nigeria Data Protection Act and the regulations that apply to our business.
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              What we collect
            </h2>
            <p>
              When you contact us on WhatsApp to request a quote, ask for a sample or discuss a
              project, we may receive your name, phone number, email address, company, site
              location, project details and any drawings or notes you choose to send.
            </p>
            <p>
              We also keep a record of the correspondence that follows, so the team handling your
              request can confirm pricing, stock and delivery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              How we use it
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To prepare and send your quotation and material take-off.</li>
              <li>To confirm availability and schedule delivery or installation.</li>
              <li>To answer questions about the specification, samples or warranty.</li>
              <li>To meet our accounting and legal obligations.</li>
            </ul>
            <p>We do not sell your information or use it for unrelated advertising.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Who sees it
            </h2>
            <p>
              Your details are seen by the Ephtech team and the branch handling your request. Where
              a delivery or installation partner is involved, they receive only what is needed to
              complete the work. We may use service providers for email or messaging, subject to
              appropriate confidentiality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              How long we keep it
            </h2>
            <p>
              We keep quote records for as long as needed to serve the request and any resulting
              contract, or for the period required by law. You can ask us to delete a quote request
              that did not proceed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Your choices
            </h2>
            <p>
              You can ask to see, correct or delete the information we hold about you, or ask us to
              stop contacting you. Write to{" "}
              <a
                href="mailto:ephtechinternational@yahoo.com"
                className="text-ink underline underline-offset-4"
              >
                ephtechinternational@yahoo.com
              </a>{" "}
              or call{" "}
              <a href="tel:+2348032519288" className="text-ink underline underline-offset-4">
                +234 803 251 9288
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-ink">
              Cookies and local storage
            </h2>
            <p>
              This site does not use advertising cookies and does not store a quote selection in
              your browser. Messages you send through WhatsApp are handled under WhatsApp&apos;s own
              terms and privacy policy.
            </p>
          </section>
        </div>

        <div className="mt-14 flex flex-wrap gap-6 border-t border-line pt-6">
          <Link href="/terms" className="link-underline text-[13px] font-medium text-ink">
            Terms of use
          </Link>
          <Link href="/" className="link-underline text-[13px] font-medium text-ink">
            Return to the homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
