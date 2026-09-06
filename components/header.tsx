"use client"

import Link from "next/link"
import Image from "next/image"
import { Bookmark, Mail, Clock, LayoutGrid, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full">
      <div className="bg-black text-white text-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-brand-primary" />
            <span>Trusted by Businesses Across South Africa</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-primary" />
              <span>info@letivo.net</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-primary" />
              <span>Working Hours: 08am - 05pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/letivo-logo.png"
              alt="Letivo Logo"
              width={160}
              height={45}
              className="h-11 w-auto"
              priority
              sizes="160px"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#hero" className="hover:text-brand-primary transition-colors cursor-pointer">
              Home
            </a>
            <a href="#what-we-do" className="hover:text-brand-primary transition-colors cursor-pointer">
              Services
            </a>
            <a href="#about-company" className="hover:text-brand-primary transition-colors cursor-pointer">
              About
            </a>
            <a href="#working-process" className="hover:text-brand-primary transition-colors cursor-pointer">
              Process
            </a>
            <a href="#why-choose-us" className="hover:text-brand-primary transition-colors cursor-pointer">
              Why Choose Us
            </a>
            <a href="#testimonials" className="hover:text-brand-primary transition-colors cursor-pointer">
              Testimonials
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => document.getElementById("free-consultation")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-brand-primary text-white hover:bg-brand-secondary rounded-lg px-6 py-3 text-sm font-semibold hidden sm:flex transition-all duration-300 hover:scale-105"
            >
              Get In Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 text-gray-700">
              <LayoutGrid className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
