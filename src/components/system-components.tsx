import QuoteButton from "@/components/quote-button";
import { WhatsApp } from "@/components/icons";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { systemComponents } from "@/lib/systems";

export default function SystemComponents() {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <span className="eyebrow text-muted">System components</span>
        <h3 className="h3 mt-3 max-w-md">One board. One complete system.</h3>
        <p className="body-lg mt-5 max-w-md">
          Boards, grid, framing and finishing, specified together so nothing is
          missing on site.
        </p>

        <QuoteButton
          className="btn btn-ghost mt-7 w-full justify-center sm:w-auto"
          message={WHATSAPP_MESSAGES.system}
        >
          Request the full system
          <WhatsApp className="h-3.5 w-3.5" />
        </QuoteButton>

        <p className="mono mt-4 text-[9px] leading-relaxed tracking-[0.1em] uppercase text-muted">
          Supplied as one system. Quantities confirmed on WhatsApp.
        </p>
      </div>

      <div className="lg:col-span-7">
        <div className="grid gap-x-10 sm:grid-cols-2">
          {systemComponents.map((component, index) => (
            <div key={component.name} className="border-t border-line py-5">
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <span className="mono pt-1 text-[10px] tracking-[0.14em] text-muted">
                  0{index + 1}
                </span>
                <div>
                  <h4 className="font-display text-lg font-medium tracking-[-0.02em]">
                    {component.name}
                  </h4>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                    {component.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
