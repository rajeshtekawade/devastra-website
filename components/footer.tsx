"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"
import { Loader2, CheckCircle } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Create form data for Web3Forms
      const web3FormData = new FormData()
      web3FormData.append("access_key", "6988e870-6739-41f1-a977-b387d7d51d19") // Replace with your access key
      web3FormData.append("email", email)
      web3FormData.append("subject", "Newsletter Subscription from DevAstra Tech Website")
      web3FormData.append("from_name", "DevAstra Tech Website")
      web3FormData.append("message", `New newsletter subscription from: ${email}`)

      // Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setEmail("")
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error(result.message || "Failed to subscribe")
      }
    } catch (err) {
      console.error("Error subscribing to newsletter:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              DevAstra Tech
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Transforming ideas into digital reality with innovative IT solutions.
            </p>
            <div className="flex space-x-6">
              <Link href=" https://www.facebook.com/profile.php?id=61577136521065 " className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href=" https://www.instagram.com/devastra_tech?igsh=b2podW42Y2l3ZHVp" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://x.com/devastra_tech?t=iBEcWcTxxxvk_URipnODZg&s=08" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/devastra-technologies/" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/services#web-development"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#app-development"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#ui-ux-design"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#digital-marketing"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#business-automation"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Business Automation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                  Get the latest news and updates from Devnastra.
                </p>

                {isSubmitted && (
                  <div className="mt-4 flex items-center text-green-600 dark:text-green-400">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm">Successfully subscribed!</span>
                  </div>
                )}

                {error && <div className="mt-4 text-red-600 dark:text-red-400 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:placeholder-gray-400 focus:outline-none focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        "Subscribe"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} DevAstra Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
