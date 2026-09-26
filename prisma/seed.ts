import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

const samplePartners = [
  {
    name: "Equipment Supply Co.",
    description: "Equipment Supplier",
    website: null,
  },
  {
    name: "AquaPump Technical",
    description: "Technical Partner",
    website: null,
  },
  {
    name: "National Water Utilities",
    description: "Utility Partner",
    website: null,
  },
  {
    name: "Prime Pipes & Fittings",
    description: "Material Supplier",
    website: null,
  },
  {
    name: "SolarGrid Energy",
    description: "Renewable Energy Partner",
    website: null,
  },
  {
    name: "Rural Development Fund",
    description: "Development Partner",
    website: null,
  },
]

const sampleTestimonials = [
  {
    name: "Margaret Njeru",
    company: "Mukurwe-ini Farm Cooperative",
    rating: 5,
    text: "Decree drilled and equipped our borehole end-to-end. Two years on, the water flow is still steady and their after-sales support has been outstanding. Incredible team.",
  },
  {
    name: "Stephen Kamau",
    company: "Riverside Park Hotel",
    rating: 5,
    text: "From the solar pump design to the final piping connection, everything was delivered on schedule and within budget. We now pump for a third of what we used to pay.",
  },
  {
    name: "Amina Hassan",
    company: "Green Valley Estates",
    rating: 4,
    text: "They installed our overhead tanks and connected the whole estate to clean water. Professional, tidy, and the price was very competitive. Highly recommended.",
  },
  {
    name: "David Ochieng",
    company: "Nairobi Industrial Park",
    rating: 5,
    text: "The industrial power installation was completed by certified electricians with full documentation. Zero downtime since commissioning. Top-tier engineering.",
  },
]

const sampleServices = [
  {
    slug: "water-drilling",
    title: "Water Drilling & Boreholes",
    category: "Water Drilling & Boreholes",
    description:
      "Reliable water supply solutions for residential, commercial, and industrial needs — including hard rock drilling, well rehabilitation, and water testing.",
    image: "/services/water.jpg",
  },
  {
    slug: "power-installation",
    title: "Power Installation & Electrical",
    category: "Power Installation & Electrical",
    description:
      "Complete electrical systems, transformers, backup generators, industrial power, and grid connections — built to certified safety standards.",
    image: "/services/power.jpg",
  },
  {
    slug: "tank-construction",
    title: "Tank Construction & Installation",
    category: "Tank Construction & Installation",
    description:
      "Premium concrete and metallic tanks, including high-end custom fabrication. Underground, above-ground, septic, and custom designs.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "solar-solutions",
    title: "Solar Solutions & Pumps",
    category: "Solar Solutions & Pumps",
    description:
      "Solar-powered water pumping with smart monitoring, inverters, and battery backup. Save up to 90% on pumping energy costs.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "piping-services",
    title: "Piping & Last-Mile Connections",
    category: "Piping & Last-Mile Connections",
    description:
      "Seamless water delivery with PVC and HDPE piping, main line tapping, pressure testing, smart meters, and leak detection.",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1600&q=80",
  },
]

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@decree-ltd.com"
  const password = process.env.ADMIN_PASSWORD || "admin123"

  const existing = await prisma.user.findUnique({ where: { email } })

  if (!existing) {
    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        email,
        name: "Decree Admin",
        password: hashedPassword,
        role: "ADMIN",
      },
    })

    console.log(`Admin user created: ${email} (password: ${password})`)
    console.log("IMPORTANT: Change this password after first login.")
  } else {
    console.log(`Admin user ${email} already exists.`)
  }

  const partnerCount = await prisma.partner.count()

  if (partnerCount === 0) {
    await prisma.partner.createMany({
      data: samplePartners.map((p) => ({ ...p, isActive: true })),
    })
    console.log(`Seeded ${samplePartners.length} sample partners.`)
  } else {
    console.log(`Partners already exist (${partnerCount}). Skipping sample seed.`)
  }

  for (const [index, service] of sampleServices.entries()) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: { ...service, order: index + 1, isActive: true },
    })
  }
  console.log(`Seeded ${sampleServices.length} core services.`)

  const testimonialCount = await prisma.testimonial.count()

  if (testimonialCount === 0) {
    await prisma.testimonial.createMany({
      data: sampleTestimonials.map((t) => ({ ...t, isActive: true })),
    })
    console.log(`Seeded ${sampleTestimonials.length} sample testimonials.`)
  } else {
    console.log(`Testimonials already exist (${testimonialCount}). Skipping sample seed.`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
