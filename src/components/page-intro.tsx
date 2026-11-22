import type { ReactNode } from "react";
import Link from "next/link";

export default function PageIntro({
  eyebrow,
  title,
  lede,
  note,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  note?: string;
}) {
  return (
    <section className="border-b border-line bg-paper-2">
      <div className="shell pt-[clamp(128px,17vh,184px)] pb-[clamp(56px,7vw,96px)]">
        <Link
          href="/"
          className="mono text-[10px] tracking-[0.16em] uppercase text-muted transition-colors hover:text-forest"
        >
          ← Back to home
        </Link>

        <span className="eyebrow mt-10 block text-muted">{eyebrow}</span>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[0.95] font-medium tracking-[-0.045em]">
          {title}
        </h1>
        {lede ? <p className="body-lg mt-6 max-w-2xl">{lede}</p> : null}
        {note ? (
          <p className="mono mt-6 max-w-xl text-[9px] leading-relaxed tracking-[0.12em] uppercase text-muted">
            {note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
