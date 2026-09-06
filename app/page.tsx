import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { AboutCompany } from "@/components/about-company"
import { AboutUs } from "@/components/about-us"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Cta } from "@/components/cta"
import { ConsultingServices } from "@/components/consulting-services"
import { WorkingProcess } from "@/components/working-process"
import { Testimonials } from "@/components/testimonials"
import { FreeConsultation } from "@/components/free-consultation"
import { Footer } from "@/components/footer"
import { MotionWrapper } from "@/components/motion-wrapper"

export default function HomePage() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Light Header and Hero */}
      <div className="bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <span className="text-[12rem] font-extrabold text-gray-100/50 absolute -bottom-20 -left-20 select-none hidden lg:block">
            LETIVO
          </span>
          <span className="text-[12rem] font-extrabold text-gray-100/50 absolute -bottom-20 -right-20 select-none hidden lg:block">
            CONSULTING
          </span>
        </div>
        <div className="relative z-10">
          <Header />
          <main>
            <MotionWrapper>
              <Hero />
            </MotionWrapper>
          </main>
        </div>
      </div>

      {/* Dark Section */}
      <div className="bg-brand-dark text-white">
        <MotionWrapper>
          <WhatWeDo />
        </MotionWrapper>
      </div>

      {/* Light and Alternating Sections */}
      <main>
        <MotionWrapper>
          <AboutCompany />
        </MotionWrapper>
        <MotionWrapper>
          <ConsultingServices />
        </MotionWrapper>
        <MotionWrapper>
          <WorkingProcess />
        </MotionWrapper>
        <div className="bg-brand-dark text-white">
          <MotionWrapper>
            <WhyChooseUs />
          </MotionWrapper>
        </div>
        <MotionWrapper>
          <Testimonials />
        </MotionWrapper>
        <MotionWrapper>
          <FreeConsultation />
        </MotionWrapper>
        <div className="bg-brand-dark text-white">
          <MotionWrapper>
            <AboutUs />
          </MotionWrapper>
        </div>
        <MotionWrapper>
          <Cta />
        </MotionWrapper>
      </main>
      <Footer />
    </div>
  )
}
