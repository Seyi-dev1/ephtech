import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

const rows = [
  {
    label: "Durability & strength",
    usual: "Brittle. Cracks, sags and chips under movement.",
    ephtech: "High impact resistance and structural stability.",
  },
  {
    label: "Moisture & climate",
    usual: "Absorbs humidity; stains, softens and moulds.",
    ephtech: "Formulated for humid Nigerian conditions; resists swelling and staining.",
  },
  {
    label: "Installation speed",
    usual: "Wet trade, scaffolding, curing and sanding.",
    ephtech: "Dry fit, joint and finish. Zero curing downtime.",
  },
  {
    label: "Surface finish",
    usual: "Depends on artisan skill; extensive sanding.",
    ephtech: "Factory-smooth face, ready for jointing, priming and paint.",
  },
  {
    label: "Lifecycle cost",
    usual: "Breakage, repairs and repainting over time.",
    ephtech: "Minimal site wastage and low long-term maintenance.",
  },
];

export default function Comparison() {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <span className="eyebrow text-muted">01: The problem, solved</span>
        <h2 className="h2 mt-5 max-w-sm">
          POP cracks.
          <br />
          Gypsum swells.
          <br />
          <span className="text-ink/35">You pay twice.</span>
        </h2>
        <p className="body-lg mt-5 max-w-sm">
          Five points that decide how a ceiling performs, and how often it needs attention.
        </p>
        <p className="mono mt-6 hidden max-w-xs text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted lg:block">
          Based on typical material performance. Project conditions vary; we specify to your
          drawings.
        </p>
      </div>

      <div className="lg:col-span-7">
        <div className="border-t border-line">
          {rows.map((row, index) => (
            <div key={row.label} className="border-b border-line py-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-medium tracking-[-0.02em]">
                  {row.label}
                </h3>
                <span className="mono text-[8.5px] tracking-[0.14em] text-muted">
                  0{index + 1}
                </span>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-6">
                <div className="bg-paper-2 px-3.5 py-3">
                  <span className="mono text-[8px] tracking-[0.14em] uppercase text-muted">
                    POP / gypsum
                  </span>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{row.usual}</p>
                </div>
                <div className="border-l-2 border-amber pl-4">
                  <span className="mono text-[8px] tracking-[0.14em] uppercase text-forest/70">
                    Ephtech Board
                  </span>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink/70">{row.ephtech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mono mt-5 text-[8.5px] leading-relaxed tracking-[0.12em] uppercase text-muted lg:hidden">
          Based on typical material performance. Project conditions vary; we specify to your
          drawings.
        </p>
        <div className="mt-7 border-t border-line pt-5">
          <Link href="#board" className="link-underline text-[13px] font-medium">
            See the board
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
