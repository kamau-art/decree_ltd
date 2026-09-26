import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, Globe, Package, ShieldCheck } from "lucide-react"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us | Decree Ltd",
  description:
    "Get in touch with Decree Ltd for water drilling, power installation, tank construction, solar pumps, and piping services.",
}

export default function ContactPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative container mx-auto px-4">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-blue-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-sky-100 max-w-3xl">
            Ready to start your project? Reach out and we'll get back to you with a clear plan
            and honest pricing.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <a href="tel:+254721787197" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                        +254 721 787 197
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <a href="mailto:decreelimited@gmail.com" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                        decreelimited@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Globe className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Website</div>
                      <a href="https://decreelimited.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                        decreelimited.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      <div className="text-gray-800 font-medium">
                        CPA Centre, off Thika Road,
                        <br />
                        next to KCA University, Nairobi
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Package className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Postal Address</div>
                      <div className="text-gray-800 font-medium">P.O. Box 58893-00200, Nairobi</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Clock className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Working Hours</div>
                      <div className="text-gray-800 font-medium">Mon – Sat: 8:00 AM – 6:00 PM</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg p-6 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">Why Work With Us?</h3>
                  <p className="text-sky-100 text-sm">
                    Licensed professionals, quality materials, and honest pricing on every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}