"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isBlocking, setIsBlocking] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
      setIsBlocking(true)
      // Prevent scrolling when banner is blocking
      document.body.style.overflow = "hidden"
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    setIsBlocking(false)
    document.body.style.overflow = "unset"
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    // Redirect to external site (Google as example)
    window.location.href = "https://www.google.com"
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay to block interaction */}
      {isBlocking && <div className="fixed inset-0 bg-black/50 z-40" />}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold text-black">We use cookies</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic.
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn
                more in our{" "}
                <Link href="/terms-of-service" className="text-brand-primary hover:underline font-medium">
                  Terms of Service
                </Link>
                .
              </p>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto">
              <Button
                onClick={handleReject}
                variant="outline"
                className="flex-1 lg:flex-none border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 bg-transparent"
              >
                Reject All
              </Button>
              <Button
                onClick={handleAccept}
                className="flex-1 lg:flex-none bg-brand-primary text-white hover:bg-brand-secondary px-6 py-2"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
