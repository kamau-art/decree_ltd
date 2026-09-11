import { Trash2, CheckCircle2, Clock } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { updateMessageStatus, deleteMessage } from "@/lib/actions"

export const dynamic = "force-dynamic"

export default async function AdminMessagesPage() {
  const messages = await prisma.contactForm.findMany({
    orderBy: { createdAt: "desc" },
  })

  const statusStyles: Record<string, string> = {
    pending: "bg-amber-100 text-amber-700",
    contacted: "bg-blue-100 text-blue-700",
    resolved: "bg-green-100 text-green-700",
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-500">Inquiries submitted through the contact form.</p>
      </div>

      <div className="space-y-4">
        {messages.length === 0 && (
          <p className="text-gray-500 bg-white rounded-xl shadow p-6">No messages yet.</p>
        )}
        {messages.map((message) => (
          <div key={message.id} className="bg-white rounded-xl shadow p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="font-bold text-gray-900">{message.name}</h2>
                <div className="text-sm text-gray-500">
                  <a href={`mailto:${message.email}`} className="hover:text-brand">
                    {message.email}
                  </a>
                  {message.phone && <span> · {message.phone}</span>}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${
                    statusStyles[message.status] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {message.status}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(message.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{message.message}</p>
            <div className="flex gap-2">
              {message.status === "pending" && (
                <form action={updateMessageStatus.bind(null, message.id, "contacted")}>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-semibold hover:bg-blue-100 transition-colors"
                  >
                    <Clock size={16} /> Mark Contacted
                  </button>
                </form>
              )}
              {message.status !== "resolved" && (
                <form action={updateMessageStatus.bind(null, message.id, "resolved")}>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-700 text-sm font-semibold hover:bg-green-100 transition-colors"
                  >
                    <CheckCircle2 size={16} /> Mark Resolved
                  </button>
                </form>
              )}
              <form action={deleteMessage.bind(null, message.id)}>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-700 text-sm font-semibold hover:bg-red-100 transition-colors"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
