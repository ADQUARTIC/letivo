"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const processData = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "This initial phase involves understanding the client's needs, challenges, and goals. Consultants conduct in-depth analysis.",
    details: [
      "Stakeholder Interviews & Data Gathering",
      "Comprehensive Business Analysis",
      "Opportunity Identification",
    ],
    image: "/process-image-1.png",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Based on the assessment, we develop a tailored strategy. This includes setting clear objectives and defining key performance indicators (KPIs).",
    details: ["Strategic Goal Setting", "Roadmap Creation", "Business Model Alignment"],
    image: "/strategy-whiteboard.png",
  },
  {
    step: "03",
    title: "Implementation & Execution",
    description:
      "We work closely with your team to implement the strategy, providing guidance and support throughout the process to ensure a smooth transition.",
    details: ["Project Management", "Change Management Support", "Team Enablement"],
    image: "/team-executing-plan.png",
  },
  {
    step: "04",
    title: "Monitoring & Continuous Improvement",
    description:
      "We monitor progress against KPIs and make adjustments as needed. Our goal is to ensure long-term success and continuous improvement.",
    details: ["Performance Tracking", "Iterative Optimisation", "Data-Driven Decision Support"],
    image: "/data-analytics-dashboard.png",
  },
  {
    step: "05",
    title: "Scaling & Innovation",
    description:
      "Once measurable success is achieved, we support scaling the strategy across business units and drive ongoing innovation for sustainable growth.",
    details: ["Growth Enablement", "Innovation Integration", "Sustainability Planning"],
    image: "/scaling-innovation.png",
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
            From Concept to Execution <br /> Our Consulting <span className="font-light">Process</span>
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
                        src="/working-process-team.jpg"
                        alt={item.title}
                        width={500}
                        height={400}
                        className="rounded-lg object-cover"
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
