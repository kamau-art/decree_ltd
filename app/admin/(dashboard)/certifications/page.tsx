import { Plus, Trash2 } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { createCertification, deleteCertification } from "@/lib/actions"

export const dynamic = "force-dynamic"

export default async function AdminCertificationsPage() {
  const certifications = await prisma.certification.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Certifications</h1>
        <p className="text-gray-500">Certifications and licenses shown on the website.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plus size={18} /> Add Certification
          </h2>
          <form action={createCertification} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Certification name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Issuer</label>
              <input
                name="issuer"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Issuing authority"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Certificate Number</label>
              <input
                name="number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Certificate no."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-white py-2 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
            >
              Add Certification
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {certifications.length === 0 && (
            <p className="text-gray-500 bg-white rounded-xl shadow p-6">No certifications yet.</p>
          )}
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow p-6 flex items-start justify-between gap-4"
            >
              <div>
                <h2 className="font-bold text-gray-900">{cert.name}</h2>
                {cert.issuer && <p className="text-gray-500 text-sm">{cert.issuer}</p>}
                {cert.number && <p className="text-gray-500 text-sm">{cert.number}</p>}
              </div>
              <form action={deleteCertification.bind(null, cert.id)}>
                <button
                  type="submit"
                  title="Delete"
                  className="p-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
                >
                  <Trash2 size={18} className="text-red-600" />
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
