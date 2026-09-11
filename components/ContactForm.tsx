"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to submit")

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputClasses =
    "w-full px-4 py-2.5 bg-white  border border-gray-200  rounded-lg text-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow placeholder:text-gray-400 "

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+254 721 787 197"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="service">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="">Select a service</option>
            <option value="water-drilling">Water Drilling & Boreholes</option>
            <option value="power-installation">Power Installation & Electrical</option>
            <option value="tank-construction">Tank Construction & Installation</option>
            <option value="solar-solutions">Solar Solutions & Pumps</option>
            <option value="piping-services">Piping & Last-Mile Connections</option>
            <option value="other">Other / General Inquiry</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all disabled:opacity-50 disabled:hover:shadow-none"
      >
        {status === "loading" ? "Submitting..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-green-600 font-semibold text-center">
          Thank you! Your message has been sent. We'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 font-semibold text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}