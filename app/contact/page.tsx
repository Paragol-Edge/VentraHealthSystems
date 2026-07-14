import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule a discovery call with Ventra Health Systems.",
};

export default function Contact() {
  return (
    <main className="bg-paper py-24 md:py-32 min-h-[70vh]">
      <div className="mx-auto max-w-2xl px-6 md:px-10 text-center">
        <Mail className="w-8 h-8 text-brass mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="font-display text-3xl md:text-4xl mb-6">Let's start the conversation.</h1>
        <p className="text-steel mb-10 leading-relaxed">
          Reach out to schedule a discovery conversation or ask any questions about a pilot engagement.
        </p>
        <a
          href="mailto:admin@ventrahealthsystems.com"
          className="inline-block bg-ink text-offwhite px-7 py-4 rounded-sm hover:bg-brass hover:text-ink transition-colors font-medium"
        >
          admin@ventrahealthsystems.com
        </a>
      </div>
    </main>
  );
}