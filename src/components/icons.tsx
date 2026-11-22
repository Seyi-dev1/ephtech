type IconProps = { className?: string };

export function ArrowUpRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M2.5 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ArrowDown({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M8 2.5V13M8 13L3.5 8.5M8 13L12.5 8.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Plus({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Minus({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3 8h10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Close({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Menu({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M3 6h14M3 10h14M3 14h9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Phone({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5.6 2.5H3.2c-.4 0-.7.3-.7.7 0 5.6 4.6 10.2 10.2 10.2.4 0 .7-.3.7-.7v-2.4l-2.7-.8-1.1 1.5a8.6 8.6 0 0 1-4.7-4.7l1.5-1.1-.8-2.7Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsApp({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.38 5.1L2 22l5.2-1.53a9.9 9.9 0 0 0 4.84 1.25h.01c5.44 0 9.84-4.4 9.84-9.84S17.49 2 12.04 2Zm0 18a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3.08.9.92-3-.2-.32a8.13 8.13 0 0 1-1.25-4.33c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.22.85 5.76 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.15-8.16 8.15Zm4.48-6.1c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.55.13-.17.24-.63.8-.77.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.97-1.22-.73-.65-1.22-1.46-1.36-1.7-.14-.25-.02-.38.1-.5.12-.12.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.13.17 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z" />
    </svg>
  );
}

export function Check({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Download({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M8 2v8M8 10l3-3M8 10L5 7M2.5 13h11" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function Mail({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <rect x="1.8" y="3.5" width="12.4" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.2 4.2 8 8.6l5.8-4.4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
