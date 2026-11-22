import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import livingRoomCeiling from "@/assets/images/living-room-ceiling.jpg";
import officeCeiling from "@/assets/images/office-ceiling.jpg";
import conferenceHallCeiling from "@/assets/images/conference-hall-ceiling.jpg";
import { images } from "@/lib/data";
import PageIntro from "@/components/page-intro";
import QuoteButton from "@/components/quote-button";
import SiteGallery from "@/components/site-gallery";
import { ArrowUpRight, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Site work",
  description:
    "Ceiling, wall and joinery details the Ephtech system is specified for, with illustrative interiors from residential, commercial and civic settings.",
  alternates: { canonical: "/projects" },
};

const projectShots = [
  {
    image: livingRoomCeiling,
    category: "Residential",
    title: "Homes and duplexes",
    alt: "Modern living room with a white board ceiling and recessed lighting.",
  },
  {
    image: officeCeiling,
    category: "Commercial",
    title: "Offices and mixed-use",
    alt: "Modern office interior with a white suspended ceiling and LED strip lighting.",
  },
  {
    image: conferenceHallCeiling,
    category: "Civic & institutional",
    title: "Halls, schools and hospitals",
    alt: "Conference hall with a large white suspended ceiling and recessed lighting.",
  },
  {
    image: images.ceilingDetail,
    category: "Ceilings",
    title: "Stepped and cove-lit set-outs",
    alt: "Illustrative interior with a decorative stepped ceiling and recessed lighting.",
  },
  {
    image: images.mediaWall,
    category: "Joinery",
    title: "Media walls and bulkheads",
    alt: "Illustrative interior with a media wall, TV recess, shelving and concealed lighting.",
  },
  {
    image: images.panelInstall,
    category: "Walls",
    title: "Partitions and wall linings",
    alt: "Illustrative interior with large wall panels being fixed.",
  },
];

export default function ProjectsPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <PageIntro
        eyebrow="03: Built on site"
        title="The finish, up close."
        lede="Ceiling, wall and joinery details the Ephtech system is specified for. The work is shown by application and setting, not by invented case-study names."
        note="Photography is illustrative. Project references are available on request."
      />

      <SiteGallery />

      <section className="section">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div data-reveal>
              <span className="eyebrow text-muted">By setting</span>
              <h2 className="h2 mt-4">Where the system is used.</h2>
            </div>
            <p className="body-lg max-w-sm md:text-right" data-reveal>
              Residential, commercial and civic settings, plus the ceiling, wall and joinery
              details that carry the finish.
            </p>
          </div>

          <div
            className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
            data-reveal-group
          >
            {projectShots.map((shot) => (
              <article key={shot.title}>
                <div className="media relative aspect-[4/3]">
                  <Image
                    src={shot.image}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    className="photo-grade object-cover"
                  />
                  <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                    {shot.category}
                  </span>
                </div>
                <div className="mt-4 border-t border-line pt-3">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.03em]">
                    {shot.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5" data-reveal>
            <p className="mono max-w-md text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted">
              Ask for project references and site visits for work comparable to yours.
            </p>
            <QuoteButton className="link-underline shrink-0 text-[13px] font-medium">
              Discuss a project
              <WhatsApp className="h-3.5 w-3.5" />
            </QuoteButton>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell">
          <div className="grid gap-8 bg-forest p-6 text-paper sm:p-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <span className="eyebrow text-amber/80">The system behind the finish</span>
              <h2 className="h2 mt-4 text-paper">
                The finish is only
                <br />
                as good as the board.
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/60">
                Every detail above starts with the same dry, factory-finished board system.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4" data-reveal>
              <Link href="/board" className="btn btn-primary w-full">
                Explore the board
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <QuoteButton className="btn btn-ghost w-full border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-forest">
                Request a quote
                <WhatsApp className="h-4 w-4" />
              </QuoteButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
