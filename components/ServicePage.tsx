import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Phone, CheckCircle2, ArrowRight } from "lucide-react"

export interface FaqItem {
  question: string
  answer: string
}

export interface Capability {
  title: string
  description: string
  bullets: string[]
}

export interface WhyItem {
  title: string
  text: string
}

export interface RelatedService {
  title: string
  description: string
  href: string
}

export interface ServiceContent {
  slug: string
  title: string
  tagline: string
  image?: string
  problemHeading: string
  problemText: string[]
  whyHeading: string
  whyItems: WhyItem[]
  capabilitiesHeading: string
  capabilities: Capability[]
  audienceHeading: string
  audienceIntro: string
  audience: string[]
  faqsHeading: string
  faqs: FaqItem[]
  ctaHeading: string
  ctaText: string
  relatedServices: RelatedService[]
}

export default function ServicePage({ content }: { content: ServiceContent }) {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
                Our Service
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{content.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{content.tagline}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+254721787197"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-center hover:bg-blue-50 hover:shadow-xl transition-all"
                >
                  <Phone size={20} className="mr-2" />
                  Call Us Now
                </a>
              </div>
            </div>
            {content.image && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={content.image}
                  alt={content.title}
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
              The Challenge
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">{content.problemHeading}</h2>
            {content.problemText.map((text, i) => (
              <p key={i} className="text-lg text-gray-600 mb-4">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-white/60 px-3 py-1.5 rounded-full mb-4">
              Why Decree
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">{content.whyHeading}</h2>
            <div className="space-y-4">
              {content.whyItems.map((item, i) => (
                <div key={i} className="flex items-start space-x-3 bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-lg transition-shadow">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>{item.title}:</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
            What We Deliver
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">{content.capabilitiesHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                <p className="text-gray-600 mb-4">{cap.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {cap.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold leading-none mt-[-1px]">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-white/60 px-3 py-1.5 rounded-full mb-4">
            Who We Serve
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">{content.audienceHeading}</h2>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-600 mb-6">{content.audienceIntro}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.audience.map((item, i) => (
                <li key={i} className="flex items-center space-x-2 bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:border-blue-200 transition-colors">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
            Questions
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">{content.faqsHeading}</h2>
          <div className="space-y-6">
            {content.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg p-6 transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-slate-950 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.15]" />
        <div className="relative container mx-auto px-4">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-300 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full mb-4">
            Explore More
          </span>
          <h2 className="text-2xl font-bold mb-8 text-white tracking-tight">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.relatedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-gold font-semibold text-sm">
                  Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">{content.ctaHeading}</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">{content.ctaText}</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            Contact Our Team
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}