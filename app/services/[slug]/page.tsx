import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Phone, ChevronRight } from "lucide-react"
import RichServicePage from "@/components/ServicePage"
import { serviceContents } from "@/lib/services-content"
import { prisma } from "@/lib/prisma"
import { imageMap } from "@/lib/images"

export const dynamic = "force-dynamic"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  const content = serviceContents[slug]
  if (content) {
    return { title: `${content.title} | Decree Ltd` }
  }

  const service = await prisma.service.findUnique({ where: { slug } })
  if (!service) return {}
  return { title: `${service.title} | Decree Ltd` }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params

  const content = serviceContents[slug]
  if (content) {
    return <RichServicePage content={content} />
  }

  const service = await prisma.service.findUnique({ where: { slug } })
  if (!service) {
    notFound()
  }

  const imageSrc = service.image || imageMap[slug]

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
                {service.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{service.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+254721787197"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-center hover:bg-blue-50 hover:shadow-xl transition-all"
                >
                  <Phone size={20} className="mr-2" />
                  Call Us Now
                </a>
              </div>
            </div>
            {imageSrc && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
            Get Started
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
            Planning a similar project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team can review your scope and recommend the right approach for your needs.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl"
          >
            Contact Our Team
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}