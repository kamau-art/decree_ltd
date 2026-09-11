import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { imageMap } from "@/lib/images"

export const metadata: Metadata = {
  title: "Our Services | Decree Ltd",
  description:
    "Complete water and power services — drilling, boreholes, power installation, tank construction, solar pumps, and piping solutions.",
}

export const dynamic = "force-dynamic"

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  })

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 py-24">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            From ground to grid — complete water and power solutions under one roof, serving
            residential, commercial, agricultural, and municipal projects.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          {services.length === 0 ? (
            <p className="text-gray-500 bg-white rounded-2xl border border-gray-100 shadow p-8 text-center max-w-2xl mx-auto">
              We will be listing our services here soon. Please check back shortly.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {services.map((service, i) => {
                const imageSrc = service.image || imageMap[service.slug]
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-2xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-[320px_1fr]"
                  >
                    <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[240px] overflow-hidden">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                          <span className="text-6xl font-bold text-white/30">
                            {service.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-8 md:p-10 flex items-start justify-between gap-6">
                      <div>
                        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
                          Service 0{i + 1}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <div className="shrink-0 bg-blue-600 rounded-xl p-3 text-white group-hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-colors">
                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}