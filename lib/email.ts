import nodemailer from "nodemailer"

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com", // Replace with your email or use environment variable
    pass: process.env.EMAIL_PASS || "your-app-password", // Replace with your app password or use environment variable
  },
})

export async function sendEmail({
  subject,
  body,
  to = "rajeshtekawade007@gmail.com",
}: {
  subject: string
  body: string
  to?: string
}) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to,
      subject,
      html: body,
    }

    const info = await transporter.sendMail(mailOptions)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}

export function formatFormDataToHtml(data: Record<string, any>): string {
  let html = '<div style="font-family: Arial, sans-serif; padding: 20px;">'
  html += `<h2 style="color: #6366f1;">New Form Submission</h2>`
  html += '<table style="width: 100%; border-collapse: collapse;">'

  for (const [key, value] of Object.entries(data)) {
    if (value) {
      const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")
      html += `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${formattedKey}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
        </tr>
      `
    }
  }

  html += "</table>"
  html += `<p style="margin-top: 20px; color: #666;">Submitted on ${new Date().toLocaleString()}</p>`
  html += "</div>"

  return html
}
