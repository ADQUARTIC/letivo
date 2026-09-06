import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Fuel, Truck, Factory } from "lucide-react"

const cardColors = [
  "bg-[#19b0c5] border-[#19b0c5]/30 hover:border-[#19b0c5]",
  "bg-white border-gray-200 hover:border-brand-primary text-black",
  "bg-[#19b0c5] border-[#19b0c5]/30 hover:border-[#19b0c5]",
]

const services = [
  {
    icon: <Fuel className="w-8 h-8 text-brand-primary" />,
    title: "Bulk Fuel Supply",
    description:
      "We provide efficient bulk fuel supply solutions for businesses and organisations with regular or high-volume fuel requirements.",
  },
  {
    icon: <Truck className="w-8 h-8 text-brand-primary" />,
    title: "Fuel Delivery & Distribution",
    description:
      "Our delivery solutions help ensure that fuel reaches your business, site, fleet, or facility safely and efficiently.",
  },
  {
    icon: <Factory className="w-8 h-8 text-brand-primary" />,
    title: "Commercial & Industrial Fuel",
    description:
      "From construction and agriculture to logistics, manufacturing, mining, and industrial operations, we supply fuel solutions that keep businesses moving.",
  },
]

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-brand-dark py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-primary font-semibold tracking-widest">» WHAT WE DO</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Fuel Solutions Designed Around Your Business</h2>
          <p className="text-gray-300 mt-4 text-lg">
            We provide reliable fuel supply and distribution solutions tailored to the operational needs of businesses
            across South Africa.
          </p>
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
