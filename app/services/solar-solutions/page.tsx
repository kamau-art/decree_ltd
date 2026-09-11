import type { Metadata } from "next"
import ServicePage from "@/components/ServicePage"
import { serviceContents } from "@/lib/services-content"

export const metadata: Metadata = {
  title: "Solar Solutions & Pumps | Decree Ltd",
  description:
    "Solar-powered water pumping systems with smart monitoring — cut energy costs and go off-grid with sustainable solutions.",
}

export default function SolarSolutionsPage() {
  return <ServicePage content={serviceContents["solar-solutions"]} />
}
