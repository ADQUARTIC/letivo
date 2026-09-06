import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart, Landmark, Users } from "lucide-react"

const cardColors = [
  "bg-[#19b0c5] border-[#19b0c5]/30 hover:border-[#19b0c5]",
  "bg-white border-gray-200 hover:border-brand-primary text-black",
  "bg-[#19b0c5] border-[#19b0c5]/30 hover:border-[#19b0c5]",
]

const services = [
  {
    icon: <BarChart className="w-8 h-8 text-brand-primary" />,
    title: "Strategy Development",
    description: "We help our clients to craft strategic plans that drive clarity, growth, and long-term success.",
  },
  {
    icon: <Landmark className="w-8 h-8 text-brand-primary" />,
    title: "Market Intelligence",
    description: "We help our clients to uncover trends and insights that guide smarter business decisions.",
  },
  {
    icon: <Users className="w-8 h-8 text-brand-primary" />,
    title: "Operational Excellence",
    description: "We provide expert support to our clients to optimise processes and deliver greater impact.",
  },
]

export function WhatWeDo() {
  return (
    <section className="bg-brand-dark py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-primary font-semibold tracking-widest">» WHAT WE DO</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            The service we offer is specifically designed to meet your needs.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${cardColors[index]} p-6 rounded-lg group transition-all duration-300 transform hover:-translate-y-2`}
            >
              <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
                <div className={`${index === 1 ? "bg-gray-100" : "bg-gray-800/50"} p-4 rounded-full`}>
                  {service.icon}
                </div>
                <span className={`text-5xl font-bold ${index === 1 ? "text-gray-300" : "text-gray-700"}`}>
                  0{index + 1}
                </span>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className={`text-2xl font-bold mb-2 ${index === 1 ? "text-black" : "text-white"}`}>
                  {service.title}
                </CardTitle>
                <p className={`mb-4 ${index === 1 ? "text-gray-600" : "text-white"}`}>{service.description}</p>
                <a
                  href="#about-company"
                  className="font-semibold flex items-center gap-2 transition-all duration-300 hover:gap-3 text-base"
                >
                  Read More <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
