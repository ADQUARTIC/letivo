export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Cookie Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                This website uses cookies to enhance user experience, analyse site traffic, and serve personalised
                content. By using our website, you consent to our use of cookies in accordance with this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Types of Cookies We Use</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-black">Essential Cookies</h3>
                  <p className="text-gray-600">Required for the website to function properly.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Analytics Cookies</h3>
                  <p className="text-gray-600">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Marketing Cookies</h3>
                  <p className="text-gray-600">
                    Used to deliver relevant advertisements and track campaign performance.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black">Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service or our Cookie Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@letivo.net
                  <br />
                  <strong>Website:</strong> www.letivo.co.za
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
