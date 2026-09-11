import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Globe, ThumbsUp, Star } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Water Drilling", href: "/services/water-drilling" },
    { name: "Power Installation", href: "/services/power-installation" },
    { name: "Tank Construction", href: "/services/tank-construction" },
    { name: "Solar Solutions", href: "/services/solar-solutions" },
    { name: "Piping Services", href: "/services/piping-services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Certifications", href: "/certifications" },
    { name: "Partnerships", href: "/partnerships" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Image
              src="/decree_logo_light.png"
              alt="Decree Ltd logo"
              width={338}
              height={407}
              className="h-14 w-auto mb-4"
              style={{ width: "auto" }}
            />
            <p className="text-gray-400 text-sm mb-4">
              Water. Power. Solutions. Complete water and power services for residential, commercial, and industrial projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold transition-colors" aria-label="Facebook">
                <Globe size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold transition-colors" aria-label="Reviews">
                <Star size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold transition-colors" aria-label="Recommendations">
                <ThumbsUp size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+254721787197" className="hover:text-white transition-colors">+254 721 787 197</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:decreelimited@gmail.com" className="hover:text-white transition-colors">decreelimited@gmail.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>CPA Centre, off Thika Road,<br />next to KCA University, Nairobi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Decree Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
