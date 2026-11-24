import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";
import Motion from "@/components/motion";
import PageLoader from "@/components/page-loader";
import { siteUrl } from "@/lib/site";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ephtech International: Design, Construction, Interiors & Materials",
    template: "%s | Ephtech International",
  },
  description:
    "A multi-disciplinary construction, interiors, property and materials company. Ephtech International plans, builds, finishes and supplies across Lagos, Owerri and Aba.",
  keywords: [
    "Ephtech International",
    "construction company Nigeria",
    "design and build Lagos",
    "interior finishing Nigeria",
    "building materials Lagos",
    "road construction Nigeria",
    "real estate development Nigeria",
    "landscaping Lagos",
  ],
  openGraph: {
    title: "Ephtech International: Design, Construction, Interiors & Materials",
    description:
      "Design, construction, interiors, property and materials — one accountable team across Nigeria.",
    type: "website",
    locale: "en_NG",
    siteName: "Ephtech International",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2a1e",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrument.variable} ${plex.variable} ${instrumentSerif.variable}`}
    >
      <body className="grain bg-paper text-ink antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion')}}catch(e){}",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-forest focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>

        <PageLoader />
        <Header />
        {children}
        <SiteFooter />

        <Motion />
      </body>
    </html>
  );
}
