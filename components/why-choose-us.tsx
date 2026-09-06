import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const features = [
  {
    title: "Reliable Supply",
    content:
      "We help businesses maintain consistent access to the fuel they need to keep vehicles, equipment, machinery, and operations running.",
  },
  {
    title: "Professional Service",
    content:
      "From enquiry to delivery, our team focuses on clear communication, efficient coordination, and dependable customer support.",
  },
  {
    title: "Flexible Solutions",
    content:
      "Whether you require a once-off delivery or regular bulk fuel supply, we develop solutions around your operational requirements.",
  },
  {
    title: "Safety & Compliance",
    content:
      "We prioritise responsible fuel handling, transportation, and delivery while operating with a strong focus on safety and applicable industry requirements.",
  },
  {
    title: "Competitive Solutions",
    content:
      "We work to provide practical and cost-effective fuel distribution solutions without compromising service quality.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#1a1a1a] py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-brand-primary font-semibold tracking-widest">» WHY CHOOSE US</p>
            <h2 className="text-4xl md:text-5xl font-bold">We Deliver More Than Fuel</h2>
            <p className="text-gray-400">
              We understand that reliable fuel supply is critical to your business. Our approach combines dependable
              distribution, professional service, and flexible solutions designed around your needs.
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
                alt="Team collaborating in a meeting"
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
