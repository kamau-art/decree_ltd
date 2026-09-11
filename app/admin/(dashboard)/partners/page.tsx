import { Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { prisma } from "@/lib/prisma"
import { createPartner, deletePartner } from "@/lib/actions"

export const dynamic = "force-dynamic"

export default async function AdminPartnersPage() {
  const partners = await prisma.partner.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Partners</h1>
        <p className="text-gray-500">Organizations and suppliers shown on the website.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plus size={18} /> Add Partner
          </h2>
          <form action={createPartner} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Partner name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Type / Description</label>
              <input
                name="description"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="e.g. Equipment Supplier"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Website</label>
              <input
                name="website"
                type="url"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Logo URL</label>
              <input
                name="logo"
                type="url"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="https://... (optional image URL)"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-white py-2 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
            >
              Add Partner
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {partners.length === 0 && (
            <p className="text-gray-500 bg-white rounded-xl shadow p-6">No partners yet.</p>
          )}
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl shadow p-6 flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                {partner.logo && (
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="48px"
                      className="object-contain rounded-lg"
                    />
                  </div>
                )}
                <div>
                  <h2 className="font-bold text-gray-900">{partner.name}</h2>
                {partner.description && (
                  <p className="text-gray-500 text-sm">{partner.description}</p>
                )}
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand text-sm hover:underline"
                  >
                    Visit website
                  </a>
                )}
              </div>
              <form action={deletePartner.bind(null, partner.id)}>
                <button
                  type="submit"
                  title="Delete"
                  className="p-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
                >
                  <Trash2 size={18} className="text-red-600" />
                </button>
              </form>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
