"use server"

import { mkdir, unlink, writeFile } from "node:fs/promises"
import path from "node:path"
import { randomUUID } from "node:crypto"
import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma"
import { requireAdmin } from "@/lib/auth"

const uploadDirectory = path.join(process.cwd(), "public", "uploads")
const maxImageSize = 5 * 1024 * 1024
const imageExtensions: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/avif": ".avif",
  "image/gif": ".gif",
}

export async function createService(formData: FormData) {
  const slug = formData.get("slug") as string
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const category = formData.get("category") as string
  const image = (formData.get("image") as string) || null

  if (!slug || !title || !description || !category) return

  const normalizedSlug = slug.toLowerCase().trim().replace(/\s+/g, "-")

  const count = await prisma.service.count()

  await prisma.service.create({
    data: {
      slug: normalizedSlug,
      title,
      description,
      category,
      image,
      order: count + 1,
      isActive: true,
    },
  })

  revalidatePath("/admin/services")
  revalidatePath("/services")
}

export async function toggleService(id: string) {
  const service = await prisma.service.findUnique({ where: { id } })
  if (!service) return

  await prisma.service.update({
    where: { id },
    data: { isActive: !service.isActive },
  })

  revalidatePath("/admin/services")
  revalidatePath("/services")
}

export async function deleteService(id: string) {
  await prisma.service.delete({ where: { id } })
  revalidatePath("/admin/services")
  revalidatePath("/services")
}

export async function createTestimonial(formData: FormData) {
  const name = formData.get("name") as string
  const text = formData.get("text") as string
  const company = (formData.get("company") as string) || null
  const rating = Number(formData.get("rating")) || 5

  if (!name || !text) return

  await prisma.testimonial.create({
    data: { name, text, company, rating, isActive: true },
  })

  revalidatePath("/admin/testimonials")
  revalidatePath("/")
}

export async function toggleTestimonial(id: string) {
  const item = await prisma.testimonial.findUnique({ where: { id } })
  if (!item) return

  await prisma.testimonial.update({
    where: { id },
    data: { isActive: !item.isActive },
  })

  revalidatePath("/admin/testimonials")
  revalidatePath("/")
}

export async function deleteTestimonial(id: string) {
  await prisma.testimonial.delete({ where: { id } })
  revalidatePath("/admin/testimonials")
  revalidatePath("/")
}

export async function createPortfolioItem(formData: FormData) {
  if (!(await requireAdmin())) return

  const title = ((formData.get("title") as string) || "").trim()
  const category = ((formData.get("category") as string) || "").trim()
  const description = ((formData.get("description") as string) || "").trim() || null
  const image = formData.get("image")

  if (!title || !category || !image || typeof image === "string" || image.size === 0) return
  if (image.size > maxImageSize) return

  const extension = imageExtensions[image.type]
  if (!extension) return

  const filename = `${randomUUID()}${extension}`
  const imagePath = path.join(uploadDirectory, filename)

  await mkdir(uploadDirectory, { recursive: true })
  await writeFile(imagePath, Buffer.from(await image.arrayBuffer()))

  try {
    const count = await prisma.portfolio.count()

    await prisma.portfolio.create({
      data: {
        title,
        category,
        description,
        images: [`/uploads/${filename}`],
        order: count + 1,
        isActive: true,
      },
    })
  } catch (error) {
    await unlink(imagePath).catch(() => undefined)
    throw error
  }

  revalidatePath("/admin/portfolio")
  revalidatePath("/portfolio")
}

export async function deletePortfolioItem(id: string) {
  await prisma.portfolio.delete({ where: { id } })
  revalidatePath("/admin/portfolio")
  revalidatePath("/portfolio")
}

export async function createCertification(formData: FormData) {
  const name = formData.get("name") as string
  const issuer = (formData.get("issuer") as string) || null
  const number = (formData.get("number") as string) || null

  if (!name) return

  await prisma.certification.create({
    data: { name, issuer, number, isActive: true },
  })

  revalidatePath("/admin/certifications")
  revalidatePath("/certifications")
}

export async function deleteCertification(id: string) {
  await prisma.certification.delete({ where: { id } })
  revalidatePath("/admin/certifications")
  revalidatePath("/certifications")
}

export async function createPartner(formData: FormData) {
  const name = formData.get("name") as string
  const description = (formData.get("description") as string) || null
  const website = (formData.get("website") as string) || null
  const logo = (formData.get("logo") as string) || null

  if (!name) return

  await prisma.partner.create({
    data: { name, description, website, logo, isActive: true },
  })

  revalidatePath("/admin/partners")
  revalidatePath("/partnerships")
}

export async function deletePartner(id: string) {
  await prisma.partner.delete({ where: { id } })
  revalidatePath("/admin/partners")
  revalidatePath("/partnerships")
}

export async function updateMessageStatus(id: string, status: string) {
  await prisma.contactForm.update({
    where: { id },
    data: { status },
  })
  revalidatePath("/admin/messages")
}

export async function deleteMessage(id: string) {
  await prisma.contactForm.delete({ where: { id } })
  revalidatePath("/admin/messages")
}
