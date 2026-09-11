import type { Metadata } from "next"
import ServicePage from "@/components/ServicePage"
import { serviceContents } from "@/lib/services-content"

export const metadata: Metadata = {
  title: "Power Installation & Electrical | Decree Ltd",
  description:
    "Safe, reliable power installation services — transformers, distribution, backup generators, industrial power, and power audits.",
}

export default function PowerInstallationPage() {
  return <ServicePage content={serviceContents["power-installation"]} />
}
