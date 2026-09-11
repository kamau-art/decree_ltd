import type { Metadata } from "next"
import Image from "next/image"
import { Handshake, Building2, Package, Globe2, ArrowRight } from "lucide-react"
import { prisma } from "@/lib/prisma"

export const metadata: Metadata = {
  title: "Partnerships | Decree Ltd",
  description:
    "Meet the organizations and suppliers we partner with to deliver quality water and power solutions.",
}

export const dynamic = "force-dynamic"

export default async function PartnershipsPage() {
  const partners = await prisma.partner.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "asc" },
  })

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 py-24">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
            Trusted Network
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Partnerships</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We work alongside trusted organizations and suppliers to deliver the best materials,
            equipment, and expertise to every project.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          {partners.length === 0 ? (
            <p className="text-gray-500 bg-white rounded-2xl border border-gray-100 shadow p-8 text-center max-w-2xl mx-auto">
              We will be listing our partner organizations here soon. Please check back shortly.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                >
                  {partner.logo ? (
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="64px"
                        className="object-contain rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="text-blue-600" size={32} />
                    </div>
                  )}
                  <h2 className="text-lg font-bold text-gray-900 mb-1">{partner.name}</h2>
                  {partner.description && (
                    <p className="text-gray-500">{partner.description}</p>
                  )}
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-blue-600 text-sm font-semibold hover:gap-2 transition-all"
                    >
                      Visit Website <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center mb-4">
                <Handshake className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Why We Partner</h3>
              <p className="text-gray-600 text-sm">
                Strong partnerships mean access to quality materials, reliable equipment, and
                technical expertise that benefits every client.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center mb-4">
                <Package className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Materials</h3>
              <p className="text-gray-600 text-sm">
                We source premium pipes, tanks, pumps, and electrical components from trusted
                suppliers.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center mb-4">
                <Globe2 className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Working Together</h3>
              <p className="text-gray-600 text-sm">
                From development programs to technical collaborations, our partners help us
                deliver complete solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}