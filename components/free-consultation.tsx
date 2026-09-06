"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle } from "lucide-react"
import { sendConsultationWebhook } from "@/app/actions/send-consultation-webhook"

export function FreeConsultation() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [selectedService, setSelectedService] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)

    // Add the selected service to form data
    formData.set("service", selectedService)

    try {
      const result = await sendConsultationWebhook(formData)
      setMessage(result.message)
      if (result.success) {
        setIsSubmitted(true)
      }
    } catch (error) {
      setMessage("There was an error sending your request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="free-consultation" className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F9F7F5] rounded-2xl p-8 sm:p-12 lg:p-16">
            <div className="text-center max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{message}</p>
              </div>
              <div className="pt-6">
                <Button
                  onClick={() => {
                    setIsSubmitted(false)
                    setMessage("")
                    setSelectedService("")
                  }}
                  variant="outline"
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                >
                  Submit Another Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="free-consultation" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F9F7F5] rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-500 font-semibold tracking-[0.2em] mb-2">» NEED FUEL SUPPLY</p>
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  Ready to Secure Your Fuel Supply?
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Whether you need bulk diesel, petrol, or ongoing fuel distribution for your business, our team is
                  ready to help. Tell us what you need, where you need it, and your expected fuel volume.
                </p>
              </div>
              <div className="pt-8">
                <div>
                  <h4 className="font-bold text-black text-lg mb-2">Contact Us</h4>
                  <a href="mailto:info@letivo.net" className="text-gray-600 hover:text-brand-primary transition-colors">
                    info@letivo.net
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Get a Fuel Quote</h3>

              {message && !isSubmitted && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{message}</p>
                </div>
              )}

              <form action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="text" name="fullName" placeholder="Full Name" className="bg-gray-50" required maxLength={120} />
                  <Input type="text" name="phone" placeholder="Phone" className="bg-gray-50" required maxLength={30} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="email" name="email" placeholder="Email" className="bg-gray-50" required maxLength={254} />
                  <Input type="text" name="company" placeholder="Company Name" className="bg-gray-50" required maxLength={120} />
                </div>
                <div>
                  <Select value={selectedService} onValueChange={setSelectedService} required>
                    <SelectTrigger className="bg-gray-50">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bulk-fuel-supply">Bulk Fuel Supply</SelectItem>
                      <SelectItem value="fuel-delivery">Fuel Delivery & Distribution</SelectItem>
                      <SelectItem value="commercial-fuel">Commercial Fuel</SelectItem>
                      <SelectItem value="industrial-fuel">Industrial Fuel</SelectItem>
                      <SelectItem value="fleet-fuel">Fleet Fuel Solutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea name="message" placeholder="Tell us about your fuel requirements" className="bg-gray-50" rows={5} required maxLength={2000} />
                </div>
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading || !selectedService}
                    className="w-full bg-brand-primary text-white hover:bg-brand-secondary rounded-lg px-8 py-4 font-semibold text-base transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending..." : "Request a Quote"}
                    {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
