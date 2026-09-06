import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const features = [
  {
    title: "Expert Team",
    content:
      "Our team consists of highly skilled professionals with years of experience in business strategy. We are dedicated to delivering impactful solutions tailored to your goals.",
  },
  {
    title: "Best Analytics",
    content:
      "We leverage advanced analytics and data intelligence to help you make informed decisions, improve outcomes, and stay competitive in the market.",
  },
  {
    title: "Fast Working Process",
    content:
      "We pride ourselves on our structured and agile working process, ensuring timely delivery of value without compromising quality. Your growth is our mission.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#1a1a1a] py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-brand-primary font-semibold tracking-widest">» WHY CHOOSE US</p>
            <h2 className="text-4xl md:text-5xl font-bold">We provide the best solution for your business</h2>
            <p className="text-gray-400">
              We are committed to excellence and innovation. Our strategic approach and client-centric focus set us
              apart from the rest.
            </p>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {features.map((feature, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-brand-primary">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">{feature.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex justify-center">
            <div className="bg-brand-primary/10 p-3 rounded-2xl shadow-2xl shadow-brand-primary/20">
              <Image
                src="/business-team-collaboration-transparent.png"
                alt="Team in a strategy session"
                width={500}
                height={700}
                className="rounded-xl object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
