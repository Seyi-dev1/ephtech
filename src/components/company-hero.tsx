import Image from "next/image";
import Link from "next/link";
import companyHero from "@/assets/images/company-hero.jpg";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/icons";
import { WHATSAPP_MESSAGES, whatsappHref } from "@/lib/whatsapp";

export default function CompanyHero() {
  return (
    <section
      id="top"
      className="hero-image hero-image--video relative isolate overflow-hidden bg-forest text-paper"
    >
      <div className="hero-image__media" aria-hidden="true">
        <Image
          src={companyHero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image__poster"
        />
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
              <span
                className="mono mb-5 block text-[9px] tracking-[0.16em] uppercase text-paper/55"
                data-hero-fade
              >
                Ephtech International Limited · RC 1216055
              </span>
              <h1 className="hero-image__title">
                <span className="hero-image__line">
                  <span data-hero-line>Building a</span>
                </span>
                <span className="hero-image__line">
                  <span data-hero-line>
                    <em>better</em> tomorrow<span className="hero-image__dot">.</span>
                  </span>
                </span>
              </h1>

              <p data-hero-fade className="hero-image__lede mt-6">
                A multi-disciplinary construction, interiors, property and materials company.
                We plan, build, finish and supply — one accountable team across Nigeria.
              </p>

              <div
                data-hero-fade
                className="hero-image__actions mt-7 flex flex-wrap items-center gap-x-4 gap-y-3"
              >
                <Link
                  href="/services"
                  className="btn btn-primary w-full justify-center sm:w-auto"
                >
                  Explore our services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/projects"
                  className="btn btn-light w-full justify-center gap-2 sm:w-auto"
                >
                  See our work
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={whatsappHref(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline ml-1 hidden text-[12px] font-medium text-paper/70 sm:inline-flex"
                >
                  <WhatsApp className="h-3.5 w-3.5" />
                  Talk to the team
                </a>
              </div>

              <p
                className="mono mt-7 text-[8.5px] tracking-[0.14em] uppercase text-paper/45"
                data-hero-fade
              >
                Eight services · One accountable team
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="mono absolute right-[clamp(20px,4vw,64px)] bottom-[clamp(24px,4vw,44px)] z-10 text-[7.5px] tracking-[0.14em] uppercase text-paper/45">
        Illustrative brand image
      </span>
    </section>
  );
}
