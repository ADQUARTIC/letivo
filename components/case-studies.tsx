import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    image: "/case-study-1.png",
    category: "Business Strategy",
    title: "Growth strategy for a tech startup",
  },
  {
    image: "/case-study-2.png",
    category: "Financial Consulting",
    title: "Optimizing financial operations for a retail chain",
  },
  {
    image: "/case-study-3.png",
    category: "Market Analysis",
    title: "Market entry analysis for a global brand",
  },
]

export function CaseStudies() {
  return (
    <section className="bg-[#121212] py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-yellow font-semibold tracking-widest">» OUR CASE STUDY</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Our latest case studies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-[#1a1a1a] border-gray-800 rounded-lg overflow-hidden group">
              <div className="relative h-60">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
              </div>
              <CardContent className="p-6">
                <p className="text-brand-yellow text-sm font-semibold mb-2">{study.category}</p>
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                <Link
                  href="#"
                  className="font-semibold text-white group-hover:text-brand-yellow flex items-center gap-2"
                >
                  View Case <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
