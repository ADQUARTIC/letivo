"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Operations Manager",
    position: "Commercial client",
    quote:
      "The team has provided us with reliable fuel deliveries and excellent service. Their responsiveness and professionalism have made managing our fuel requirements much easier.",
  },
  {
    name: "Fleet Manager",
    position: "Logistics client",
    quote:
      "We needed a fuel supplier we could depend on. Their service has been consistent, professional, and well organised.",
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
    <section id="testimonials" className="bg-white py-16 sm:py-20 lg:py-24">
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
