import type { Metadata } from "next"
import ServicePage from "@/components/ServicePage"
import { serviceContents } from "@/lib/services-content"

export const metadata: Metadata = {
  title: "Water Drilling & Boreholes | Decree Ltd",
  description:
    "Reliable water drilling and borehole services for residential, commercial, and industrial needs. Licensed contractors, water testing, and maintenance programs.",
}

export default function WaterDrillingPage() {
  return <ServicePage content={serviceContents["water-drilling"]} />
}
