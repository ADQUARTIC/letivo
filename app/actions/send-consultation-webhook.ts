"use server"

export async function sendConsultationWebhook(formData: FormData) {
  const fullName = (formData.get("fullName") ?? "") as string
  const phone = (formData.get("phone") ?? "") as string
  const email = (formData.get("email") ?? "") as string
  const company = (formData.get("company") ?? "") as string
  const service = (formData.get("service") ?? "") as string
  const message = (formData.get("message") ?? "") as string

  const WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL

  if (!WEBHOOK_URL) {
    console.warn("[Webhook] Missing MAKE_WEBHOOK_URL environment variable")
    return {
      success: true,
      message: "Thank you for your quote request! (Running in preview mode – no real webhook sent.)",
    }
  }

  const submissionData = {
    fullName,
    phone,
    email,
    company,
    service,
    message,
    timestamp: new Date().toISOString(),
    source: "Letivo Website",
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    })

    if (!response.ok) {
      throw new Error(`Webhook responded with status ${response.status}`)
    }

    return {
      success: true,
      message: "Thank you for your quote request! We'll reply within 24 hours.",
    }
  } catch (error) {
    console.error("Error sending consultation webhook:", error)
    return {
      success: false,
      message: "There was an error sending your request. Please try again or email info@letivo.net directly.",
    }
  }
}
