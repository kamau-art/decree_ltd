import type { Metadata } from "next"
import ServicePage from "@/components/ServicePage"
import { serviceContents } from "@/lib/services-content"

export const metadata: Metadata = {
  title: "Tank Construction & Installation | Decree Ltd",
  description:
    "Premium water storage tanks — concrete, metallic, underground, and above-ground with custom design and installation.",
}

export default function TankConstructionPage() {
  return <ServicePage content={serviceContents["tank-construction"]} />
}
