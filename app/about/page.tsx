// app/about/page.tsx
import type { Metadata } from "next";
import AboutContent from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description: "Ventra Health Systems separates clinical judgment from documentation execution — physician-led, white-label, and confidential.",
};

export default function AboutPage() {
  return <AboutContent />;
}