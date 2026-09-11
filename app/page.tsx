import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  ChevronRight,
  CheckCircle,
  Building2,
  Droplets,
  Zap,
  Sun,
  Wrench,
  ShieldCheck,
  Users,
  BadgeCheck,
  Headphones,
  ArrowRight,
} from "lucide-react"
import { images } from "@/lib/images"
import { prisma } from "@/lib/prisma"
import Reveal from "@/components/Reveal"
import CountUp from "@/components/CountUp"

export const dynamic = "force-dynamic"

const services = [
  {
    title: "Water Drilling & Boreholes",
    description: "Reliable water supply solutions for residential, commercial, and industrial needs.",
    href: "/services/water-drilling",
    icon: Droplets,
  },
  {
    title: "Power Installation & Electrical",
    description: "Complete electrical systems, transformers, and backup power solutions.",
    href: "/services/power-installation",
    icon: Zap,
  },
  {
    title: "Tank Construction & Installation",
    description: "Premium concrete and metallic tanks with custom fabrication.",
    href: "/services/tank-construction",
    icon: Building2,
  },
  {
    title: "Solar Solutions & Pumps",
    description: "Solar-powered water pumping systems with smart monitoring.",
    href: "/services/solar-solutions",
    icon: Sun,
  },
  {
    title: "Piping & Last-Mile Connections",
    description: "Seamless water delivery from source to destination.",
    href: "/services/piping-services",
    icon: Wrench,
  },
]

const features = [
  { title: "Licensed & Certified", description: "Fully licensed contractors with industry certifications", icon: BadgeCheck },
  { title: "Experienced Team", description: "Years of expertise in water and power solutions", icon: Users },
  { title: "Quality Guarantee", description: "All work backed by comprehensive warranties", icon: ShieldCheck },
  { title: "24/7 Support", description: "Round-the-clock customer service and emergency response", icon: Headphones },
]

export default async function Home() {
  const partners = await prisma.partner.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "asc" },
  })

  const testimonials = await prisma.testimonial.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.homeHero}
            alt="Borehole drilling in progress"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/85 to-blue-600/80" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-4xl">
            <span
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 animate-hero-in"
              style={{ animationDelay: "0ms" }}
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Water • Power • Solutions
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-hero-in"
              style={{ animationDelay: "80ms" }}
            >
              Water. Power. <span className="text-gradient">Solutions.</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-4 text-blue-100 font-medium animate-hero-in"
              style={{ animationDelay: "160ms" }}
            >
              From Ground to Grid — Complete Water & Power Services
            </p>
            <p
              className="text-lg mb-10 text-blue-100/90 max-w-2xl animate-hero-in"
              style={{ animationDelay: "240ms" }}
            >
              Reliable water drilling, power installation, tank construction, and solar pump solutions for residential, commercial, and industrial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-in" style={{ animationDelay: "320ms" }}>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 hover:shadow-xl transition-all"
              >
                View Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+254721787197"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:shadow-xl transition-all"
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Floating stat card */}
        <div className="hidden lg:block absolute bottom-16 right-16 xl:right-24 animate-float">
          <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl px-8 py-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/90 flex items-center justify-center">
                <Building2 className="text-white" size={24} />
              </div>
              <div>
                <div className="text-4xl font-bold">
                  <CountUp end={500} />+
                </div>
                <div className="text-sm text-blue-100">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Reveal>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <CountUp end={10} />+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </Reveal>
            <Reveal delay={80}>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <CountUp end={500} />+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </Reveal>
            <Reveal delay={160}>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <CountUp end={100} />%
              </div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </Reveal>
            <Reveal delay={240}>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={images.homeWork}
                  alt="Borehole drilling and well installation project"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
                  Featured Work
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                  Drilling Projects We're Proud Of
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  From deep boreholes that bring clean water to communities, to complete
                  well installations for homes and farms — our drilling teams get the job
                  done right, on time, and to spec.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Precision drilling for reliable, high-yield water sources",
                    "Licensed crews and certified quality on every site",
                    "Full installation: casing, pumps, and water testing",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="text-blue-600 shrink-0 mt-0.5" size={20} />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all"
                  >
                    See Our Projects
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/services/water-drilling"
                    className="inline-flex items-center justify-center bg-blue-50 text-blue-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-100 transition-colors"
                  >
                    Water Drilling Services
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive water and power solutions tailored to your needs
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={index} delay={(index % 3) * 100}>
                  <Link
                    href={service.href}
                    className="group relative block bg-white rounded-2xl border border-gray-100 p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-blue-600/20">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="text-blue-600 font-semibold inline-flex items-center gap-1.5">
                      Learn More
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
            <Reveal delay={200}>
              <Link
                href="/contact"
                className="group relative block h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-sm font-medium text-blue-200 mb-2">Custom Project?</div>
                <h3 className="text-xl font-bold text-white mb-3">Can't Find What You Need?</h3>
                <p className="text-blue-100 mb-6">
                  We take on bespoke water and power projects. Let's discuss your requirements.
                </p>
                <span className="inline-flex items-center gap-1.5 font-semibold text-white border border-white/30 bg-white/10 px-4 py-2 rounded-lg group-hover:bg-white/20 transition-colors">
                  Talk to Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-white/60 px-3 py-1.5 rounded-full mb-4">
              Why Decree Ltd
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose Decree Ltd?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence in every project
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Reveal key={index} delay={index * 80}>
                  <div className="group text-center">
                    <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
              Trusted Network
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work alongside trusted organizations and suppliers to deliver the best
              materials, equipment, and expertise to every project.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Reveal key={partner.id} delay={(index % 3) * 100}>
                <div className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200">
                  {partner.logo ? (
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="64px"
                        className="object-contain rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="text-blue-600" size={32} />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{partner.name}</h3>
                  {partner.description && (
                    <p className="text-gray-500 text-sm">{partner.description}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <Link
              href="/partnerships"
              className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              View All Partnerships
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-white/60 px-3 py-1.5 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real reviews from clients we've served across the region
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.length === 0 ? (
              <p className="text-gray-500 col-span-full text-center">
                Our customers have great things to say — check back soon.
              </p>
            ) : (
              testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.id} delay={(index % 3) * 100}>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8">
                    <div className="flex text-gold mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? "text-gold" : "text-gray-300 "}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t border-gray-100 pt-4">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      {testimonial.company && (
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free consultation on your water or power needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+254721787197"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-xl transition-all"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}