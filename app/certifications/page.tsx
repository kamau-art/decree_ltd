import type { Metadata } from "next"
import { Award, BadgeCheck, ShieldCheck, FileCheck } from "lucide-react"
import { prisma } from "@/lib/prisma"

export const metadata: Metadata = {
  title: "Certifications | Decree Ltd",
  description:
    "View Decree Ltd's industry certifications, licenses, and quality standards.",
}

export const dynamic = "force-dynamic"

export default async function CertificationsPage() {
  const certifications = await prisma.certification.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 py-24">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
            Standards & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Certifications & Licenses</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We hold recognized industry certifications and licenses that back every project we
            deliver.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          {certifications.length === 0 ? (
            <p className="text-gray-500 bg-white rounded-2xl border border-gray-100 shadow p-8 text-center max-w-2xl mx-auto">
              Our certifications and licenses are currently being updated. Please check back
              shortly.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 shadow-lg shadow-blue-600/20">
                    <Award className="text-white" size={28} />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h2>
                  {cert.issuer && <p className="text-gray-500 text-sm mb-1">{cert.issuer}</p>}
                  {cert.number && <p className="text-gray-500 text-sm mb-1">{cert.number}</p>}
                  {cert.expiry && (
                    <p className="text-gray-500 text-sm">
                      Expires: {new Date(cert.expiry).toLocaleDateString()}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center shrink-0">
                <BadgeCheck className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Licensed Contractors</h3>
                <p className="text-gray-600 text-sm">
                  All work performed by fully licensed and insured professionals.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center shrink-0">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Quality Standards</h3>
                <p className="text-gray-600 text-sm">
                  Materials and methods that meet or exceed industry requirements.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center shrink-0">
                <FileCheck className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Full Documentation</h3>
                <p className="text-gray-600 text-sm">
                  Certificates and compliance documents provided with every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}