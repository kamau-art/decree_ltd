import type { Metadata } from "next"
import ServicePage from "@/components/ServicePage"
import { serviceContents } from "@/lib/services-content"

export const metadata: Metadata = {
  title: "Piping & Last-Mile Connections | Decree Ltd",
  description:
    "Seamless water delivery with durable PVC and HDPE piping, main line tapping, pressure testing, and smart metering.",
}

export default function PipingServicesPage() {
  return <ServicePage content={serviceContents["piping-services"]} />
}
