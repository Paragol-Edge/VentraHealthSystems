// app/page.tsx
import Hero from "@/components/Hero";
import { Problem, Solution, Transformation, Process, Proof, WhyVentra, CTA, TrustBand } from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <TrustBand />
      <Transformation />
      <Process />
      <Proof />
      <WhyVentra />
      <CTA />
    </main>
  );
}