"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, Loader2 } from "lucide-react"

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "web-development-intern",
    coverLetter: "",
    resumeFileName: "",
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, position: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setResumeFile(file)
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // For now, we'll just send the form data without the actual file
      // In a real implementation, you would use FormData to send the file
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "job",
          formData: {
            ...formData,
            submittedFrom: "Job Application Form",
          },
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application")
      }

      // Show success message
      setIsSubmitted(true)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thank you for applying to DevAstra Tech. We've received your application and will review it shortly.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          We'll contact you at {formData.email} if your qualifications match our requirements.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Job Application Form</h2>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (234) 567-890"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Position *</Label>
            <Select value={formData.position} onValueChange={handleSelectChange} required>
              <SelectTrigger id="position">
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development-intern">Web Development Intern</SelectItem>
                <SelectItem value="ui-ux-design-intern">UI/UX Design Intern</SelectItem>
                <SelectItem value="digital-marketing-intern">Digital Marketing Intern</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Tell us why you're interested in this position and what makes you a good fit..."
            rows={5}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="resume">Resume/CV *</Label>
          <Input
            id="resume"
            name="resume"
            type="file"
            onChange={handleFileChange}
            required
            accept=".pdf,.doc,.docx"
            className="cursor-pointer"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB
          </p>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting Application...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </div>
  )
}

export default JobApplicationForm
