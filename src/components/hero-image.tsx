import Image from "next/image";
import heroInterior from "@/assets/images/hero-interior.jpg";
import QuoteButton from "@/components/quote-button";
import HeroVideoBackground from "@/components/hero-video-background";
import { ArrowDown } from "@/components/icons";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function HeroImage({ video = false }: { video?: boolean }) {
  return (
    <section
      id="top"
      className={`hero-image relative isolate overflow-hidden bg-forest text-paper${
        video ? " hero-image--video" : ""
      }`}
    >
      <div className="hero-image__media" aria-hidden="true">
        <div data-hero-image className="hero-image__img-wrap">
          {video ? (
            <>
              <Image
                src={heroInterior}
                alt=""
                fill
                priority
                sizes="100vw"
                className="hero-image__poster"
              />
              <HeroVideoBackground />
            </>
          ) : (
            <Image
              src={heroInterior}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-image__img"
            />
          )}
        </div>
      </div>
      <div className="hero-image__wash" aria-hidden="true" />
      <div className="hero-image__grain" aria-hidden="true" />

      <div className="hero-image__viewport relative z-10 flex flex-col">
        <div className="shell flex flex-1 flex-col pt-[clamp(120px,16vh,180px)]">
          <div className="hero-image__locations" data-hero-fade>
            Lagos, Owerri and Aba
          </div>

          <div className="hero-image__body mt-auto grid gap-10 pt-10 pb-[clamp(140px,22vh,220px)] lg:grid-cols-12 lg:items-end lg:gap-7 lg:pb-[clamp(90px,14vh,150px)]">
            <div className="lg:col-span-9">
              <h1 className="hero-image__title">
                <span className="hero-image__line">
                  <span data-hero-line>Built for</span>
                </span>
                <span className="hero-image__line">
                  <span data-hero-line>
                    <em>durability</em>
                    <span className="hero-image__dot">.</span>
                  </span>
                </span>
              </h1>

              <p data-hero-fade className="hero-image__lede mt-6">
                Ephtech Board is the dry alternative to POP, plasterboard and gypsum for
                ceilings and walls. It resists moisture, needs zero curing and is installed
                by one accountable team.
              </p>

              <div
                data-hero-fade
                className="hero-image__actions mt-7 flex flex-wrap items-center gap-x-4 gap-y-3"
              >
                <QuoteButton
                  className="btn btn-primary w-full justify-center sm:w-auto"
                  message={WHATSAPP_MESSAGES.quote}
                >
                  <span className="font-semibold tracking-[0.1em] uppercase sm:tracking-normal sm:normal-case">
                    Request a quote
                  </span>
                </QuoteButton>
                <a
                  href="#board"
                  className="btn btn-light w-full justify-center gap-2 sm:w-auto"
                >
                  See the board
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
