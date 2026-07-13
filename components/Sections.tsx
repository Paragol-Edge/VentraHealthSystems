"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import {
  AlertTriangle,
  FileWarning,
  Gauge,
  Users,
  ArrowRight,
  CheckCircle2,
  // Check,
  Building2,
  ShieldCheck,
  ClipboardCheck,
  Stethoscope,
  Layers,
} from "lucide-react";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const root = ref.current!;
      const targets = root.matches(".reveal")
        ? [root, ...gsap.utils.toArray<HTMLElement>(".reveal", root)]
        : gsap.utils.toArray<HTMLElement>(".reveal", root);

      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return ref;
}

function SectionHeading({ eyebrow, title, dark }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className={`eyebrow mb-4 ${dark ? "text-white/70" : "text-black/70"}`}>{eyebrow}</p>
      <h2 className={`font-display text-3xl md:text-4xl leading-tight ${dark ? "text-white" : ""}`}>{title}</h2>
    </div>
  );
}

export function Problem() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { icon: Users, title: "Reviewer fatigue drives turnover", body: "High-volume documentation work erodes clinical focus and accelerates burnout among your most credentialed physicians." },
    { icon: AlertTriangle, title: "Inconsistent narratives create appeal exposure", body: "In lines where appeal rates already run 15–20%, language quality varying by reviewer is the difference between a defensible file and a costly one." },
    { icon: FileWarning, title: "Weak documentation becomes downstream liability", body: "Narratives not structured for audit or litigation fail later — when a case is already in dispute and a rewrite is most expensive." },
    { icon: Gauge, title: "Physician writing time inflates cost per case", body: "Every hour a reviewer spends formatting a narrative is an hour not spent on the judgment your organization is paid for." },
  ];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="01 · The Problem" title="Physicians are reviewing less and writing more." />
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="reveal border border-black/15 rounded-md p-6 bg-white">
              <it.icon className="w-5 h-5 text-black mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2">{it.title}</h3>
              <p className="text-steel text-sm leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Solution() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    "Eliminates the clinical rewriting loop — drafts arrive reviewer-ready.",
    "Standardizes narrative quality against one guideline-mapped structure.",
    "Removes hiring as the constraint on volume — capacity scales with case count.",
    "Redirects physician hours from formatting to the decisions clients pay for.",
  ];
  return (
    <section id="solution" className="bg-ink text-white py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-14 items-start">
        <div className="reveal">
          <p className="eyebrow text-white/70 mb-4">02 · The Solution</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
            Ventra is the documentation layer for clinical review operations.
          </h2>
          <p className="text-white/70 leading-relaxed">
            Not a staffing vendor. Not an outsourcing shop. Infrastructure that
            sits behind your review operation, absorbing documentation
            execution so your reviewers are left with exactly one job: deciding.
          </p>
        </div>
        <ul className="space-y-5">
          {items.map((t) => (
            <li key={t} className="reveal flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={1.5} />
              <span className="text-white/70 leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// export function CaseFileSummary() {
//   const ref = useReveal<HTMLDivElement>();
//   const fileItems = [
//     {
//       title: "File Summary",
//       detail:
//         "Office visits, laboratory and radiologic reports, surveillance report, appeal letters, functional capacity evaluations, attending physician statement.",
//     },
//     { title: "Clinical Summary", detail: "" },
//     { title: "Rationale", detail: "Based on supported findings." },
//     { title: "Draft Restrictions and Limitations / Draft Opinion", detail: "" },
//     { title: "Other Questions Posed by the Client", detail: "" },
//   ];

//   return (
//     <section className="bg-paper py-20 md:py-28">
//       <div ref={ref} className="mx-auto max-w-5xl px-6 md:px-10">
//         <SectionHeading eyebrow="The Deliverable" title="One file structure, considered end to end, every time." />
//         <div className="reveal border border-black/15 rounded-md bg-white overflow-hidden">
//           <div className="px-6 py-4 border-b border-black/10 flex items-center justify-between">
//             <p className="font-mono text-[10px] tracking-widest2 uppercase text-black/60">
//               Draft — Clinical Review File
//             </p>
//             <p className="font-mono text-[10px] text-black/40">Confidential</p>
//           </div>

//           <div>
//             {fileItems.map((item, i) => (
//               <div key={item.title} className={`flex gap-4 px-6 py-5 ${i !== 0 ? "border-t border-black/10" : ""}`}>
//                 <div className="mt-0.5 shrink-0 w-5 h-5 rounded-sm border border-black flex items-center justify-center">
//                   <Check className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
//                 </div>
//                 <div>
//                   <p className="font-display text-base">{item.title}</p>
//                   {item.detail && <p className="text-sm text-steel leading-relaxed mt-1">{item.detail}</p>}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="px-6 py-6 border-t border-black/10 flex items-center gap-4">
//             <p className="font-mono text-[10px] uppercase tracking-widest2 text-black/60 shrink-0">
//               Reviewer Signature
//             </p>
//             <div className="flex-1 border-b border-black/40 h-6" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export function TrustBand() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-paper py-16">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal relative rounded-md overflow-hidden border border-black/15">
          <div className="relative w-[700px] md:w-full h-64 md:h-[700px]">
            <Image
              src="/img1.jpg"
              alt="Physicians walking through a hospital corridor"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 850px) 120vw, 1200px"
            />
          </div>
          <div className="p-4 bg-white">
            <p className="text-sm text-steel">
              A dedicated physician executes documentation — your
              reviewers keep full clinical authority and final sign-off on
              every case.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Transformation() {
  const ref = useReveal<HTMLDivElement>();
  const rows = [
    ["Reviewers split time between judgment and writing", "Reviewers spend their time on decisions — writing fully offloaded"],
    ["Narrative quality and structure vary by reviewer", "Every draft follows one standardized, guideline-mapped structure"],
    ["Documentation defensibility is inconsistent across cases", "Every draft passes a dedicated QC review for appeal and audit defensibility"],
    ["Capacity is capped by how many physicians you can hire", "Capacity scales with case volume — no incremental hiring required"],
    ["Turnaround depends on reviewer bandwidth that day", "Turnaround is fixed at 24 hours, independent of internal volume"],
  ];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="04 · The Transformation" title="The Ventra outcome model." />
        <div className="reveal border border-black/15 rounded-md overflow-hidden">
          <div className="grid grid-cols-2 bg-ink text-white font-mono text-xs uppercase tracking-widest2">
            <div className="p-4">Before Ventra</div>
            <div className="p-4 text-white">After Ventra</div>
          </div>
          {rows.map(([before, after]) => (
            <div key={before} className="grid grid-cols-2 border-t border-black/10">
              <div className="p-4 text-sm text-steel">{before}</div>
              <div className="p-4 text-sm font-medium">{after}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Proof() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { icon: ClipboardCheck, title: "24-hour standard turnaround", body: "Written into the SLA — a contractual commitment, not a target." },
    { icon: ShieldCheck, title: "100% dual-physician review", body: "Every draft is written by one physician and independently reviewed by a senior physician before delivery." },
    { icon: Gauge, title: "Revision rate under 10%, tracked from day one", body: "Drafts are built to be endorsed, not rewritten. Edit-rate data is yours to see." },
    { icon: Building2, title: "The pilot is the proof", body: "10–25 cases at standard rates, before any volume commitment." },
  ];
  return (
    <section id="proof" className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="05 · Proof" title="Built to be measured, not taken on faith." />
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="reveal border border-black/15 rounded-md p-6 bg-white">
              <it.icon className="w-5 h-5 text-black mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2">{it.title}</h3>
              <p className="text-steel text-sm leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyVentra() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    "Physician-led authorship, every draft ECFMG-certified or U.S.-licensed.",
    "Defensible by design against current guideline standards.",
    "True white-label — NDA before any work begins, zero Ventra identifiers.",
    "Specialty depth across orthopedics, cardiology, neurology, pulmonology, occupational medicine, GI, general surgery.",
    "Scalable capacity — from pilot cases to 100+ per day without diluting turnaround.",
  ];
  return (
    <section className="bg-ink text-white py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="reveal eyebrow text-white/70 mb-4">06 · Why Ventra</p>
        <h2 className="reveal font-display text-3xl md:text-4xl leading-tight mb-4 max-w-2xl">Not features. Position.</h2>
        <p className="reveal text-white/70 max-w-xl mb-12 leading-relaxed">
          We separate clinical judgment from documentation execution. Reviewers
          decide. Ventra writes. We reduce cost per decision, not just cost per case.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((t) => (
            <div key={t} className="reveal flex gap-3">
              <Layers className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-white/70 leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <div className="reveal">
          <Stethoscope className="w-8 h-8 text-black mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">A clear path to partnership.</h2>
          <p className="text-steel max-w-xl mx-auto mb-10 leading-relaxed">
            Discovery call → NDA → 10–25 pilot cases → quality review →
            volume agreement. 
          </p>
          <p className="my-3 text-steel">Reach out to schedule a discovery call.</p>
          <a
            href="mailto:admin@ventrahealthsystems.com"
            className="inline-flex items-center gap-2 bg-ink text-white px-7 py-4 rounded-sm hover:bg-black/80 transition-colors font-medium"
          >
            Start the conversation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}