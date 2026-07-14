"use client";

import Image from "next/image";
import { useReveal, SectionHeading, ImageBand } from "@/components/ui";
import { Compass, HeartHandshake, ShieldCheck, Layers, Stethoscope, ArrowRight } from "lucide-react";

export default function AboutContent() {
  return (
    <main>
      <AboutHero />
      <Origin />
      <Values />
      <OrgStructure />
      <Leadership />
      <Specialties />
      <Compliance />
    </main>
  );
}

function AboutHero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-ink text-offwhite relative overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
          alt="Minimal clinical interior"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div ref={ref} className="relative mx-auto max-w-4xl px-6 md:px-10 pt-24 pb-24 md:pt-32 md:pb-32 text-center">
        <p className="reveal eyebrow text-brass mb-6">About Ventra</p>
        <h1 className="reveal font-display text-4xl md:text-6xl leading-[1.05]">
          Infrastructure, not headcount.
        </h1>
        <p className="reveal text-[#C7CDD6] max-w-xl mx-auto mt-6 text-lg leading-relaxed">
          Ventra exists to separate clinical judgment from documentation
          execution — permanently, structurally, and without touching your
          reviewers authority.
        </p>
      </div>
    </section>
  );
}

function Origin() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading eyebrow="Origin" title="Why Ventra exists." />
          <p className="reveal text-steel leading-relaxed mb-4">
            Every peer review organization we studied solved reviewer overload
            the same way — hire more physicians, or ask existing reviewers to
            write faster. Both scale cost linearly with case volume. Neither
            fixes the underlying problem.
          </p>
          <p className="reveal text-steel leading-relaxed">
            The problem is structural: one role, credentialed for judgment, is
            being asked to also perform narrative execution. Ventra was built
            on a single premise — separate the two jobs, and the constraint
            disappears.
          </p>
        </div>
        <ImageBand
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
          alt="Laptop and stethoscope on a desk, representing clinical documentation work"
          caption="Documentation execution, handled by a dedicated physician team so your reviewers are left with exactly one job."
        />
      </div>
    </section>
  );
}

function Values() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { icon: Compass, title: "Clinical Authority Remains Yours", body: "Your reviewers retain full clinical ownership, decision-making authority, and final sign-off on every case." },
    { icon: ShieldCheck, title: " Consistent Reviewer-ready Documentation", body: "Every draft is physician-authored, quality-reviewed, and delivered in a standardized, guideline-aligned format." },
    { icon: HeartHandshake, title: " Completely Invisible", body: "NDA-first engagement. Fully white-label. Every deliverable is branded as your own own, we stay invisible while you remain the trusted face of the work." },
    { icon: Layers, title: "Quality that scales", body: "As volume grows, documentation quality, consistency, and turnaround remain unchanged." },
  ];
  return (
    <section className="bg-ink text-offwhite py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Values" title="What doesn't change, whatever the volume." dark />
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="reveal border border-offwhite/15 rounded-md p-6">
              <it.icon className="w-5 h-5 text-white mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2">{it.title}</h3>
              <p className="text-[#C7CDD6] text-sm leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrgStructure() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading eyebrow="Organization" title="Operational management, separated from clinical execution." />
        <div className="reveal border border-steel/20 rounded-md overflow-hidden">
          <div className="bg-ink text-offwhite text-center py-4 font-display">Founder / CEO</div>
          <div className="grid md:grid-cols-3 border-t border-steel/20">
            {[
              { role: "Head of Medical Services", teams: ["Senior Physician Reviewers", "Physician Writers"] },
              { role: "Head of Operations", teams: ["Case Intake Coordinators", "Client Relations Managers"] },
              { role: "Head of Compliance, Legal & Technical", teams: ["Technical & Compliance", "Legal"] },
            ].map((col, i) => (
              <div key={col.role} className={`p-6 ${i > 0 ? "md:border-l border-steel/20" : ""}`}>
                <p className="font-display text-base mb-4">{col.role}</p>
                {col.teams.map((t) => (
                  <p key={t} className="text-sm text-steel py-1 border-t border-steel/10 first:border-0">
                    {t}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-ink text-offwhite py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <div className="reveal relative h-72 md:h-96 rounded-md overflow-hidden border border-offwhite/10 order-2 md:order-1">
          <Image
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1200&q=80"
            alt="Physician holding a stethoscope"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        <div className="order-1 md:order-2">
          <SectionHeading eyebrow="Physician Team" title="Physician-led authorship, at every stage." dark />
          <p className="reveal text-[#C7CDD6] leading-relaxed">
            Every draft is produced by an ECFMG-certified or U.S.-licensed
            physician writer, matched to the case by specialty, and
            independently reviewed by a senior physician before it reaches
            you. No draft ships without a second clinical set of eyes.
          </p>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  const ref = useReveal<HTMLDivElement>();
  const specialties = ["Orthopedics", "Cardiology", "Neurology", "Pulmonology", "Occupational Medicine", "Gastroenterology", "General Surgery"];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Coverage" title="Expertise across all major medical specialties, including orthopedics, cardiology, neurology, pulmonology, occupational medicine, gastroenterology, general surgery, and more." />
        <div className="reveal flex flex-wrap gap-3">
          {specialties.map((s) => (
            <span key={s} className="border border-steel/25 rounded-full px-5 py-2 text-sm font-mono">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-ink text-offwhite py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-6 md:px-10 text-center">
        <Stethoscope className="w-8 h-8 text-brass mx-auto mb-6" strokeWidth={1.5} />
        <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
          NDA and confidentiality, before any case material changes hands.
        </h2>
        <p className="text-[#C7CDD6] leading-relaxed mb-10">
          Staff work under a standing non-disclosure clause covering every
          claimant whose case we touch. Your identity as our client is never
          disclosed to a third party, including the claimant.
        </p>
        <a href="/service" className="inline-flex items-center gap-2 bg-brass text-ink px-7 py-4 rounded-sm hover:bg-brass/90 transition-colors font-medium">
          See the service in detail <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}