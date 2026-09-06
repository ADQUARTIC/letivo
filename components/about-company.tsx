import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutCompany() {
  return (
    <section id="about-company" className="bg-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[12rem] lg:text-[16rem] font-extrabold text-gray-100 select-none opacity-50">
          DISTRIBUTION
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 font-semibold tracking-[0.2em] mb-4">» ABOUT COMPANY</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Keeping South Africa Moving Through{" "}
                <span className="font-light">Reliable Fuel Supply</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Company Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to providing dependable fuel distribution solutions that help businesses operate
                  efficiently, minimise downtime, and keep their operations moving. Through reliable service,
                  professional logistics, and a customer-focused approach, we make fuel supply simple and dependable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">Company Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a trusted fuel distribution partner across South Africa, recognised for reliability, service
                  excellence, safety, and long-term customer relationships.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button asChild className="bg-brand-primary text-white hover:bg-brand-secondary rounded-lg px-8 py-4 font-semibold text-base transition-all duration-300 hover:scale-105">
                <a href="#free-consultation">
                  Work With Us <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/professional-team-meeting.png"
                alt="Professional team in a planning meeting"
                width={500}
                height={600}
                className="rounded-2xl object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary rounded-full opacity-90"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
