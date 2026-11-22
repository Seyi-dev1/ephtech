const NIGERIA_PATH =
  "M 293.7 511.3 L 244.8 530.7 L 226.9 527.9 L 208.8 540.0 L 171.1 538.8 L 145.9 505.0 L 130.3 465.9 L 97.0 430.3 L 61.6 431.0 L 20.0 431.0 L 22.7 343.9 L 21.5 309.5 L 30.4 275.4 L 44.9 258.9 L 67.8 225.4 L 62.8 210.9 L 72.1 189.2 L 61.5 157.1 L 63.3 139.2 L 66.6 90.9 L 80.1 69.2 L 86.7 38.1 L 99.0 26.4 L 149.6 20.0 L 196.9 40.2 L 214.5 60.6 L 238.6 61.5 L 260.9 48.2 L 317.9 76.1 L 342.0 74.8 L 369.7 51.8 L 397.4 53.4 L 411.0 45.9 L 436.3 49.0 L 472.8 64.8 L 509.6 34.6 L 520.7 36.7 L 552.6 95.9 L 561.3 94.7 L 580.0 116.2 L 574.9 126.0 L 572.4 143.9 L 532.7 185.7 L 520.2 220.2 L 513.6 248.3 L 503.6 260.3 L 494.1 298.1 L 468.9 320.4 L 461.6 347.7 L 451.0 369.5 L 446.6 391.9 L 414.2 410.1 L 387.8 387.9 L 369.9 388.8 L 341.9 420.5 L 328.2 420.9 L 305.8 473.1 L 293.7 511.3 Z";

const nodes = [
  {
    name: "Lagos",
    sub: "6.52° N",
    x: 52,
    y: 417,
    labelX: 52,
    labelY: 398,
    anchor: "start" as const,
  },
  {
    name: "Owerri",
    sub: "5.48° N",
    x: 225,
    y: 473,
    labelX: 209,
    labelY: 454,
    anchor: "end" as const,
  },
  {
    name: "Aba",
    sub: "5.12° N",
    x: 240,
    y: 493,
    labelX: 254,
    labelY: 503,
    anchor: "start" as const,
  },
];

const references = [
  { name: "KANO", x: 294, y: 128 },
  { name: "ABUJA", x: 242, y: 279 },
];

export default function NigeriaMap() {
  return (
    <svg
      viewBox="0 0 600 560"
      className="h-full w-full"
      role="img"
      aria-label="Map of Nigeria showing Ephtech branches in Lagos, Owerri and Aba, with a supply route between them."
    >
      <defs>
        <linearGradient id="mapFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7f3e9" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#f7f3e9" stopOpacity="0.015" />
        </linearGradient>
        <filter id="mapGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* graticule */}
      <g stroke="#f7f3e9" strokeWidth="0.5" opacity="0.06">
        {[100, 200, 300, 400, 500].map((x) => (
          <line key={`x-${x}`} x1={x} y1="0" x2={x} y2="560" />
        ))}
        {[100, 200, 300, 400, 500].map((y) => (
          <line key={`y-${y}`} x1="0" y1={y} x2="600" y2={y} />
        ))}
      </g>

      <path
        d={NIGERIA_PATH}
        fill="url(#mapFill)"
        stroke="#f7f3e9"
        strokeOpacity="0.28"
        strokeWidth="1"
      />

      {/* reference cities */}
      {references.map((city) => (
        <g key={city.name} opacity="0.32">
          <circle cx={city.x} cy={city.y} r="1.8" fill="#f7f3e9" />
          <text
            x={city.x + 6}
            y={city.y + 3}
            fill="#f7f3e9"
            fontFamily="var(--font-plex), monospace"
            fontSize="7"
            letterSpacing="1.2"
          >
            {city.name}
          </text>
        </g>
      ))}

      {/* supply route */}
      <path
        d="M 52 417 Q 120 452 225 473 Q 234 483 240 493"
        fill="none"
        stroke="var(--amber)"
        strokeOpacity="0.55"
        strokeWidth="1"
        className="route"
      />

      {nodes.map((node) => (
        <g key={node.name}>
          <circle
            cx={node.x}
            cy={node.y}
            r="9"
            fill="var(--amber)"
            opacity="0.35"
            className="map-pulse"
            filter="url(#mapGlow)"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill="none"
            stroke="var(--amber)"
            strokeOpacity="0.35"
          />
          <circle cx={node.x} cy={node.y} r="3.2" fill="var(--amber)" />
          <text
            x={node.labelX}
            y={node.labelY}
            fill="#f7f3e9"
            fontFamily="var(--font-plex), monospace"
            fontSize="9.5"
            letterSpacing="1.5"
            textAnchor={node.anchor}
          >
            {node.name.toUpperCase()}
          </text>
          <text
            x={node.labelX}
            y={node.labelY + 12}
            fill="#f7f3e9"
            opacity="0.4"
            fontFamily="var(--font-plex), monospace"
            fontSize="7.5"
            letterSpacing="1.1"
            textAnchor={node.anchor}
          >
            {node.sub}
          </text>
        </g>
      ))}

      {/* compass */}
      <g opacity="0.35">
        <line
          x1="566"
          y1="76"
          x2="566"
          y2="42"
          stroke="#f7f3e9"
          strokeWidth="0.8"
        />
        <path d="M566 38l-3.5 7h7z" fill="#f7f3e9" />
        <text
          x="566"
          y="88"
          fill="#f7f3e9"
          fontFamily="var(--font-plex), monospace"
          fontSize="7"
          letterSpacing="1.2"
          textAnchor="middle"
        >
          N
        </text>
      </g>

      {/* scale */}
      <g opacity="0.3">
        <line x1="20" y1="544" x2="98" y2="544" stroke="#f7f3e9" strokeWidth="0.8" />
        <line x1="20" y1="539" x2="20" y2="549" stroke="#f7f3e9" strokeWidth="0.8" />
        <line x1="98" y1="539" x2="98" y2="549" stroke="#f7f3e9" strokeWidth="0.8" />
        <text
          x="108"
          y="547"
          fill="#f7f3e9"
          fontFamily="var(--font-plex), monospace"
          fontSize="7"
          letterSpacing="1.2"
        >
          300 KM
        </text>
      </g>
    </svg>
  );
}
