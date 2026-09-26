// Central image configuration.
// Replace these URLs with real photos of Decree Ltd's work when available.
// Keep the same shape (Unsplash or any image URL works via next/image).

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`

export const images = {
  homeHero: u("photo-1504307651254-35680f356dfd"),
  homeWork: "/services/water.jpg",
  waterDrilling: "/services/water.jpg",
  powerInstallation: "/services/power.jpg",
  tankConstruction: u("photo-1504328345606-18bbc8c9d7d1"),
  solarSolutions: u("photo-1509391366360-2e959784a276"),
  pipingServices: u("photo-1517677208171-0bc6725a3e60"),
}

export const imageMap: Record<string, string> = {
  "water-drilling": images.waterDrilling,
  "power-installation": images.powerInstallation,
  "tank-construction": images.tankConstruction,
  "solar-solutions": images.solarSolutions,
  "piping-services": images.pipingServices,
}
