import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Learn about DevAstra Tech's journey, our mission, and the team behind our success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
  <Badge className="mb-4" variant="outline">
    Our Journey
  </Badge>
  <h2 className="text-3xl md:text-4xl font-bold mb-6">From Vision to Reality</h2>
  <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
    DevAstra Tech was founded in 2025 with a bold vision — to empower businesses through innovative, reliable, and cutting-edge IT solutions. What began as a passionate idea among developers has grown into a dynamic tech startup offering a wide range of digital services.
  </p>
  <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
    With a strong focus on modern web and app development, UI/UX design, digital marketing, and AI-powered tools like ApX Engine, we’ve positioned ourselves at the intersection of technology and impact. Our agile team adapts quickly to trends and builds meaningful solutions that drive growth.
  </p>
  <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
    Today, DevAstra Tech is on a mission to help startups, small businesses, and growing enterprises turn their ideas into digital reality — with precision, creativity, and innovation at every step.
  </p>
</div>

            <div className="order-first lg:order-last mb-8 lg:mb-0">
              <Image
                src="/abt.jpg?height=600&width=600"
                alt="Our Journey"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Mission & Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our mission and values form the foundation of everything we do at DevAstra Tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and
                competitive advantage in the digital age.
              </p>

              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
                To be the leading IT solutions provider known for excellence, innovation, and transformative impact on
                businesses worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full mr-4">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Excellence</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We strive for excellence in everything we do, from code quality to client communication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-4">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We embrace new technologies and approaches to solve complex problems creatively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-4">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Integrity</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We operate with honesty, transparency, and ethical standards in all our interactions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full mr-4">
                    <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Client-Centric</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We put our clients' needs first and measure our success by their satisfaction and success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Experts</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our talented team of professionals is the heart of DevAstra Tech. Each member brings unique skills and
              expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <Card className="border-gray-200 dark:border-gray-800 text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src="/raj.jpeg?height=128&width=128"
                    alt="Team Member"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Rajesh Tekawade</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-4">CEO</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  With a strong foundation in software development and a passion for innovation, Rajesh founded DevAstra Tech to help businesses harness the true power of technology.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://www.linkedin.com/in/rajesh-tekawade-b00696229/?originalSubdomain=in" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                  <Link href="https://x.com/RajeshTekawade" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Team Member 3 */}
            <Card className="border-gray-200 dark:border-gray-800 text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src="/om.jpg?height=128&width=128"
                    alt="Team Member"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Om Salunkhe</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-4">CPO</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Om directs product strategy at DevAstra Tech, merging deep technical insight with creative innovation to deliver intuitive and feature-rich digital solutions.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://www.linkedin.com/in/om-salunkhe-275309258/" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card className="border-gray-200 dark:border-gray-800 text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src="/sak.jpg?height=128&width=128"
                    alt="Team Member"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                    <h3 className="text-xl font-bold mb-1">Sakshee Yande</h3>
                    <p className="text-purple-600 dark:text-purple-400 mb-4">CFO</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Sakshee manages our financial planning and strategy, ensuring the company’s growth remains aligned with our long-term business goals.
                      </p>

                <div className="flex justify-center space-x-4">
                  <Link href="https://www.linkedin.com/in/sakshee-yande-76a2a4258/" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                  <Link href="https://x.com/sakshee_yande" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="border-gray-200 dark:border-gray-800 text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Team Member"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Abhishek Takawane</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-4">CTO</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Abhishek drives our technology vision with deep expertise in software engineering and a focus on building scalable, future-ready solutions.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://www.linkedin.com/in/abhishek-takawane-aa1161225/" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                  <Link href="https://x.com/AbhishekMachin1" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Don't just take our word for it. Here's what our clients have to say about working with DevAstra Tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-gray-200 dark:border-gray-800">
              <CardContent className="pt-10">
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-center mb-8">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300">
                    “DevAstra Tech built our very first website from the ground up, and the results have been incredible. We finally have an online presence that truly reflects our brand. Their team understood our vision, guided us throughout, and delivered a clean, professional site that our customers love.”
                  </p>
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Client"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold">Akshay Tekawade</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Executive Director, PASTECH Lifts</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
                        <Card className="border-gray-200 dark:border-gray-800">
                          <CardContent className="pt-10">
                            <div className="flex justify-center mb-6">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                                ))}
                              </div>
                            </div>
                            <blockquote className="text-center mb-8">
                              <p className="text-lg italic text-gray-700 dark:text-gray-300">
                                "The UI/UX design crafted by DevAstra Tech for our expense tracker app, Expensio, was outstanding. It’s clean, intuitive, and our users love how simple it is to manage their finances now."
                              </p>
                            </blockquote>
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                                <Image
                                  src="/placeholder.svg?height=64&width=64"
                                  alt="Client"
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              </div>
                              <p className="font-semibold">Amit Naik</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager, Expensio</p>
                            </div>
                          </CardContent>
                        </Card>
            
                        {/* Testimonial 3 */}
                        <Card className="border-gray-200 dark:border-gray-800">
                          <CardContent className="pt-10">
                            <div className="flex justify-center mb-6">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                                ))}
                              </div>
                            </div>
                            <blockquote className="text-center mb-8">
                              <p className="text-lg italic text-gray-700 dark:text-gray-300">
                                "Working with DevAstra Tech on our StudySphere app was a game changer. The app runs smoothly, is packed with features, and has become essential for our student users across campuses."
                              </p>
                            </blockquote>
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                                <Image
                                  src="/placeholder.svg?height=64&width=64"
                                  alt="Client"
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              </div>
                              <p className="font-semibold">Priya Kulkarni</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Co-Founder, StudySphere</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
            
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project and discover how DevAstra Tech can help you achieve your business
            goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
