import { Plus, Trash2, Power } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { createService, toggleService, deleteService } from "@/lib/actions"

export const dynamic = "force-dynamic"

const categories = [
  "Water Drilling & Boreholes",
  "Power Installation & Electrical",
  "Tank Construction & Installation",
  "Solar Solutions & Pumps",
  "Piping & Last-Mile Connections",
  "Additional Services",
]

export default async function AdminServicesPage() {
  const services = await prisma.service.findMany({ orderBy: { order: "asc" } })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Services</h1>
        <p className="text-gray-500">Add, enable, or remove services shown on the site.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plus size={18} /> Add Service
          </h2>
          <form action={createService} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
              <input
                name="title"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Service title"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Slug (URL)</label>
              <input
                name="slug"
                required
                pattern="[a-z0-9-]+"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="service-url-slug"
              />
              <p className="text-xs text-gray-500 mt-1">
                Lowercase letters, numbers, and hyphens. Appears at /services/&lt;slug&gt;.
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
              <select
                name="category"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Short description"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
              <input
                name="image"
                type="url"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="https://... (optional)"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-white py-2 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
            >
              Add Service
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {services.length === 0 && (
            <p className="text-gray-500 bg-white rounded-xl shadow p-6">No services yet.</p>
          )}
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow p-6 flex items-start justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-bold text-gray-900">{service.title}</h2>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      service.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {service.isActive ? "Active" : "Hidden"}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-1">
                  {service.category}
                  {service.slug && <span className="text-gray-400"> · /services/{service.slug}</span>}
                </p>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <form action={toggleService.bind(null, service.id)}>
                  <button
                    type="submit"
                    title="Toggle visibility"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Power size={18} className="text-gray-600" />
                  </button>
                </form>
                <form action={deleteService.bind(null, service.id)}>
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
