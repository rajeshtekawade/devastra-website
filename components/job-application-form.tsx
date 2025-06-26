"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, Loader2, Info } from "lucide-react"

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "web-development-intern",
    coverLetter: "",
    linkedinProfile: "",
    portfolioLink: "",
    experience: "",
    skills: "",
  })
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Create form data for Web3Forms
      const web3FormData = new FormData()
      web3FormData.append("access_key", "6988e870-6739-41f1-a977-b387d7d51d19") // Replace with your access key from web3forms.com
      web3FormData.append("name", formData.name)
      web3FormData.append("email", formData.email)
      web3FormData.append("phone", formData.phone || "Not provided")
      web3FormData.append("position", formData.position)
      web3FormData.append("cover_letter", formData.coverLetter || "Not provided")
      web3FormData.append("linkedin_profile", formData.linkedinProfile || "Not provided")
      web3FormData.append("portfolio_link", formData.portfolioLink || "Not provided")
      web3FormData.append("experience", formData.experience || "Not provided")
      web3FormData.append("skills", formData.skills || "Not provided")
      web3FormData.append("subject", "New Job Application from DevAstra Tech Website")
      web3FormData.append("from_name", "DevAstra Tech Website")

      // Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      })

      const result = await response.json()

      if (result.success) {
        // Show success message
        setIsSubmitted(true)
      } else {
        throw new Error(result.message || "Failed to submit application")
      }
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

      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Application Requirements</AlertTitle>
        <AlertDescription>
          Please provide links to your professional profiles and resume. At least one of LinkedIn profile or resume link
          is required.
        </AlertDescription>
      </Alert>

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
          <Label htmlFor="linkedinProfile">LinkedIn Profile *</Label>
          <Input
            id="linkedinProfile"
            name="linkedinProfile"
            type="url"
            value={formData.linkedinProfile}
            onChange={handleChange}
            required
            placeholder="https://linkedin.com/in/your-profile"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400">Your LinkedIn profile URL</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="portfolioLink">Portfolio Link</Label>
          <Input
            id="portfolioLink"
            name="portfolioLink"
            type="url"
            value={formData.portfolioLink}
            onChange={handleChange}
            placeholder="https://yourportfolio.com or https://github.com/yourusername"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Link to your portfolio website, GitHub profile, or Behance/Dribbble for designers
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Work Experience *</Label>
          <Textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            placeholder="Describe your relevant work experience, internships, projects, or education..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">Skills & Technologies *</Label>
          <Textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            placeholder="List your technical skills, programming languages, tools, and technologies..."
            rows={3}
          />
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

        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          By submitting this application, you agree to our Privacy Policy and Terms of Service.
        </p>
      </form>
    </div>
  )
}

export default JobApplicationForm
