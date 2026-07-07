import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-offwhite text-black py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
        <Image
          src="/logo.png"
          alt="Ventra Health Systems"
          width={130}
          height={140}
          className="h-16 w-auto"
        />
        <div className="font-mono text-xs text-black/60 space-y-1">
          <p>ventrahealthsystems.com</p>
          <p>admin@ventrahealthsystems.com</p>
        </div>
      </div>
    </footer>
  );
}