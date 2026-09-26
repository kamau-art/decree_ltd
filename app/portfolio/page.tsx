import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PortfolioGrid from "@/components/PortfolioGrid"
import { prisma } from "@/lib/prisma"

export const metadata: Metadata = {
  title: "Our Projects | Decree Ltd",
  description:
    "Explore completed projects — borehole drilling, tank installations, solar pump systems, and water connections by Decree Ltd.",
}

export const dynamic = "force-dynamic"

export default async function PortfolioPage() {
  const projects = await prisma.portfolio.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
    select: {
      id: true,
      title: true,
      category: true,
      description: true,
      images: true,
    },
  })

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 py-24">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A selection of projects we're proud of — from residential boreholes to industrial
            water infrastructure.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          {projects.length === 0 ? (
            <p className="text-gray-500 bg-white rounded-2xl border border-gray-100 shadow p-8 text-center max-w-2xl mx-auto">
              We will be showcasing our completed projects here soon. Please check back shortly.
            </p>
          ) : (
            <PortfolioGrid projects={projects} />
          )}

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Want to see what we can do for your project? Let's talk.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}