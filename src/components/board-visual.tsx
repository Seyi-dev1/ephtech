import { specByKey } from "@/lib/product";

function Slab({ y = 0, dim = 1, lineColor = "#f7f3e9" }: { y?: number; dim?: number; lineColor?: string }) {
  return (
    <g transform={`translate(0 ${y})`} opacity={dim}>
      <polygon points="110,150 220,210 220,246 110,186" fill="url(#boardSide)" />
      <polygon points="220,210 540,150 540,186 220,246" fill="url(#boardFront)" />
      <polygon points="110,150 430,90 540,150 220,210" fill="url(#boardTop)" />

      <line
        x1="220"
        y1="210"
        x2="540"
        y2="150"
        stroke="var(--amber)"
        strokeWidth="1.4"
        opacity="0.9"
      />
      <line x1="220" y1="226" x2="540" y2="166" stroke={lineColor} strokeWidth="0.8" opacity="0.22" />
      <line x1="220" y1="237" x2="540" y2="177" stroke={lineColor} strokeWidth="0.8" opacity="0.14" />
      <line x1="110" y1="186" x2="220" y2="246" stroke={lineColor} strokeWidth="0.8" opacity="0.12" />
    </g>
  );
}

export default function BoardVisual({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  const lineColor = light ? "#0a2a1e" : "#f7f3e9";
  const thickness = specByKey("thickness");
  const panelSize = specByKey("panelSize");
  const dimensionsConfirmed = Boolean(thickness?.confirmed && panelSize?.confirmed);
  const dimensionNote = dimensionsConfirmed
    ? `${thickness?.value} millimetres thick and ${panelSize?.value} millimetres`
    : "with a factory-finished face";
  const verticalLabelSize = compact ? 14 : 9;
  const labelSize = compact ? 16 : 9;
  const noteSize = compact ? 12 : 7;
  const annotationSize = compact ? 13 : 8;

  return (
    <div className="relative w-full">
      <div
        className="pointer-events-none absolute inset-1/4 -z-0 rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(232,163,61,0.18), transparent 65%)" }}
        aria-hidden="true"
      />
      <svg
        viewBox={compact ? "52 8 506 474" : "0 0 600 470"}
        className="relative z-10 w-full"
        role="img"
        aria-label={`Technical illustration of a stacked Ephtech Board cross-section ${dimensionNote}.`}
      >
        <defs>
          <linearGradient id="boardTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#faf5e9" />
            <stop offset="55%" stopColor="#e7ddc7" />
            <stop offset="100%" stopColor="#cfc3a8" />
          </linearGradient>
          <linearGradient id="boardFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d9ccb0" />
            <stop offset="100%" stopColor="#bdaf92" />
          </linearGradient>
          <linearGradient id="boardSide" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c4b698" />
            <stop offset="100%" stopColor="#a4967a" />
          </linearGradient>
        </defs>

        {/* registration marks */}
        <g stroke={lineColor} strokeWidth="0.7" opacity="0.18">
          <path d="M20 30h10M25 25v10" />
          <path d="M570 30h10M575 25v10" />
          <path d="M20 440h10M25 435v10" />
          <path d="M570 440h10M575 435v10" />
        </g>

        <g className="board-float">
          <Slab y={156} dim={0.86} lineColor={lineColor} />
          <Slab y={78} dim={0.94} lineColor={lineColor} />
          <Slab y={0} dim={1} lineColor={lineColor} />
        </g>

        {/* vertical dimension */}
        <g stroke={lineColor} strokeWidth="0.7" opacity="0.38">
          <line x1="86" y1="150" x2="86" y2="246" />
          <line x1="80" y1="150" x2="92" y2="150" />
          <line x1="80" y1="246" x2="92" y2="246" />
        </g>
        <text
          x={compact ? 70 : 74}
          y="198"
          fill={lineColor}
          opacity={compact ? 0.62 : 0.5}
          fontFamily="var(--font-plex), monospace"
          fontSize={verticalLabelSize}
          letterSpacing={compact ? 1.2 : 1.6}
          textAnchor="middle"
          transform={`rotate(-90 ${compact ? 70 : 74} 198)`}
        >
          {thickness?.confirmed ? thickness.value.toUpperCase() : "ENGINEERED CORE"}
        </text>

        {/* horizontal dimension */}
        <g stroke={lineColor} strokeWidth="0.7" opacity="0.38">
          <line x1="110" y1="432" x2="540" y2="432" />
          <line x1="110" y1="426" x2="110" y2="438" />
          <line x1="540" y1="426" x2="540" y2="438" />
        </g>
        <text
          x="325"
          y={compact ? 446 : 452}
          fill={lineColor}
          opacity={compact ? 0.62 : 0.5}
          fontFamily="var(--font-plex), monospace"
          fontSize={labelSize}
          letterSpacing={compact ? 1.2 : 1.6}
          textAnchor="middle"
        >
          {panelSize?.confirmed ? panelSize.value.toUpperCase() : "PANEL SYSTEM"}
        </text>
        {!dimensionsConfirmed ? (
          <text
            x="325"
            y={compact ? 468 : 463}
            fill={lineColor}
            opacity={compact ? 0.52 : 0.36}
            fontFamily="var(--font-plex), monospace"
            fontSize={noteSize}
            letterSpacing={compact ? 1 : 1.4}
            textAnchor="middle"
          >
            DIMENSIONS CONFIRMED ON QUOTATION
          </text>
        ) : null}

        {/* annotations */}
        <g opacity={compact ? 0.75 : 0.62}>
          <circle cx="330" cy="109" r="2.6" fill="var(--amber)" />
          <line x1="330" y1="109" x2="330" y2="70" stroke={lineColor} strokeWidth="0.7" />
          <text
            x="330"
            y="58"
            fill={lineColor}
            fontFamily="var(--font-plex), monospace"
            fontSize={annotationSize}
            letterSpacing={compact ? 1.1 : 1.5}
            textAnchor="middle"
          >
            FACTORY-FINISHED FACE
          </text>
        </g>

      </svg>
    </div>
  );
}
