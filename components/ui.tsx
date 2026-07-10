"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

export function useReveal<T extends HTMLElement>() {
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

export function SectionHeading({ eyebrow, title, dark }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className={`eyebrow mb-4 ${dark ? "text-white/70" : "text-black/70"}`}>{eyebrow}</p>
      <h2 className={`font-display text-3xl md:text-4xl leading-tight ${dark ? "text-white" : ""}`}>{title}</h2>
    </div>
  );
}

export function ImageBand({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="reveal relative rounded-md overflow-hidden border border-black/15">
      <div className="relative w-full h-64 md:h-80">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>
      <div className="p-4 bg-white">
        <p className="text-sm text-steel">{caption}</p>
      </div>
    </div>
  );
}