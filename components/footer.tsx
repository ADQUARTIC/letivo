import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo */}
          <Link href="/" className="flex justify-center">
            <Image
              src="/letivo-logo.png"
              alt="Letivo Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
              loading="lazy"
              sizes="180px"
            />
          </Link>

          {/* Description */}
          <p className="text-gray-400 max-w-md mx-auto">
            We are a South African fuel distribution company providing reliable fuel supply and delivery solutions to
            businesses, industries, fleets, and commercial customers.
          </p>

          {/* Links */}
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/terms-of-service" className="hover:text-brand-primary transition-colours">
              Terms & Conditions
            </Link>
            <Link href="/terms-of-service" className="hover:text-brand-primary transition-colours">
              Privacy Policy
            </Link>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Letivo. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
