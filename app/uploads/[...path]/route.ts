import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const uploadRoot = path.join(process.cwd(), "data", "uploads")
const contentTypes: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await params

  if (!segments.length) {
    return new NextResponse("Not found", { status: 404 })
  }

  const filePath = path.resolve(uploadRoot, ...segments)
  if (!filePath.startsWith(`${uploadRoot}${path.sep}`)) {
    return new NextResponse("Not found", { status: 404 })
  }

  const contentType = contentTypes[path.extname(filePath).toLowerCase()]
  if (!contentType) {
    return new NextResponse("Not found", { status: 404 })
  }

  try {
    const file = await readFile(filePath)
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch {
    return new NextResponse("Not found", { status: 404 })
  }
}
