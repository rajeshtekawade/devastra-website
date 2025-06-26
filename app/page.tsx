import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Laptop, Lightbulb, LineChart, Smartphone, Star } from "lucide-react"
import QuoteForm from "@/components/quote-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-no-repeat bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <Badge className="mb-4" variant="outline">
                Innovative IT Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Transform Your Business with Digital Excellence
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
                DevAstra Tech delivers cutting-edge web development, app development, UI/UX design, digital marketing, business automation, and data science & analytics solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/logo.png?height=600&width=600"
                alt="Digital Transformation"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ApX Engine Feature Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <Badge className="mb-4">Introducing</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                ApX Engine
              </h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                Our proprietary AI-powered assistant technology that helps businesses automate customer interactions,
                streamline support, and enhance user experiences across digital platforms.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Intelligent Responses</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Seamless Integration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Customizable Solutions</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/services">Learn More About ApX Engine</Link>
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
                <Image
                  src="/apx1.jpg?height=400&width=600"
                  alt="ApX Engine AI Assistant"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">ApX Engine in Action</h3>
                  <p className="text-white/80">Try our AI assistant by clicking the chat icon in the bottom right</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive IT Solutions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We offer a wide range of services to help businesses thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Custom websites and web applications built with the latest technologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>E-commerce solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>CMS integration</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services#web-development">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* App Development */}
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>App Development</CardTitle>
                <CardDescription>Native and cross-platform mobile applications for iOS and Android.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Native iOS & Android</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Cross-platform solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>App maintenance & updates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services#app-development">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* UI/UX Design */}
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>User-centered design that enhances user experience and engagement.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>User research</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Wireframing & prototyping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Visual design</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services#ui-ux-design">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Digital Marketing */}
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Digital Marketing</CardTitle>
                <CardDescription>Strategic marketing solutions to grow your online presence.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Social media marketing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Content strategy</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services#digital-marketing">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Business Automation */}
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <Laptop className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Business Automation</CardTitle>
                <CardDescription>Streamline operations with custom automation solutions.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Workflow automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>CRM integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Custom business tools</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/services#business-automation">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* View All Services */}
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50">
              <CardContent className="flex flex-col items-center justify-center h-full p-8">
                <h3 className="text-xl font-bold mb-4 text-center">Discover All Our Services</h3>
                <p className="text-center mb-6 text-gray-600 dark:text-gray-400">
                  Explore our complete range of IT solutions designed to help your business grow.
                </p>
                <Button asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/about#testimonials">View More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA - Get a Quote */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-8 text-white/90">
                Get a free quote for your project and discover how DevAstra Tech can help you achieve your business
                goals with our tailored IT solutions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-white" />
                  <span>No obligation consultation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-white" />
                  <span>Detailed project assessment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-white" />
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-white" />
                  <span>Flexible engagement models</span>
                </li>
              </ul>
            </div>
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Request a Free Quote</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <QuoteForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
