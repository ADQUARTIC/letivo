"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const processData = [
  {
    step: "01",
    title: "Requirement & Assessment",
    description:
      "We begin by understanding your fuel requirements, consumption volumes, delivery location, and operational schedule.",
    details: [
      "Fuel Requirement Assessment",
      "Volume & Usage Analysis",
      "Delivery Location Planning",
    ],
    image: "/fuel-depot.jpg",
  },
  {
    step: "02",
    title: "Fuel Sourcing & Planning",
    description:
      "We coordinate fuel sourcing and logistics according to your requirements, ensuring an efficient supply plan.",
    details: ["Fuel Sourcing Coordination", "Logistics Planning", "Efficient Supply Plan"],
    image: "/fuel-refinery.jpg",
  },
  {
    step: "03",
    title: "Delivery & Distribution",
    description:
      "Fuel is transported and delivered to your specified location using an organised and reliable distribution process.",
    details: ["Scheduled Transport", "On-Site Delivery", "Reliable Distribution"],
    image: "/fuel-delivery.jpg",
  },
  {
    step: "04",
    title: "Quality & Service Assurance",
    description:
      "We maintain a strong focus on professional service, responsible fuel handling, and reliable delivery standards.",
    details: ["Responsible Fuel Handling", "Professional Service", "Delivery Standards"],
    image: "/fuel-pumps.jpg",
  },
  {
    step: "05",
    title: "Ongoing Supply & Support",
    description:
      "For customers with recurring requirements, we provide ongoing supply planning and responsive support to help keep your operations running.",
    details: ["Recurring Supply Planning", "Responsive Support", "Operational Continuity"],
    image: "/fuel-station.jpg",
  },
]

export function WorkingProcess() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="working-process" className="bg-[#18adad] text-white py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm text-white/80 font-semibold tracking-[0.2em] mb-2">» WORKING PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            From Fuel Order to Reliable Delivery <br /> Our Fuel Distribution <span className="font-light">Process</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {processData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "border border-gray-200 rounded-xl transition-all duration-300",
                activeStep === index ? "bg-[#F9F7F5]" : "bg-white",
              )}
            >
              {activeStep === index ? (
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <span className="inline-block text-xs font-semibold border border-[#18adad] bg-[#18adad] text-black px-3 py-1 rounded-md">
                        STEP {item.step}
                      </span>
                      <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      <ul className="space-y-2 pt-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-black flex-shrink-0" />
                            <span className="text-gray-800">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={400}
                        className="rounded-lg object-cover w-full h-[320px]"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setActiveStep(index)}
                  className="w-full flex justify-between items-center text-left p-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold bg-[#18adad] px-3 py-1 rounded-md text-black">
                      STEP {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-black">{item.title}</h3>
                  </div>
                  <ChevronRight className="w-6 h-6 text-black/60" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
