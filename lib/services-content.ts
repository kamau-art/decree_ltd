import type { ServiceContent } from "@/components/ServicePage"
import { imageMap } from "@/lib/images"

export const serviceContents: Record<string, ServiceContent> = {
  "water-drilling": {
    slug: "water-drilling",
    title: "Water Drilling & Boreholes",
    tagline:
      "From residential wells to industrial water solutions — we deliver reliable water supply systems that meet your exact specifications.",
    image: imageMap["water-drilling"],
    problemHeading: "Why Professional Water Drilling Matters",
    problemText: [
      "Water scarcity, unreliable wells, and contamination risks can disrupt your daily operations. Incomplete or inaccurate water data can lead to costly mistakes during construction and long-term water supply issues.",
      "Professional water drilling helps identify water sources, assess water quality, and plan with greater confidence — ensuring your water supply is reliable, safe, and sustainable for years to come.",
    ],
    whyHeading: "Why Choose Decree Ltd for Water Drilling",
    whyItems: [
      {
        title: "Licensed Contractors",
        text: "Fully certified professionals who deliver quality service every time.",
      },
      {
        title: "Precise Depth Control",
        text: "Accurate drilling depth for reliable, consistent water access.",
      },
      {
        title: "Water Testing & Certification",
        text: "Comprehensive water quality analysis to ensure safe consumption.",
      },
      {
        title: "Maintenance Programs",
        text: "Ongoing care packages that protect your investment for the long term.",
      },
      {
        title: "Adaptability",
        text: "When ground conditions vary, we adjust our methods to keep work progressing.",
      },
    ],
    capabilitiesHeading: "Water Drilling Capabilities",
    capabilities: [
      {
        title: "Residential Wells",
        description: "Reliable water supply drilling for homes, ensuring clean, consistent water for your household.",
        bullets: ["Home water supply systems", "Well installation & testing", "Water quality analysis"],
      },
      {
        title: "Commercial Wells",
        description: "Commercial water drilling for businesses, offices, and retail establishments.",
        bullets: ["Office building water supply", "Retail store installations", "Commercial water testing"],
      },
      {
        title: "Industrial Wells",
        description: "Large-scale water drilling for factories, manufacturing plants, and industrial facilities.",
        bullets: ["High-volume water supply", "Deep borehole drilling", "Industrial water treatment"],
      },
      {
        title: "Hard Rock Drilling",
        description: "Specialized drilling for challenging geological formations and difficult terrain.",
        bullets: ["Hard rock penetration", "Specialized equipment", "Expert drilling techniques"],
      },
      {
        title: "Well Rehabilitation",
        description: "Repair and restoration of existing wells to extend their useful life.",
        bullets: ["Well cleaning & repair", "Pump replacement", "Yield restoration"],
      },
      {
        title: "Borehole Drilling",
        description: "Deep borehole drilling to reach reliable, high-yield water sources.",
        bullets: ["Deep borehole drilling", "Casing & screen installation", "Yield testing"],
      },
    ],
    audienceHeading: "Who This Service Is For",
    audienceIntro: "Our water drilling services support:",
    audience: [
      "Residential homeowners",
      "Commercial building owners",
      "Agricultural & farming operations",
      "Industrial facilities",
      "Municipal & public agencies",
      "Infrastructure contractors",
    ],
    faqsHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How deep do you drill for residential wells?",
        answer:
          "Depth varies based on geological conditions and water table levels. We perform a thorough site assessment and drilling plan before any work begins.",
      },
      {
        question: "Do you test the water after drilling?",
        answer:
          "Yes. We conduct comprehensive water quality testing and provide certification that the water is safe for its intended use.",
      },
      {
        question: "How long does a borehole drilling project take?",
        answer:
          "Typical residential boreholes are completed in 1–3 days depending on depth and ground conditions. We provide a clear timeline after the initial site assessment.",
      },
      {
        question: "Do you offer maintenance programs?",
        answer:
          "Yes, we offer ongoing well maintenance programs that include inspections, pump servicing, and water quality monitoring to ensure long-term reliability.",
      },
    ],
    ctaHeading: "Planning a Water Project?",
    ctaText: "We can review your scope and help determine the right approach for your water needs.",
    relatedServices: [
      {
        title: "Solar Solutions & Pumps",
        description: "Solar-powered water pumping systems with smart monitoring.",
        href: "/services/solar-solutions",
      },
      {
        title: "Piping & Last-Mile Connections",
        description: "Seamless water delivery from source to destination.",
        href: "/services/piping-services",
      },
      {
        title: "Tank Construction & Installation",
        description: "Premium concrete and metallic tanks with custom fabrication.",
        href: "/services/tank-construction",
      },
    ],
  },
  "power-installation": {
    slug: "power-installation",
    title: "Power Installation & Electrical",
    tagline:
      "Safe, reliable power solutions for every need — from transformers and distribution to backup generators and industrial systems.",
    image: imageMap["power-installation"],
    problemHeading: "Why Professional Power Installation Matters",
    problemText: [
      "Power outages, compliance issues, and unsafe installations can cost your business thousands in downtime and fines. Faulty electrical work is a leading cause of property damage and injury.",
      "Certified power installation ensures your systems are compliant, efficient, and built to handle your exact load requirements — protecting people, property, and productivity.",
    ],
    whyHeading: "Why Choose Decree Ltd for Power Installation",
    whyItems: [
      {
        title: "Certified Electricians",
        text: "Licensed professionals trained to the latest safety standards.",
      },
      {
        title: "Safety Compliance",
        text: "Every installation meets or exceeds regulatory requirements.",
      },
      {
        title: "Backup Solutions",
        text: "Generators and backup systems keep your operations running.",
      },
      {
        title: "Power Audits",
        text: "We assess your usage to right-size every installation.",
      },
      {
        title: "End-to-End Service",
        text: "From design and supply to installation and commissioning.",
      },
    ],
    capabilitiesHeading: "Power Installation Capabilities",
    capabilities: [
      {
        title: "Power Installation",
        description: "Complete electrical systems for residential, commercial, and industrial properties.",
        bullets: ["Full electrical wiring", "Panel & breaker installation", "Lighting & outlets"],
      },
      {
        title: "Transformers & Distribution",
        description: "Power distribution infrastructure that delivers reliable electricity where you need it.",
        bullets: ["Transformer installation", "Distribution panels", "Load balancing"],
      },
      {
        title: "Backup Generators",
        description: "Emergency power solutions that keep critical systems running during outages.",
        bullets: ["Generator sizing & supply", "Automatic transfer switches", "Fuel & maintenance plans"],
      },
      {
        title: "Industrial Power",
        description: "Heavy-duty electrical installations built for demanding industrial environments.",
        bullets: ["Three-phase systems", "High-voltage installation", "Machine power supply"],
      },
      {
        title: "Power Audits",
        description: "Assessment and optimization of your electrical usage to reduce costs.",
        bullets: ["Energy consumption analysis", "Efficiency recommendations", "Load profiling"],
      },
      {
        title: "Grid Connection",
        description: "Seamless connection of your property to the utility grid.",
        bullets: ["Utility coordination", "Meter installation", "Compliance paperwork"],
      },
    ],
    audienceHeading: "Who This Service Is For",
    audienceIntro: "Our power installation services support:",
    audience: [
      "Homeowners needing safe electrical upgrades",
      "Businesses requiring reliable power",
      "Industrial and manufacturing facilities",
      "Developers and construction companies",
      "Facilities managers",
      "Agricultural operations",
    ],
    faqsHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Are your electricians licensed and insured?",
        answer:
          "Yes, all our electricians are fully licensed, insured, and trained to the latest national and local safety standards.",
      },
      {
        question: "Can you handle both residential and industrial projects?",
        answer:
          "Absolutely. We deliver everything from single-home wiring to high-voltage industrial installations.",
      },
      {
        question: "How do you size a backup generator?",
        answer:
          "We perform a power audit to determine your essential load, then recommend a generator sized for your specific requirements with appropriate headroom.",
      },
      {
        question: "Do you provide power audits?",
        answer:
          "Yes, we assess your current electrical usage and provide recommendations to improve efficiency, reduce costs, and plan for future capacity.",
      },
    ],
    ctaHeading: "Need Reliable Power?",
    ctaText: "Tell us about your project and we'll design the right electrical solution for your needs.",
    relatedServices: [
      {
        title: "Solar Solutions & Pumps",
        description: "Sustainable solar energy and solar-powered pumping systems.",
        href: "/services/solar-solutions",
      },
      {
        title: "Water Drilling & Boreholes",
        description: "Reliable water supply systems that also need power.",
        href: "/services/water-drilling",
      },
      {
        title: "Piping & Last-Mile Connections",
        description: "Water delivery infrastructure, powered by your electrical system.",
        href: "/services/piping-services",
      },
    ],
  },
  "tank-construction": {
    slug: "tank-construction",
    title: "Tank Construction & Installation",
    tagline:
      "Premium water storage solutions built to last — concrete, metallic, and high-end custom tanks for every capacity.",
    image: imageMap["tank-construction"],
    problemHeading: "Why Quality Tank Construction Matters",
    problemText: [
      "Water shortage, contamination, and structural failures can stem from poorly built tanks. Leaks and corrosion waste water, damage property, and compromise safety.",
      "Professional tank construction uses engineered designs, premium materials, and precise installation — giving you storage capacity that performs reliably for decades.",
    ],
    whyHeading: "Why Choose Decree Ltd for Tank Construction",
    whyItems: [
      {
        title: "Premium Metallic Tanks",
        text: "High-end custom fabrication with quality finishes and corrosion protection.",
      },
      {
        title: "Custom Design",
        text: "Tailored capacity and specifications to match your exact requirements.",
      },
      {
        title: "Engineered Durability",
        text: "Structures designed and built to withstand local conditions.",
      },
      {
        title: "Complete Installation",
        text: "We handle construction, site prep, and installation end to end.",
      },
      {
        title: "Safety & Compliance",
        text: "All tanks built to applicable standards and regulations.",
      },
    ],
    capabilitiesHeading: "Tank Construction Capabilities",
    capabilities: [
      {
        title: "Concrete Tank Construction",
        description: "Custom-built concrete storage tanks for large-capacity water needs.",
        bullets: ["Reinforced concrete design", "Large-capacity storage", "Below & above ground"],
      },
      {
        title: "Metallic Tank Installation",
        description: "Steel and aluminum tanks, including high-end custom metallic fabrication.",
        bullets: ["Premium metallic tanks", "Corrosion-resistant coating", "Custom capacities"],
      },
      {
        title: "Underground Tanks",
        description: "Hidden water storage that saves space and protects supply.",
        bullets: ["Buried installation", "Structural reinforcement", "Access & maintenance points"],
      },
      {
        title: "Above-Ground Tanks",
        description: "Visible storage solutions with durable, professional finishes.",
        bullets: ["Elevated stands", "Multiple capacities", "Weather-resistant design"],
      },
      {
        title: "Septic Tank Installation",
        description: "Waste management systems installed to specification.",
        bullets: ["Septic system design", "Excavation & installation", "Drain field setup"],
      },
      {
        title: "Tank Cleaning & Maintenance",
        description: "Sanitization and upkeep services to keep your water safe.",
        bullets: ["Professional cleaning", "Corrosion inspection", "Coating & repairs"],
      },
    ],
    audienceHeading: "Who This Service Is For",
    audienceIntro: "Our tank construction services support:",
    audience: [
      "Homeowners needing water storage",
      "Residential developers",
      "Commercial buildings & hotels",
      "Agricultural operations",
      "Industrial facilities",
      "Municipal water programs",
    ],
    faqsHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What sizes of tanks do you build?",
        answer:
          "We build tanks from small domestic units to large industrial capacities, fully customised to your storage requirements.",
      },
      {
        question: "What is a premium metallic tank?",
        answer:
          "Our high-end metallic tanks use premium-grade steel, advanced corrosion protection, and quality finishes for long-lasting, attractive storage.",
      },
      {
        question: "Do you install underground tanks?",
        answer:
          "Yes, we handle the full underground installation including excavation, reinforcement, and safe access points.",
      },
      {
        question: "Do you offer tank maintenance?",
        answer:
          "Yes, we provide professional cleaning, corrosion inspection, and recoating services to extend the life of your tanks.",
      },
    ],
    ctaHeading: "Planning a Storage Solution?",
    ctaText: "Let's design and build a tank that fits your capacity, space, and budget.",
    relatedServices: [
      {
        title: "Water Drilling & Boreholes",
        description: "Reliable water supply to fill your storage tanks.",
        href: "/services/water-drilling",
      },
      {
        title: "Piping & Last-Mile Connections",
        description: "Connect your tanks to your distribution network.",
        href: "/services/piping-services",
      },
      {
        title: "Solar Solutions & Pumps",
        description: "Solar-powered pumps to move water to and from your tanks.",
        href: "/services/solar-solutions",
      },
    ],
  },
  "solar-solutions": {
    slug: "solar-solutions",
    title: "Solar Solutions & Pumps",
    tagline:
      "Sustainable water pumping with solar power — cut energy costs, reduce grid dependency, and protect the environment.",
    image: imageMap["solar-solutions"],
    problemHeading: "Why Switch to Solar Pumping?",
    problemText: [
      "Rising electricity costs, unreliable grid supply, and environmental concerns make traditional pumping expensive and risky. Diesel and grid-powered pumps burn cash every time they run.",
      "Solar-powered pumps deliver clean, free energy from the sun — drastically reducing operating costs while keeping your water supply flowing even in remote or off-grid locations.",
    ],
    whyHeading: "Why Choose Decree Ltd for Solar Solutions",
    whyItems: [
      {
        title: "Energy Savings",
        text: "Cut pumping energy costs by up to 90% with solar.",
      },
      {
        title: "Off-Grid Capability",
        text: "Reliable water supply in remote locations without grid access.",
      },
      {
        title: "Smart Monitoring",
        text: "Remotely monitor and manage your pumping systems.",
      },
      {
        title: "Complete Integration",
        text: "Solar, inverters, batteries, and pumps as one seamless system.",
      },
      {
        title: "Maintenance Packages",
        text: "Ongoing support to keep your solar systems performing.",
      },
    ],
    capabilitiesHeading: "Solar Solutions Capabilities",
    capabilities: [
      {
        title: "Solar Pump Installation",
        description: "Solar-powered water pumping systems for wells, boreholes, and surface water.",
        bullets: ["Pump sizing & selection", "Panel mounting systems", "Performance testing"],
      },
      {
        title: "Solar Inverter Systems",
        description: "Power conversion and management for efficient solar operation.",
        bullets: ["DC-AC inverters", "Pump inverters", "Efficiency optimization"],
      },
      {
        title: "Battery Backup Integration",
        description: "Energy storage so your pumps run even when the sun isn't shining.",
        bullets: ["Battery bank design", "Charge controllers", "Hybrid setups"],
      },
      {
        title: "Grid & Off-Grid Systems",
        description: "Flexible configurations that work with or without the grid.",
        bullets: ["Grid-tied systems", "Off-grid systems", "Hybrid solutions"],
      },
      {
        title: "Pump Maintenance",
        description: "Repair and optimization of existing pumping systems.",
        bullets: ["Pump servicing", "Motor replacement", "Efficiency tuning"],
      },
      {
        title: "Smart Monitoring",
        description: "Remote management and alerts for your pumping systems.",
        bullets: ["IoT monitoring", "Remote control", "Usage reporting"],
      },
    ],
    audienceHeading: "Who This Service Is For",
    audienceIntro: "Our solar solutions support:",
    audience: [
      "Farmers & agricultural operations",
      "Off-grid homeowners",
      "Remote commercial facilities",
      "Communities & schools",
      "Eco-conscious businesses",
      "NGOs & development projects",
    ],
    faqsHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How much can I save with a solar pump?",
        answer:
          "Most customers reduce pumping energy costs by 70–90%, with systems paying for themselves within a few years of operation.",
      },
      {
        question: "Will my pump work on cloudy days?",
        answer:
          "Yes. With the right battery backup configuration, your system continues operating during cloudy periods and at night.",
      },
      {
        question: "Can solar power my existing pump?",
        answer:
          "In most cases, yes. We assess your current pump's power requirements and design a solar system that powers it efficiently.",
      },
      {
        question: "Do you offer monitoring?",
        answer:
          "Yes, our smart monitoring solutions let you track performance and receive alerts remotely from your phone or computer.",
      },
    ],
    ctaHeading: "Ready to Go Solar?",
    ctaText: "Discover how much you could save with solar-powered water pumping.",
    relatedServices: [
      {
        title: "Power Installation & Electrical",
        description: "Backup and hybrid power integration.",
        href: "/services/power-installation",
      },
      {
        title: "Water Drilling & Boreholes",
        description: "The water source your solar pump will draw from.",
        href: "/services/water-drilling",
      },
      {
        title: "Tank Construction & Installation",
        description: "Storage for the water your solar system pumps.",
        href: "/services/tank-construction",
      },
    ],
  },
  "piping-services": {
    slug: "piping-services",
    title: "Piping & Last-Mile Connections",
    tagline:
      "Seamless water delivery from source to destination — with durable piping, smart meters, and precise installation.",
    image: imageMap["piping-services"],
    problemHeading: "Why Professional Piping Matters",
    problemText: [
      "Leaks, pressure loss, and inefficient distribution waste water and drive up costs. Poor piping can contaminate your supply and damage property.",
      "Professional piping and last-mile connection services deliver clean, reliable water exactly where it's needed — with durable materials and precision installation.",
    ],
    whyHeading: "Why Choose Decree Ltd for Piping",
    whyItems: [
      {
        title: "Quality Materials",
        text: "Premium PVC and HDPE piping built to last.",
      },
      {
        title: "Pressure Testing",
        text: "Every connection verified for integrity before handover.",
      },
      {
        title: "Leak Detection",
        text: "Advanced identification and repair of leaks in your network.",
      },
      {
        title: "Smart Metering",
        text: "Monitor usage and improve billing accuracy.",
      },
      {
        title: "Main Line Tapping",
        text: "Safe, compliant connections to existing water networks.",
      },
    ],
    capabilitiesHeading: "Piping Capabilities",
    capabilities: [
      {
        title: "Last-Mile Connections",
        description: "The final connection delivering water from the network to your property.",
        bullets: ["Household connections", "Commercial connections", "Compliant installation"],
      },
      {
        title: "PVC Piping",
        description: "Standard, durable water piping for a wide range of applications.",
        bullets: ["Full PVC piping networks", "Joint & fitting installation", "System design"],
      },
      {
        title: "HDPE Piping",
        description: "High-density polyethylene solutions for demanding conditions.",
        bullets: ["High-pressure systems", "Bendable, durable pipe", "Butt & electro fusion"],
      },
      {
        title: "Main Line Tapping",
        description: "Safe connections into existing water distribution networks.",
        bullets: ["Live-line tapping", "Flow control valves", "Utility coordination"],
      },
      {
        title: "Pressure Testing",
        description: "Verification of system integrity under pressure.",
        bullets: ["Hydrostatic testing", "Leak verification", "Certification reports"],
      },
      {
        title: "Smart Meters & Leak Detection",
        description: "Advanced monitoring and repair to protect your water supply.",
        bullets: ["Smart meter installation", "Acoustic leak detection", "Flow monitoring"],
      },
    ],
    audienceHeading: "Who This Service Is For",
    audienceIntro: "Our piping services support:",
    audience: [
      "Homeowners connecting to water networks",
      "Commercial & retail properties",
      "Residential developers",
      "Agricultural irrigation networks",
      "Municipal water utilities",
      "Industrial facilities",
    ],
    faqsHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What's a last-mile connection?",
        answer:
          "It's the final pipe that delivers water from the main distribution network into your home or business — including metering and connections.",
      },
      {
        question: "PVC or HDPE piping — which is better?",
        answer:
          "Both are excellent. PVC is ideal for standard installations, while HDPE offers higher pressure ratings and flexibility for demanding terrain.",
      },
      {
        question: "Do you test the system after installation?",
        answer:
          "Yes, every installation undergoes pressure testing and leak verification before we hand over the completed connection.",
      },
      {
        question: "Can you detect existing leaks?",
        answer:
          "Yes, we use acoustic and flow-based methods to locate hidden leaks and repair them efficiently.",
      },
    ],
    ctaHeading: "Need Water Delivered?",
    ctaText: "We'll design and install the piping that brings water to your property, efficiently and reliably.",
    relatedServices: [
      {
        title: "Water Drilling & Boreholes",
        description: "Your independent water source, ready to connect.",
        href: "/services/water-drilling",
      },
      {
        title: "Tank Construction & Installation",
        description: "Storage integrated into your water delivery network.",
        href: "/services/tank-construction",
      },
      {
        title: "Power Installation & Electrical",
        description: "Power for pumps and metering in your network.",
        href: "/services/power-installation",
      },
    ],
  },
}
