// app/service/page.tsx
import type { Metadata } from "next";
import ServiceContent from "@/components/Service";

export const metadata: Metadata = {
  title: "Service",
  description: "24–36 hour turnaround, dual-physician QC, true white-label documentation for peer review and utilization management operations.",
};

export default function ServicePage() {
  return <ServiceContent />;
}