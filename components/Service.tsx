"use client";

import Image from "next/image";
import { useReveal, SectionHeading } from "@/components/ui";
import { FileText, ShieldCheck, Clock, Layers, ArrowRight, HelpCircle } from "lucide-react";

export default function ServiceContent() {
  return (
    <main>
      <ServiceHero />
      <Included />
      <Pathway />
      <SpecialtyGrid />
      <Pricing />
      <FAQ />
      <ServiceCTA />
    </main>
  );
}

function ServiceHero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-ink text-offwhite relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="reveal eyebrow text-brass mb-6">The Service</p>
          <h1 className="reveal font-display text-4xl md:text-5xl leading-[1.05] mb-6">
            Documentation execution, fully offloaded.
          </h1>
          <p className="reveal text-[#C7CDD6] leading-relaxed max-w-md">
            A fixed 24–36 hour turnaround SLA, dual-physician QC on every
            case, and zero Ventra identifiers in what you deliver.
          </p>
        </div>
        <div className="reveal relative h-64 md:h-80 rounded-md overflow-hidden border border-offwhite/10">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
            alt="Stethoscope resting on a clinical desk"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      </div>
    </section>
  );
}

function Included() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { icon: FileText, title: "Full narrative drafting", body: "Clinical summary, guideline-mapped reasoning, and conclusion — structured for reviewer endorsement." },
    { icon: ShieldCheck, title: "Dual-physician QC", body: "Every draft independently reviewed by a senior physician for accuracy and defensibility before delivery." },
    { icon: Clock, title: "Fixed turnaround SLA", body: "24–36 hours, written into the contract — independent of your internal volume that week." },
    { icon: Layers, title: "No-charge clarification", body: "Clarification responses within the SLA window at no additional cost." },
  ];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="What's Included" title="Everything reviewer-ready, on delivery." />
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="reveal border border-steel/20 rounded-md p-6 bg-offwhite">
              <it.icon className="w-5 h-5 text-brass mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2">{it.title}</h3>
              <p className="text-steel text-sm leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pathway() {
  const ref = useReveal<HTMLDivElement>();
  const stages = [
    ["01", "Intake", "T+0"],
    ["02", "Triage", "T+1hr"],
    ["03", "Analysis", "T+4–8hrs"],
    ["04", "Drafting", "T+8–16hrs"],
    ["05", "QC", "T+16–20hrs"],
    ["06", "Delivery", "T+24hrs"],
  ];
  return (
    <section className="bg-ink text-offwhite py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Case Pathway" title="A timeline built to be tracked." dark />
        <div className="reveal grid grid-cols-3 md:grid-cols-6 gap-4">
          {stages.map(([n, title, time]) => (
            <div key={n} className="border-t border-brass pt-4">
              <p className="font-mono text-brass text-xs mb-1">{n}</p>
              <p className="font-display text-base">{title}</p>
              <p className="font-mono text-[10px] text-[#7C8595]">{time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialtyGrid() {
  const ref = useReveal<HTMLDivElement>();
  const rows = [
    ["Orthopedics", "MSK injury, surgical necessity"],
    ["Cardiology", "Cardiac risk and intervention review"],
    ["Neurology", "Neurological injury and treatment necessity"],
    ["Pulmonology", "Respiratory and occupational exposure cases"],
    ["Occupational Medicine", "Workers' comp and fitness-for-duty review"],
    ["Gastroenterology", "GI diagnostic and treatment necessity"],
  ];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Specialty Depth" title="Case complexity, matched to writer expertise." />
        <div className="reveal border border-steel/20 rounded-md overflow-hidden">
          {rows.map(([spec, desc]) => (
            <div key={spec} className="grid sm:grid-cols-2 border-t border-steel/15 first:border-0">
              <div className="p-4 font-display">{spec}</div>
              <div className="p-4 text-sm text-steel">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-ink text-offwhite py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <SectionHeading eyebrow="Pilot Offer" title="Test the model before any volume commitment." dark />
        <p className="reveal text-[#C7CDD6] leading-relaxed max-w-xl mx-auto mb-8">
          10–25 cases at standard rates, with full SLA and QC guarantees.
          You are not asked to trust the model — you are asked to test it
          against your own quality bar first.
        </p>
        <a href="/contact" className="reveal inline-flex items-center gap-2 bg-brass text-ink px-7 py-4 rounded-sm hover:bg-brass/90 transition-colors font-medium">
          Request pilot terms <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

function FAQ() {
  const ref = useReveal<HTMLDivElement>();
  const faqs = [
    ["Does anything change about who signs off on a case?", "No. Your reviewers keep full clinical authority and final sign-off — only who produces the supporting document changes."],
    ["What happens if a draft needs a revision?", "Clarification responses are provided at no charge within the SLA window."],
    ["Will our client ever see Ventra's name?", "No. The service is true white-label — zero Ventra identifiers appear in delivered documents."],
  ];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-3xl px-6 md:px-10">
        <SectionHeading eyebrow="FAQ" title="Common questions before a pilot." />
        <div className="space-y-6">
          {faqs.map(([q, a]) => (
            <div key={q} className="reveal border-b border-steel/15 pb-6">
              <div className="flex gap-3 mb-2">
                <HelpCircle className="w-5 h-5 text-brass shrink-0" strokeWidth={1.5} />
                <p className="font-display text-lg">{q}</p>
              </div>
              <p className="text-steel text-sm leading-relaxed pl-8">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-ink text-offwhite py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-6 md:px-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">Ready to see it on a real case?</h2>
        <a href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 rounded-sm hover:bg-offwhite/90 transition-colors font-medium">
          Schedule a discovery call <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}