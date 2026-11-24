import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import boardProduct from "@/assets/images/board-product.jpg";
import serviceImport from "@/assets/images/service-import.jpg";
import workCeiling from "@/assets/images/work-ceiling.jpg";
import workCeilingDetail from "@/assets/images/work-ceiling-detail.jpg";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Products & Materials",
  description:
    "Ephtech Board and the wider range of ceiling systems, building materials and imported finishes supplied by Ephtech International.",
  alternates: { canonical: "/products" },
};

const products = [
  {
    title: "Ceiling & Wall Systems",
    note: "System",
    image: workCeiling,
    alt: "Completed office interior with a suspended ceiling and wall panels.",
    href: "/services/ceiling-and-wall-systems",
    body: "Suspended ceilings, dry partitions, wall linings and the components that make the system work.",
    imageNote: "Client work",
  },
  {
    title: "Building Materials",
    note: "Supply",
    image: workCeilingDetail,
    alt: "Ceiling and wall detail on a completed interior.",
    href: "/services/building-materials-supply",
    body: "Boards, grids, channels, jointing compounds and site consumables supplied as one package.",
    imageNote: "Client work",
  },
  {
    title: "Imported Finishes",
    note: "Import",
    image: serviceImport,
    alt: "Aerial view of a logistics port with shipping containers and cargo handling equipment.",
    href: "/services/building-materials-importation",
    body: "Modern materials sourced and imported for specifications beyond the local catalogue.",
    imageNote: "Illustrative image",
  },
];

export default function ProductsPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="Products · Systems · Materials"
        title="Products that support the work."
        lede="Ephtech Board is our flagship product, but it is one part of a wider range of ceiling systems, building materials and imported finishes supplied by the company."
        note="Product availability is confirmed against the project specification and current stock."
      />

      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5" data-reveal>
              <span className="eyebrow text-muted">Flagship product</span>
              <h2 className="h2 mt-4">Ephtech Board.</h2>
              <p className="body-lg mt-6">
                A dry, factory-finished board system for ceilings and walls. Moisture-resistant,
                impact-resistant and paint-ready, with a clean installation and no curing downtime.
              </p>
              <p className="mono mt-5 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted">
                Board · Grid · Channels · Jointing compound
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/board" className="btn btn-primary">
                  Explore the board
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <QuoteButton className="link-underline text-[13px] font-medium">
                  Request a quote
                  <WhatsApp className="h-3.5 w-3.5" />
                </QuoteButton>
              </div>
            </div>
            <Link href="/board" className="group block lg:col-span-7" data-reveal>
              <div className="media relative aspect-[16/10] overflow-hidden">
                <Image
                  src={boardProduct}
                  alt="Stack of Ephtech boards showing the factory-finished face."
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  placeholder="blur"
                  className="photo-grade object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  Ephtech Board
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-paper-2">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">The wider range</span>
              <h2 className="h2 mt-4">Systems & materials.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              Products are supplied with technical advice and installation support where the scope
              requires it.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3" data-reveal-group>
            {products.map((product) => (
              <Link key={product.title} href={product.href} className="group block">
                <div className="media relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    placeholder="blur"
                    className="photo-grade object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                    {product.note}
                  </span>
                  <span className="mono absolute right-3 bottom-3 bg-forest/80 px-2 py-1 text-[7.5px] tracking-[0.12em] uppercase text-paper/80">
                    {product.imageNote}
                  </span>
                </div>
                <div className="mt-3 border-t border-line pt-3">
                  <h3 className="font-display text-xl font-medium tracking-[-0.025em]">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{product.body}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium">
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="grid gap-8 bg-amber p-6 text-forest sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-forest/55">Specification</span>
              <h2 className="h2 mt-4">
                Need a material schedule?
                <br />
                Send the drawings.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-forest/70">
                We will confirm the right system, the quantities and the delivery route for your
                project.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4" data-reveal>
              <QuoteButton className="btn btn-dark w-full" message={WHATSAPP_MESSAGES.general}>
                Request a quote
                <WhatsApp className="h-4 w-4" />
              </QuoteButton>
              <Link
                href="/contact"
                className="btn btn-ghost w-full border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-paper"
              >
                Contact the team
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
