import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Have a question or want to discuss a project? We'd love to hear from you. Reach out to our team using the
              contact information below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">For general inquiries:</p>
                    <Link
                      href="mailto:info@devastra.tech"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      info@devastra.tech
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 mb-1">For support:</p>
                    <Link
                      href="mailto:devastratechnologies@gmail.com"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      devastratechnologies@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Main Office:</p>
                    <Link href="tel:+1234567890" className="text-purple-600 dark:text-purple-400 hover:underline">
                      +91 7385061207
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 mb-1">Customer Support:</p>
                    <Link href="tel:+1234567891" className="text-purple-600 dark:text-purple-400 hover:underline">
                      +91 7385602672
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
  <p className="text-gray-600 dark:text-gray-400">
    4th Floor, Aishwarya 110<br />
    Rasta Peth, Pune 411011<br />
    Maharashtra, India
  </p>
</div>

                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                  <p>Saturday: 10:00 AM - 2:00 PM (IST)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61577136521065"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/devastra_tech?igsh=b2podW42Y2l3ZHVp"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://x.com/devastra_tech?t=iBEcWcTxxxvk_URipnODZg&s=08"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/devastra-technologies/"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
    <div className="rounded-lg overflow-hidden shadow-lg h-[400px] relative">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1108.5449438566066!2d73.86607621226342!3d18.51788745201287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1748106775480!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        style={{ border: 0}}
        allowFullScreen={true}
        loading="lazy"s="lazt"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl">What services does DevAstra Tech offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  DevAstra Tech offers a comprehensive range of IT solutions including web development, app development,
                  UI/UX design, digital marketing, and business automation services tailored to meet your specific
                  business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl">How long does a typical project take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks,
                  while more complex applications can take several months. We'll provide a detailed timeline during the
                  project planning phase.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl">What is your pricing structure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  We offer flexible pricing models including project-based, hourly, and retainer options. Each project
                  is unique, so we provide customized quotes based on your specific requirements after an initial
                  consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl">Do you provide ongoing support after project completion?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, we offer various support and maintenance packages to ensure your digital solutions continue to
                  perform optimally after launch. Our team is always available to address any issues or implement
                  updates as needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how DevAstra Tech can help you achieve your business goals with our tailored IT
            solutions.
          </p>
          <Button size="lg" variant="secondary">
            Get a Free Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
