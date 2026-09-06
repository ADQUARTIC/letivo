"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Kizito Nantcha",
    position: "CEO of Moody and Smith Digital",
    quote:
      "Working with Letivo was a game changer for our company. Their team quickly identified inefficiencies in our product process and helped us streamline.",
    image: "/testimonial-kizito.png",
  },
  {
    name: "Simphiwe Khumalo",
    position: "Managing Director of Limbic Media",
    quote:
      "Letivo helped clarify how to deliver our event with real quality. Their strategy and execution tools are world class and brought confidence to our team.",
    image: "/testimonial-simphiwe.png",
  },
  {
    name: "Kuhle Mlanduli",
    position: "Senior Project Manager at FUNDI Capital",
    quote:
      "The Letivo team brought energy and expertise. Their business case training helped our staff apply real techniques that improve project success rates.",
    image: "/testimonial-kuhle.png",
  },
  {
    name: "Katlego Chagane",
    position: "Co-founder of Charles & Co. Ventures",
    quote:
      "Letivo's approach to strategic alignment and innovation is sharp. Their insights helped shape our portfolio strategy and accelerate venture growth.",
    image: "/testimonial-katlego.png",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm text-gray-500 font-semibold tracking-[0.2em] mb-2">» OUR TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">What our clients say about us</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Quote Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white fill-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-2xl lg:text-3xl font-semibold text-black leading-snug mb-8">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <p className="text-lg font-bold text-black">{currentTestimonial.name}</p>
                <p className="text-gray-500">{currentTestimonial.position}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 pt-8">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 hover:border-brand-primary hover:text-brand-primary bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-brand-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 hover:border-brand-primary hover:text-brand-primary bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
