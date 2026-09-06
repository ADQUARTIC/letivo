"use server"

/* ---------- helpers ---------- */
const toBase64 = (str: string) => (typeof Buffer !== "undefined" ? Buffer.from(str).toString("base64") : btoa(str))

function logDiag(msg: string, obj?: unknown) {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Mailgun] ${msg}`, obj ?? "")
  }
}

/* ---------- main action ---------- */
export async function sendConsultationEmail(formData: FormData) {
  /* ---- extract form parts ---- */
  const fullName = (formData.get("fullName") ?? "") as string
  const phone = (formData.get("phone") ?? "") as string
  const email = (formData.get("email") ?? "") as string
  const company = (formData.get("company") ?? "") as string
  const service = (formData.get("service") ?? "") as string
  const message = (formData.get("message") ?? "") as string

  /* ---- env ---- */
  const KEY = process.env.MAILGUN_API_KEY ?? ""
  const DOMAIN = process.env.MAILGUN_DOMAIN ?? "" // e.g. sandbox….mailgun.org OR mg.letivo.co.za
  const REGION = process.env.MAILGUN_REGION ?? "us" // "us" (default) | "eu"
  const BASE = process.env.MAILGUN_BASE_URL // allow full override

  /* ---- preview fallback ---- */
  if (!KEY || !DOMAIN) {
    logDiag("Missing creds – returning mock success")
    return {
      success: true,
      message: "Thank you for your quote request! (Running in preview mode – no real email sent.)",
    }
  }

  /* ---- compose ---- */
  const host = BASE ?? (REGION === "eu" ? "https://api.eu.mailgun.net" : "https://api.mailgun.net")
  const endpoint = `${host}/v3/${DOMAIN}/messages`
  const basicAuth = "Basic " + toBase64(`api:${KEY}`)

  const textBody = `
New Quote Request – Letivo Website

Full Name : ${fullName}
Company   : ${company}
Email     : ${email}
Phone     : ${phone}
Service   : ${service}

Message:
${message}

—
Sent automatically from letivo.co.za`.trim()

  /* ---- send ---- */
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: basicAuth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        from: `Letivo Website <mailgun@${DOMAIN}>`,
        to: "sandile.hogana@gmail.com, katlego.chagane@gmail.com",
        subject: `New Fuel Quote • ${fullName} (${company})`,
        text: textBody,
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      console.error("[Mailgun] HTTP", res.status, body)
      throw new Error(`Mailgun responded ${res.status}`)
    }

    return {
      success: true,
      message: "Thank you for your quote request! We'll reply within 24 hours.",
    }
  } catch (err) {
    console.error("Error sending consultation email:", err)
    return {
      success: false,
      message: "We couldn't send your request at the moment – please retry later or email info@letivo.net directly.",
    }
  }
}
