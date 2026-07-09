"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ventra Health Systems"
            width={200}
            height={200}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest2 uppercase text-black">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-6 font-mono text-sm uppercase tracking-widest2 text-black">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 border-b border-black/10">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}