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
    { icon: Users, title: "Reviewer Fatigue drives burnout and reduces the risk of errors. ", body: "Heavy documentation workloads increase the risk of fatigue and physicians’ burnout, which may compromise the review quality in the face of increased workload." },
    { icon: AlertTriangle, title: "Inconsitent documentation increases appeal risk", body: "Variation in narrative quality creates avoidable exposure, especially in high-volume review environments where consistency is critical." },
    { icon: FileWarning, title: " Poor documentation becomes a downstream liability.", body: "Poor documentation reduces Internal consistency and increases the risk of costly appeals." },
    { icon: Gauge, title: "Documentation work inflates cost per clinical decision", body: " Every hour spent drafting reports is an hour diverted from the premium clinical expertise the physician is paid to deliver." },
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
    " ⁠Completely white-label—no Ventra Branding, NDA-first engagement. to ⁠- Completely white-label, no Ventra identifiers.",
    "⁠Consistent, guideline-aligned documentation across every case.",
    " ⁠Capacity that scales seamlessly with demand-without adding documentation burden.",
    "More physician time dedicated to clinical judgement, not report writing.",
    "⁠Completely white-label—no Ventra Branding, NDA-first engagement.",
  ];
  return (
    <section id="solution" className="bg-ink text-white py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-14 items-start">
        <div className="reveal">
          <p className="eyebrow text-white/70 mb-4">02 · The Solution</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
            Ventra is the invisible engine behind high-performing clinical review teams.
          </h2>
          <p className="text-white/70 leading-relaxed">
            Not a staffing vendor. Not an outsourcing firm. 
            Ventra works entirely behind your organization,
             executing documentation while remaining invisible to your clients.
             Your reviewers retain clinical ownership. 
             Your organization receives the credit.
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
              Documentation is executed entirely behind your organization by dedicated physicians.
               Your reviewers make the decisions, 
              provide the final sign-off, and your clients never know Ventra exists.
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
    [
      "Physicians split time between clinical review and documentation writing",
      "Reviewers focus exclusively on clinical judgement while documentation is fully offloaded",
    ],
    [
      "Draft quality and structure vary from reviewer to reviewer",
      "Every draft is standardized, guideline-aligned, and consistently structured",
    ],
    [
      "Drafts go out with a single pass and limited appeal protection",
      "Every draft undergoes independent quality review to ensure audit and appeal readiness",
    ],
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
    { icon: ClipboardCheck, title: "36-hour standard turnaround", body: "Contractually submitted in the SLA — not just a service target." },
    { icon: ShieldCheck, title: "100% dual-physician review", body: "Every draft is authored by a physician and independently reviewed before delivery." },
    { icon: Gauge, title: "Revision rate under 10%, tracked from day one", body: "Drafts are built to be signed off, not rewritten." },
    { icon: Building2, title: "Contractually bound. Not just a service target.", body: " Every draft is completed by a physician and independently reviewed by another physician before delivery." },
  ];
  return (
    <section id="proof" className="bg-paper py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="05 · Proof" title="Performance you can measure." />
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
    "Physician-led authorship, every draft ECFMG-certified.",
    "Built to scale without compromising quality, consistency or turnaround time.",
    "Deep expertise across medical specialties.",
    "Built to scale without compromising quality, consistency or turn around.",
  ];
  return (
    <section className="bg-ink text-white py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="reveal eyebrow text-white/70 mb-4">06 · Why Ventra</p>
        <h2 className="reveal font-display text-3xl md:text-4xl leading-tight mb-4 max-w-2xl">The Ventra Difference</h2>
        <p className="reveal text-white/70 max-w-xl mb-12 leading-relaxed">
          We separate clinical judgment from documentation execution. Reviewers
          decide. Ventra writes. We improve the physician output, and cost burden.
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