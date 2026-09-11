import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const contactForm = await prisma.contactForm.create({
      data: {
        name,
        email,
        phone: phone || null,
        message: `${service ? `[${service}] ` : ""}${message}`,
        status: "pending",
      },
    })

    return NextResponse.json({ success: true, id: contactForm.id }, { status: 201 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
