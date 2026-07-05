import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://ventrahealthsystems.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ventra Health Systems | The Documentation Layer for Clinical Review",
    template: "%s | Ventra Health Systems",
  },
  description:
    "Ventra Health Systems is the confidential, physician-authored documentation layer behind peer review and utilization management operations. 24–36h turnaround, 100% dual-physician QC, true white-label.",
  keywords: [
    "peer review documentation",
    "utilization management",
    "physician drafting service",
    "white label clinical review",
    "IME narrative drafting",
    "clinical documentation outsourcing",
  ],
  openGraph: {
    title: "Ventra Health Systems | The Documentation Layer for Clinical Review",
    description:
      "Reviewers decide. Ventra writes. Your client never knows we exist. Physician-authored, white-label clinical documentation with a fixed turnaround SLA.",
    url: siteUrl,
    siteName: "Ventra Health Systems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ventra Health Systems",
    description: "The documentation layer for clinical review operations.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ventra Health Systems",
    url: siteUrl,
    description:
      "Physician-authored, white-label documentation service for peer review and utilization management companies.",
    areaServed: "US",
    email: "admin@ventrahealthsystems.com",
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}