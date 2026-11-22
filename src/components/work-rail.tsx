import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import cathedralCeiling from "@/assets/images/cathedral-ceiling.jpg";
import boardProduct from "@/assets/images/board-product.jpg";
import { ArrowUpRight } from "@/components/icons";
import RailVideo from "@/components/rail-video";

type RailItem = {
  label: string;
  title: string;
  href: string;
  alt: string;
  image?: StaticImageData;
  video?: string;
  poster?: string;
};

const items: RailItem[] = [
  {
    label: "Completed installation",
    title: "Cathedral ceiling",
    href: "/projects",
    image: cathedralCeiling,
    alt: "Completed cathedral ceiling with a suspended grid and a feature cross.",
  },
  {
    label: "The product",
    title: "Ephtech Board",
    href: "/board",
    image: boardProduct,
    alt: "Stack of Ephtech boards showing the factory-finished face.",
  },
  {
    label: "On site",
    title: "Installation in progress",
    href: "/projects",
    video:
      "https://res.cloudinary.com/drikcqdzp/video/upload/w_640,q_auto,f_auto/ephtech/videos/ephtech-board-installation.mp4",
    poster: "/videos/ephtech-board-installation-poster.jpg",
    alt: "Ephtech board being installed on a ceiling.",
  },
];

export default function WorkRail() {
  return (
    <section aria-label="Product and site work" className="border-b border-line bg-paper">
      <div className="shell py-5 sm:py-7">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="eyebrow text-muted">Product &amp; site work</span>
          <Link href="/projects" className="link-underline text-[12px] font-medium">
            See all
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group min-w-[84%] snap-start sm:min-w-0"
            >
              <div className="media relative aspect-[4/5] overflow-hidden sm:aspect-[4/3]">
                {item.video && item.poster ? (
                  <RailVideo src={item.video} poster={item.poster} label={item.alt} />
                ) : item.image && typeof item.image === "string" ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 84vw, 33vw"
                    className="photo-grade object-cover"
                  />
                ) : item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 84vw, 33vw"
                    placeholder="blur"
                    className="photo-grade object-cover"
                  />
                ) : null}
                <span className="mono absolute top-3 left-3 bg-paper/92 px-2 py-1 text-[8px] tracking-[0.14em] uppercase text-ink">
                  {item.label}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-2.5">
                <span className="font-display text-lg font-medium tracking-[-0.02em]">
                  {item.title}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-forest" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
