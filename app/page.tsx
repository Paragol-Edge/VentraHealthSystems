import Hero from "@/components/Hero";
import {
  Problem,
  Solution,
  // CaseFileSummary,
  TrustBand,
  Transformation,
  Proof,
  WhyVentra,
  CTA,
} from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      {/* <CaseFileSummary /> */}
      <TrustBand />
      <Transformation />
      <Proof />
      <WhyVentra />
      <CTA />
    </main>
  );
}