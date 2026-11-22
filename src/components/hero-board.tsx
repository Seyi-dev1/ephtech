export default function HeroBoard() {
  return (
    <div className="hero-board">
      <div className="board-grid" data-board-mesh aria-hidden="true">
        <div className="board-grid__lines" />
      </div>

      <svg
        viewBox="0 150 640 385"
        className="hero-board__svg"
        role="img"
        aria-label="Axonometric drawing of the Ephtech Board system floating at an angle with dimension lines. Final dimensions are confirmed on quotation."
      >
        <defs>
          <linearGradient id="hbTop" x1="0.06" y1="0" x2="0.92" y2="1">
            <stop offset="0" stopColor="#f2ecdf" />
            <stop offset="0.45" stopColor="#e7e0d0" />
            <stop offset="1" stopColor="#d6ccb7" />
          </linearGradient>
          <linearGradient id="hbFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cdc5b2" />
            <stop offset="1" stopColor="#aca38c" />
          </linearGradient>
          <linearGradient id="hbSide" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#bcb39d" />
            <stop offset="1" stopColor="#938a74" />
          </linearGradient>
          <radialGradient id="hbSheen" cx="0.26" cy="0.18" r="0.64">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="0.6" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <pattern id="hbGrain" width="9" height="9" patternUnits="userSpaceOnUse">
            <circle cx="1.6" cy="1.6" r="0.5" fill="#3b3a32" opacity="0.12" />
            <circle cx="5.8" cy="3.8" r="0.4" fill="#3b3a32" opacity="0.09" />
            <circle cx="3.4" cy="6.8" r="0.45" fill="#ffffff" opacity="0.14" />
          </pattern>
          <filter id="hbBlur" filterUnits="userSpaceOnUse" x="-100" y="360" width="840" height="300">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* soft ground shadow — the board hangs above it */}
        <g data-board-shadow>
          <ellipse cx="340" cy="488" rx="234" ry="28" fill="#12201a" opacity="0.17" filter="url(#hbBlur)" />
          <ellipse cx="340" cy="478" rx="170" ry="15" fill="#12201a" opacity="0.15" filter="url(#hbBlur)" />
        </g>

        {/* extension lines sit behind the board */}
        <g data-board-line stroke="#0b2b20" strokeOpacity="0.3" strokeWidth="0.9" fill="none">
          <path d="M68 310 L68 196" />
          <path d="M436 232 L436 196" />
          <path d="M74 310 L30 310" />
          <path d="M240 410 L30 410" />
        </g>

        {/* slab */}
        <g data-board-skin>
          <polygon points="68,310 240,410 240,456 68,356" fill="url(#hbSide)" />
          <polygon points="240,410 608,332 608,378 240,456" fill="url(#hbFront)" />
          <polygon points="68,310 436,232 608,332 240,410" fill="url(#hbTop)" />
          <polygon points="68,310 436,232 608,332 240,410" fill="url(#hbGrain)" opacity="0.42" />
          <polygon points="240,410 608,332 608,378 240,456" fill="url(#hbGrain)" opacity="0.4" />
          <polygon points="68,310 240,410 240,456 68,356" fill="url(#hbGrain)" opacity="0.3" />
          <polygon points="68,310 436,232 608,332 240,410" fill="url(#hbSheen)" />

          <path d="M68 310 L436 232" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" fill="none" />
          <path d="M239.5 408.5 L607.5 330.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1" fill="none" />
          <path d="M68 310 L68 356" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1" fill="none" />

          <path d="M240 420 L608 342" stroke="#e3ded1" strokeOpacity="0.35" strokeWidth="1" fill="none" />
          <path d="M240 410 L608 332" stroke="#6f6a59" strokeOpacity="0.28" strokeWidth="1" fill="none" />
          <path d="M68 310 L240 410" stroke="#6f6a59" strokeOpacity="0.2" strokeWidth="1" fill="none" />
          <path d="M608 332 L608 378" stroke="#6f6a59" strokeOpacity="0.3" strokeWidth="1" />
        </g>

        {/* dimension lines + slash ticks */}
        <g data-board-line stroke="#0b2b20" strokeOpacity="0.45" strokeWidth="0.9" fill="none">
          <path d="M68 202 L436 202" />
          <path d="M63 197 L73 207" />
          <path d="M431 197 L441 207" />

          <path d="M30 310 L30 410" />
          <path d="M25 305 L35 315" />
          <path d="M25 405 L35 415" />
          <path d="M30 410 L30 428" />
        </g>

        {/* horizontal dimension labels */}
        <g data-board-label fill="#0b2b20" fillOpacity="0.72" textAnchor="middle">
          <text x="252" y="172" fontSize="20" letterSpacing="2">
            PANEL
          </text>
          <text x="252" y="188" fontSize="11" letterSpacing="2" className="hero-board__sub">
            LENGTH
          </text>
        </g>
        <g data-board-label fill="#0b2b20" fillOpacity="0.72" textAnchor="start">
          <text x="40" y="442" fontSize="20" letterSpacing="2">
            PANEL
          </text>
          <text x="40" y="458" fontSize="11" letterSpacing="2" className="hero-board__sub">
            WIDTH
          </text>
        </g>

        {/* thickness / core callout */}
        <g>
          <path
            data-board-line
            d="M540 366 L596 470"
            stroke="#e9a23b"
            strokeWidth="1"
            fill="none"
          />
          <circle data-board-dot cx="540" cy="366" r="2.6" fill="#e9a23b" />
          <g data-board-label>
            <text
              x="606"
              y="486"
              textAnchor="end"
              fontSize="20"
              letterSpacing="2"
              fill="#8a5a12"
            >
              CORE
            </text>
            <text
              x="606"
              y="502"
              textAnchor="end"
              fontSize="11"
              letterSpacing="2"
              fill="#0b2b20"
              fillOpacity="0.78"
              className="hero-board__sub"
            >
              ENGINEERED CORE
            </text>
          </g>
        </g>

        {/* drawing title block */}
        <g className="hero-board__sheet">
          <g data-board-line>
            <rect
              x="450"
              y="162"
              width="186"
              height="52"
              fill="none"
              stroke="#0b2b20"
              strokeOpacity="0.28"
            />
            <line x1="450" y1="186" x2="636" y2="186" stroke="#0b2b20" strokeOpacity="0.22" />
          </g>
          <g data-board-label>
            <text x="460" y="179" fontSize="11" letterSpacing="2" fill="#0b2b20" fillOpacity="0.78">
              EPHTECH BOARD
            </text>
            <text
              x="626"
              y="179"
              textAnchor="end"
              fontSize="9"
              letterSpacing="1.5"
              fill="#0b2b20"
              fillOpacity="0.6"
            >
              01
            </text>
            <text
              x="460"
              y="202"
              fontSize="9"
              letterSpacing="1.4"
              fill="#0b2b20"
              fillOpacity="0.7"
            >
              DIMENSIONS ON QUOTATION
            </text>
          </g>
        </g>
      </svg>

      <div className="board-grid__lines board-grid__lens" aria-hidden="true" />
    </div>
  );
}
