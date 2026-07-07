"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ShieldCheck, Clock, Stamp } from "lucide-react";

export default function Hero() {
  const scanRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.set(scanRef.current, { top: "0%" })
        .fromTo(
          linesRef.current,
          { opacity: 0 },
          { opacity: 1, stagger: 0.12, duration: 0.4, ease: "power1.out" },
          0.1
        )
        .to(scanRef.current, { top: "100%", duration: 1.4, ease: "power2.inOut" }, 0);
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
          <p className="eyebrow text-white/70 mb-6">Confidential · White-Label · US Peer Review</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Your reviewers decide.
            <br />
            <em className="text-white not-italic font-normal border-b border-white/40">Ventra writes.</em>
            <br />
            Your client never knows we exist.
          </h1>
          <p className="text-lg text-white/70 max-w-md mb-8 leading-relaxed">
            The physician-authored documentation layer behind peer review and
            utilization management operations — fixed turnaround, dual-physician
            QC on every case, zero Ventra identifiers in what you deliver.
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
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white" strokeWidth={1.5} />
              36H TURNAROUND
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" strokeWidth={1.5} />
              100% PHYSICIAN-AUTHORED
            </div>
            <div className="flex items-center gap-2">
              <Stamp className="w-4 h-4 text-white" strokeWidth={1.5} />
              NDA WHITE-LABEL
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative bg-[#161616] border border-white/10 rounded-md p-6 md:p-8 shadow-2xl overflow-hidden">
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

            <div ref={addLineRef} className="mb-3">
              <p className="font-mono text-[10px] text-white/70 mb-1">01 · CLINICAL SUMMARY</p>
              <p className="text-sm text-white/70 leading-relaxed">
                Findings mapped against applicable guideline criteria for the
                submitted specialty, with reasoning structured for reviewer
                endorsement rather than reconstruction.
              </p>
            </div>
            <div ref={addLineRef}>
              <p className="font-mono text-[10px] text-white/70 mb-1">02 · REASONING &amp; CONCLUSION</p>
              <p className="text-sm text-white/70 leading-relaxed">
                Structured, guideline-mapped conclusion — reviewed by a second
                senior physician before delivery.
              </p>
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