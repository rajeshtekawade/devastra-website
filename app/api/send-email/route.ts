import { type NextRequest, NextResponse } from "next/server"
import { sendEmail, formatFormDataToHtml } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { formType, formData } = data

    if (!formData) {
      return NextResponse.json({ error: "Form data is required" }, { status: 400 })
    }

    let subject = "New Form Submission"
    if (formType === "quote") {
      subject = "New Quote Request from DevAstra Tech Website"
    } else if (formType === "contact") {
      subject = "New Contact Form Submission from DevAstra Tech Website"
    } else if (formType === "job") {
      subject = "New Job Application from DevAstra Tech Website"
    }

    const htmlBody = formatFormDataToHtml(formData)

    const result = await sendEmail({
      subject,
      body: htmlBody,
    })

    if (result.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully" })
    } else {
      console.error("Failed to send email:", result.error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in email API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
