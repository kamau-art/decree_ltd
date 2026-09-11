import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Users, Award, Handshake, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Decree Ltd",
  description:
    "Learn about Decree Ltd — our story, our team, our certifications, and the partners we work with to deliver water and power solutions.",
}

const values = [
  {
    title: "Reliability",
    description:
      "We show up on time, deliver on our promises, and build systems that work for decades.",
  },
  {
    title: "Quality",
    description:
      "Premium materials, certified professionals, and workmanship we're proud to stand behind.",
  },
  {
    title: "Integrity",
    description:
      "Honest assessments, transparent pricing, and no surprises. We do what we say.",
  },
  {
    title: "Sustainability",
    description:
      "Solar solutions and water systems that protect both your budget and the environment.",
  },
]

const team = [
  { name: "John Doe", role: "Founder & Managing Director" },
  { name: "Jane Smith", role: "Head of Operations" },
  { name: "Michael Brown", role: "Lead Engineer" },
  { name: "Sarah Wilson", role: "Project Manager" },
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4 py-24">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">About Decree Ltd</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Water. Power. Solutions. We deliver complete water and power services from the ground
            up — drilling, construction, solar, and everything in between.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Decree Ltd was founded on a simple belief: water and power are essential to every
              home, business, and community — and access to them should never be a struggle.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              What started as a borehole drilling operation has grown into a complete solutions
              provider. Today we combine water drilling, power installation, tank construction,
              solar pumping, and piping services under one roof, so our clients never have to
              juggle multiple contractors.
            </p>
            <p className="text-lg text-gray-600">
              Our team of licensed professionals serves residential, commercial, agricultural, and
              municipal clients — delivering reliable systems backed by certifications,
              partnerships, and a reputation built on results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-white/60 px-3 py-1.5 rounded-full mb-4">
              What Guides Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-600/20">
                  <CheckCircle2 className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/20">
                  <Users className="text-white" size={36} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/certifications"
              className="group bg-white rounded-2xl border border-gray-100 shadow-lg p-8 flex items-start gap-4 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <Award className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Certifications</h3>
                <p className="text-gray-600">
                  View our licenses, industry certifications, and quality standards.
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} />
                </span>
              </div>
            </Link>
            <Link
              href="/partnerships"
              className="group bg-white rounded-2xl border border-gray-100 shadow-lg p-8 flex items-start gap-4 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <Handshake className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Partnerships</h3>
                <p className="text-gray-600">
                  Meet the organizations and suppliers we partner with to deliver quality.
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}