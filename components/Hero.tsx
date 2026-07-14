"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ShieldCheck, Clock, Stamp, Check } from "lucide-react";

export default function Hero() {
  const scanRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  const fileItems = [
    {
      title: "File Summary",
      detail:
        "Office visits, laboratory and radiologic reports, surveillance report, appeal letters, functional capacity evaluations, attending physician statement.",
    },
    { title: "Clinical Summary", detail: "" },
    { title: "Rationale", detail: "Based on supported findings." },
    { title: "Draft Restrictions and Limitations / Draft Opinion", detail: "" },
    { title: "Other Questions Posed by the Client", detail: "" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // One-time reveal: scan-line + lines fading in on load
      const tl = gsap.timeline({ delay: 0.3 });
      tl.set(scanRef.current, { top: "0%" })
        .fromTo(
          linesRef.current,
          { opacity: 0 },
          { opacity: 1, stagger: 0.12, duration: 0.4, ease: "power1.out" },
          0.1
        )
        .to(scanRef.current, { top: "100%", duration: 1.4, ease: "power2.inOut" }, 0);

      // Continuous floating loop — runs forever, independent of scroll,
      // identical on mobile and desktop since it's not scroll-triggered.
      gsap.to(cardRef.current, {
        y: 14,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
    return () => ctx.revert();
  }, []);

  const addLineRef = (el: HTMLDivElement | null) => {
    if (el && !linesRef.current.includes(el)) linesRef.current.push(el);
  };

  return (
    <section className="bg-ink text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="eyebrow text-white/70 mb-6">Confidential · US Peer Review</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Your reviewers decide.
            <br />
            <em className="text-white not-italic font-normal border-b border-white/40">Ventra writes.</em>
          </h1>
          <p className="text-lg text-white/70 max-w-md mb-8 leading-relaxed">
            The physician authored documentation layer behind peer review and
            utilization management operations.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="/contact"
              className="bg-white text-ink font-medium px-6 py-3 rounded-sm hover:bg-white/85 transition-colors"
            >
              Schedule a discovery call
            </a>
            <a
              href="#solution"
              className="border border-white/30 px-6 py-3 rounded-sm hover:border-white transition-colors"
            >
              See how it works
            </a>
          </div>

          <div className="flex flex-wrap gap-8 font-mono text-xs">
            <div className="group relative flex items-center gap-2 cursor-default">
              <Clock className="w-4 h-4 text-white" strokeWidth={1.5} />
              36H TURNAROUND

              <p
                className="pointer-events-none absolute left-0 top-full mt-2 w-64 
                           bg-[#161616] border border-white/10 rounded-md p-3 
                           text-white/70 font-sans text-xs leading-relaxed normal-case tracking-normal
                           opacity-0 -translate-y-1 
                           group-hover:opacity-100 group-hover:translate-y-0 
                           transition-all duration-200 ease-out z-10"
              >
                Fixed turnaround, dual-physician QC on every case, zero Ventra
                identifiers in what you deliver.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" strokeWidth={1.5} />
              100% PHYSICIAN-AUTHORED
            </div>
            <div className="flex items-center gap-2">
              <Stamp className="w-4 h-4 text-white" strokeWidth={1.5} />
              NDA
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            ref={cardRef}
            className="relative bg-[#161616] border border-white/10 rounded-md p-6 md:p-8 shadow-2xl overflow-hidden will-change-transform"
          >
            <div
              ref={scanRef}
              className="pointer-events-none absolute left-0 w-full h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0 -translate-y-1/2"
              style={{ top: 0 }}
            />
            <p className="font-mono text-[10px] tracking-widest2 uppercase text-white/70 mb-4">
              Draft — Clinical Review Narrative
            </p>

            <div ref={addLineRef} className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] text-white/40 w-16">Claimant</span>
              <span className="redact-bar h-3 w-40 bg-white/90" />
            </div>
            <div ref={addLineRef} className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] text-white/40 w-16">Reviewer</span>
              <span className="redact-bar h-3 w-28 bg-white/90" />
            </div>
            <div ref={addLineRef} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] text-white/40 w-16">Client</span>
              <span className="redact-bar h-3 w-32 bg-white/90" />
            </div>

            <div className="h-px bg-white/10 mb-6" />

            {fileItems.map((item) => (
              <div key={item.title} ref={addLineRef} className="flex gap-3 mb-4 last:mb-0">
                <div className="mt-0.5 shrink-0 w-4 h-4 rounded-sm border border-white/60 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  {item.detail && (
                    <p className="text-xs text-white/60 leading-relaxed mt-0.5">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="h-px bg-white/10 my-6" />

            <div ref={addLineRef} className="flex items-center gap-4">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-white/50 shrink-0">
                Reviewer Signature
              </p>
              <div className="flex-1 border-b border-white/40 h-5" />
            </div>
          </div>
          <p className="font-mono text-[10px] text-white/40 mt-3 text-center">
            Identity fields redacted permanently. Clinical content intact.
          </p>
        </div>
      </div>
    </section>
  );
}