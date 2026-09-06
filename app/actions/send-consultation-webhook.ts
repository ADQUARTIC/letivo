"use server"

const SERVICES = new Set([
  "bulk-fuel-supply",
  "fuel-delivery",
  "commercial-fuel",
  "industrial-fuel",
  "fleet-fuel",
  "other",
])

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+\d().\-\s]+$/
const NOTION_VERSION = "2022-06-28"
const NOTION_PAGES_URL = "https://api.notion.com/v1/pages"
const DATABASE_ID_RE = /^[a-f0-9]{32}$/i

type QuoteLead = {
  fullName: string
  phone: string
  email: string
  company: string
  service: string
  message: string
}

function clip(value: FormDataEntryValue | null, max: number): string {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, max)
}

function parseLead(formData: FormData): QuoteLead | { error: string } {
  const fullName = clip(formData.get("fullName"), 120)
  const phone = clip(formData.get("phone"), 30)
  const email = clip(formData.get("email"), 254).toLowerCase()
  const company = clip(formData.get("company"), 120)
  const service = clip(formData.get("service"), 40)
  const message = clip(formData.get("message"), 2000)
  const digits = (phone.match(/\d/g) ?? []).length

  if (fullName.length < 1) return { error: "Please enter your name." }
  if (digits < 6 || digits > 20 || !PHONE_RE.test(phone)) return { error: "Please enter a valid phone number." }
  if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." }
  if (company.length < 1) return { error: "Please enter your company name." }
  if (!SERVICES.has(service)) return { error: "Please select a service." }
  if (message.length < 1) return { error: "Please tell us about your fuel requirements." }

  return { fullName, phone, email, company, service, message }
}

function notionConfigured(): { token: string; databaseId: string } | null {
  const token = process.env.NOTION_TOKEN ?? process.env.NOTION_API_KEY ?? ""
  const rawId = (process.env.NOTION_DATABASE_ID ?? "").replace(/-/g, "")
  if (!token || !DATABASE_ID_RE.test(rawId)) return null
  return { token, databaseId: rawId }
}

function isAllowedWebhookUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    if (parsed.protocol === "https:") return true
    return (
      process.env.NODE_ENV !== "production" &&
      parsed.protocol === "http:" &&
      (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1")
    )
  } catch {
    return false
  }
}

async function sendToNotion(lead: QuoteLead, token: string, databaseId: string): Promise<boolean> {
  const response = await fetch(NOTION_PAGES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: lead.fullName } }] },
        Email: { email: lead.email },
        Phone: { phone_number: lead.phone },
        Company: { rich_text: [{ text: { content: lead.company } }] },
        Service: { rich_text: [{ text: { content: lead.service } }] },
        Message: { rich_text: [{ text: { content: lead.message } }] },
      },
    }),
  })

  if (!response.ok) {
    console.error("[Notion] page create failed", response.status)
    return false
  }
  return true
}

async function sendToMake(lead: QuoteLead, webhookUrl: string): Promise<boolean> {
  if (!isAllowedWebhookUrl(webhookUrl)) {
    console.error("[Webhook] MAKE_WEBHOOK_URL must be https")
    return false
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: lead.fullName,
      phone: lead.phone,
      email: lead.email,
      company: lead.company,
      service: lead.service,
      message: lead.message,
      timestamp: new Date().toISOString(),
      source: "Letivo Website",
    }),
  })

  if (!response.ok) {
    console.error("[Webhook] Make request failed", response.status)
    return false
  }
  return true
}

export async function sendConsultationWebhook(formData: FormData) {
  const parsed = parseLead(formData)
  if ("error" in parsed) {
    return { success: false, message: parsed.error }
  }

  const notion = notionConfigured()
  const webhookUrl = process.env.MAKE_WEBHOOK_URL ?? ""
  const makeEnabled = webhookUrl.length > 0

  if (!notion && !makeEnabled) {
    if (process.env.NODE_ENV === "production") {
      console.error("[Quote] no lead destination configured")
      return {
        success: false,
        message: "There was an error sending your request. Please try again or email info@letivo.net directly.",
      }
    }
    return {
      success: true,
      message: "Thank you for your quote request! (Running in preview mode – no lead stored.)",
    }
  }

  const results = await Promise.all([
    notion ? sendToNotion(parsed, notion.token, notion.databaseId) : Promise.resolve(null),
    makeEnabled ? sendToMake(parsed, webhookUrl) : Promise.resolve(null),
  ])

  const attempted = results.filter((result): result is boolean => result !== null)
  if (!attempted.some(Boolean)) {
    return {
      success: false,
      message: "There was an error sending your request. Please try again or email info@letivo.net directly.",
    }
  }

  return {
    success: true,
    message: "Thank you for your quote request! We'll reply within 24 hours.",
  }
}
