import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Award, Users, Target, TrendingUp } from "lucide-react"

export function AboutUsAlt() {
  const achievements = [
    { icon: Award, value: "2.5k+", label: "Active Clients", color: "text-blue-400" },
    { icon: Users, value: "50+", label: "Expert Team", color: "text-green-400" },
    { icon: Target, value: "10+", label: "Years Experience", color: "text-purple-400" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-brand-yellow" },
  ]

  const features = [
    "We provide the best services for our clients.",
    "We are a team of experts in the field.",
    "We have a proven track record of success.",
    "Dedicated support throughout your journey.",
  ]

  return (
    <section className="bg-brand-dark py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-brand-yellow rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-brand-yellow rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-brand-yellow rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-yellow font-semibold tracking-[0.2em] text-sm mb-3">» ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transforming businesses with <span className="text-brand-yellow">expert guidance</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We combine strategic thinking with practical execution to deliver results that matter.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Left Column - Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-yellow/20 to-transparent p-6 rounded-2xl">
                <Image
                  src="/fuel-depot.jpg"
                  alt="Fuel storage tanks at a supply depot"
                  width={400}
                  height={500}
                  className="rounded-xl object-cover w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-yellow text-black p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm font-semibold">Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-brand-dark-accent rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-brand-dark-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-brand-dark p-4 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                      <achievement.icon className={`w-8 h-8 mx-auto ${achievement.color}`} />
                    </div>
                    <p className={`text-2xl font-bold ${achievement.color}`}>{achievement.value}</p>
                    <p className="text-gray-400 text-sm mt-1">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-brand-yellow text-black hover:bg-yellow-400 rounded-md px-8 py-4 font-semibold text-lg transition-all hover:scale-105"
          >
            Discover Our Story <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
