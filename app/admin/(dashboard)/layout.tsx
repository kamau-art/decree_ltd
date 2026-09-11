import Link from "next/link"
import { redirect } from "next/navigation"
import {
  LayoutDashboard,
  Wrench,
  MessageSquare,
  FolderOpen,
  Award,
  Handshake,
  LogOut,
} from "lucide-react"
import { getSession } from "@/lib/auth"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/services", label: "Services", icon: Wrench },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/admin/portfolio", label: "Portfolio", icon: FolderOpen },
  { href: "/admin/certifications", label: "Certifications", icon: Award },
  { href: "/admin/partners", label: "Partners", icon: Handshake },
  { href: "/admin/messages", label: "Messages", icon: MessageSquare },
]

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session || session.user.role !== "ADMIN") {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-gray-900 text-white shrink-0 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <div>
              <div className="font-bold">Decree Ltd</div>
              <div className="text-xs text-gray-400">Admin Panel</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800 space-y-3">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm"
          >
            View Website
          </Link>
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm w-full"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden">
        <div className="md:hidden bg-gray-900 text-white p-4 flex items-center justify-between">
          <Link href="/admin" className="font-bold">
            Decree Ltd Admin
          </Link>
          <form action="/api/auth/signout" method="POST">
            <button type="submit" className="text-sm text-gray-300 hover:text-white">
              Sign Out
            </button>
          </form>
        </div>
        <div className="p-6 md:p-10">{children}</div>
      </main>
    </div>
  )
}
