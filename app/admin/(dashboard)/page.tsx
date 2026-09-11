import Link from "next/link"
import {
  Wrench,
  MessageSquare,
  FolderOpen,
  Award,
  Handshake,
  ArrowUpRight,
} from "lucide-react"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

export default async function AdminDashboard() {
  const [serviceCount, testimonialCount, portfolioCount, certificationCount, partnerCount, messageCount] =
    await Promise.all([
      prisma.service.count(),
      prisma.testimonial.count(),
      prisma.portfolio.count(),
      prisma.certification.count(),
      prisma.partner.count(),
      prisma.contactForm.count({ where: { status: "pending" } }),
    ])

  const stats = [
    { label: "Services", value: serviceCount, href: "/admin/services", icon: Wrench },
    { label: "Testimonials", value: testimonialCount, href: "/admin/testimonials", icon: MessageSquare },
    { label: "Portfolio Projects", value: portfolioCount, href: "/admin/portfolio", icon: FolderOpen },
    { label: "Certifications", value: certificationCount, href: "/admin/certifications", icon: Award },
    { label: "Partners", value: partnerCount, href: "/admin/partners", icon: Handshake },
    { label: "Pending Messages", value: messageCount, href: "/admin/messages", icon: MessageSquare },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Manage all your website content from here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Link
            key={i}
            href={stat.href}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                <stat.icon className="text-white" size={24} />
              </div>
              <ArrowUpRight
                className="text-gray-300 group-hover:text-brand transition-colors"
                size={20}
              />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-gray-500">{stat.label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
