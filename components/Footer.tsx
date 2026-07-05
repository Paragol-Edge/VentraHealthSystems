import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-offwhite py-12 border-t border-offwhite/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex items-center gap-2 font-display text-lg">
          <Image src="/logo.png" alt="Ventra" width={72} height={72} />
          Ventra Health Systems
        </div>
        <div className="font-mono text-xs text-[#7C8595] space-y-1">
          <p>ventrahealthsystems.com</p>
          <p>admin@ventrahealthsystems.com</p>
        </div>
      </div>
    </footer>
  );
}