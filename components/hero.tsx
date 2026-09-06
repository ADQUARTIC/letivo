"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitBranch } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-brand-primary font-semibold tracking-[0.2em] text-sm">» FUEL DISTRIBUTION</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter text-black">
              Reliable Fuel.
              <br />
              <span className="text-brand-primary">Delivered When You Need It.</span>
            </h1>
            <p className="text-gray-600 max-w-lg text-lg">
              We provide dependable fuel distribution and bulk fuel supply solutions to businesses, fleets, industries,
              construction sites, agricultural operations, and commercial customers across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Button
                onClick={() => document.getElementById("free-consultation")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-brand-primary text-white hover:bg-brand-secondary rounded-lg px-8 py-4 font-semibold text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => document.getElementById("working-process")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="flex items-center justify-center gap-2 sm:gap-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 px-6 sm:px-8 py-4 rounded-lg font-semibold text-base hover:scale-105 w-full sm:w-auto"
              >
                <GitBranch className="w-5 h-5 text-white hidden sm:block" />
                <span className="text-sm sm:text-base">Our Process</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/hero-business-meeting.jpg"
              alt="Professional team in a business meeting"
              width={600}
              height={500}
              className="object-cover rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>
      </div>
    </section>
  )
}
