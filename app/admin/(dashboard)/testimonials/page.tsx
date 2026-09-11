import { Plus, Trash2, Power } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { createTestimonial, toggleTestimonial, deleteTestimonial } from "@/lib/actions"

export const dynamic = "force-dynamic"

export default async function AdminTestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
        <p className="text-gray-500">Customer reviews shown on the homepage.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Plus size={18} /> Add Testimonial
          </h2>
          <form action={createTestimonial} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Customer name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Company / Location</label>
              <input
                name="company"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="e.g. Sauk Center"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Rating (1-5)</label>
              <select
                name="rating"
                defaultValue="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand bg-white"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} ★
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Review</label>
              <textarea
                name="text"
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="What did the customer say?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-white py-2 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
            >
              Add Testimonial
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {testimonials.length === 0 && (
            <p className="text-gray-500 bg-white rounded-xl shadow p-6">No testimonials yet.</p>
          )}
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-xl shadow p-6 flex items-start justify-between gap-4">
              <div>
                <div className="text-gold mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < t.rating ? "" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-2">"{t.text}"</p>
                <div className="text-sm">
                  <span className="font-bold text-gray-900">{t.name}</span>
                  {t.company && <span className="text-gray-500"> · {t.company}</span>}
                  <span
                    className={`ml-3 text-xs font-semibold px-2 py-0.5 rounded-full ${
                      t.isActive ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {t.isActive ? "Active" : "Hidden"}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <form action={toggleTestimonial.bind(null, t.id)}>
                  <button
                    type="submit"
                    title="Toggle visibility"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Power size={18} className="text-gray-600" />
                  </button>
                </form>
                <form action={deleteTestimonial.bind(null, t.id)}>
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
