import { Plus, Trash2 } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { createPortfolioItem, deletePortfolioItem } from "@/lib/actions"

export const dynamic = "force-dynamic"

const categories = [
  "Water Drilling",
  "Power Installation",
  "Tank Construction",
  "Solar Solutions",
  "Piping Services",
]

export default async function AdminPortfolioPage() {
  const items = await prisma.portfolio.findMany({ orderBy: { order: "asc" } })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
        <p className="text-gray-500">Projects shown in the gallery.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plus size={18} /> Add Project
          </h2>
          <form action={createPortfolioItem} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
              <input
                name="title"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Project title"
              />
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
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Project description"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-white py-2 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
            >
              Add Project
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {items.length === 0 && (
            <p className="text-gray-500 bg-white rounded-xl shadow p-6">No projects yet.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-6 flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-xs font-semibold text-brand bg-brand-light px-2 py-0.5 rounded-full mb-2">
                  {item.category}
                </span>
                <h2 className="font-bold text-gray-900 mb-1">{item.title}</h2>
                {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
              </div>
              <form action={deletePortfolioItem.bind(null, item.id)}>
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
