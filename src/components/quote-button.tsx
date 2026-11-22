import type { ReactNode } from "react";
import { WHATSAPP_MESSAGES, whatsappHref } from "@/lib/whatsapp";

export default function QuoteButton({
  children,
  className = "btn btn-primary",
  message = WHATSAPP_MESSAGES.quote,
}: {
  children: ReactNode;
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> on WhatsApp</span>
    </a>
  );
}
