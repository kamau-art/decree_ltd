"use client"

import Image from "next/image"
import { useState, type ElementType } from "react"
import { Building2, ChevronDown, Cog, Droplets, Sun, Wrench, Zap } from "lucide-react"

type PortfolioProject = {
  id: string
  title: string
  category: string
  description: string | null
  images: string[]
}

const categoryIcons: Record<string, ElementType> = {
  "Water Drilling": Droplets,
  "Power Installation": Zap,
  "Tank Construction": Building2,
  "Solar Solutions": Sun,
  "Piping Services": Wrench,
}

const DefaultIcon = Cog

export default function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => {
        const Icon = categoryIcons[project.category] || DefaultIcon
        const expanded = expandedId === project.id
        const detailsId = `portfolio-details-${project.id}`

        return (
          <article
            key={project.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
          >
            <div className="relative aspect-[4/3] bg-slate-100">
              {project.images[0] ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-2"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <Icon className="text-white/80" size={48} />
                </div>
              )}
              {project.images.length > 1 && (
                <span className="absolute top-3 right-3 rounded-full bg-gray-900/70 px-3 py-1 text-xs font-semibold text-white">
                  {project.images.length} images
                </span>
              )}
            </div>

            <div className="p-6">
              <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                {project.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
              {project.description ? (
                <p className={`text-gray-600 ${expanded ? "" : "line-clamp-2"}`}>
                  {project.description}
                </p>
              ) : (
                !expanded && <p className="text-gray-500">More project details coming soon.</p>
              )}

              <button
                type="button"
                onClick={() => setExpandedId(expanded ? null : project.id)}
                aria-expanded={expanded}
                aria-controls={detailsId}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {expanded ? "Hide project details" : "View project details"}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>

              {expanded && (
                <div id={detailsId} className="mt-5 border-t border-gray-100 pt-5">
                  {project.images.length > 0 ? (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                        Project gallery
                      </p>
                      <div
                        className={`grid gap-3 ${project.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                      >
                        {project.images.map((image, index) => (
                          <div
                            key={`${image}-${index}`}
                            className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-100 bg-slate-100 ${
                              project.images.length > 1 && index === 0 ? "col-span-2" : ""
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`${project.title} image ${index + 1}`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 33vw"
                              className="object-contain p-2"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-gray-500">No project images available.</p>
                  )}
                </div>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}
