import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive IT Solutions for Your Business</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              From web development to business automation, we provide end-to-end IT services to help your business
              thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* ApX Engine Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                ApX Engine
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Proprietary AI Technology</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                ApX Engine is our cutting-edge AI assistant technology that helps businesses automate customer
                interactions, provide 24/7 support, and deliver personalized experiences at scale.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Intelligent Customer Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Provide instant responses to common customer queries and route complex issues to human agents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Personalized User Experiences</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Deliver tailored content and recommendations based on user behavior and preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Seamless Integration</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Easily integrate with your existing systems, websites, and applications with minimal setup.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Analytics & Insights</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Gain valuable insights from customer interactions to improve your products and services.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
            <div className="order-first lg:order-last mb-8 lg:mb-0">
              <Image
                src="/apx1.jpg?height=600&width=600"
                alt="ApX Engine AI Technology"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section id="web-development" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Web Development
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Web Solutions That Drive Results</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                We create responsive, user-friendly websites and web applications tailored to your business needs. Our
                web development services focus on performance, security, and scalability.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Responsive Web Design</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Websites that look and function perfectly on all devices, from desktops to smartphones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">E-commerce Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Custom online stores with secure payment gateways, inventory management, and customer portals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Content Management Systems</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Easy-to-use CMS solutions that allow you to update your website content without technical
                      knowledge.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Web Application Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Custom web applications that automate processes and improve efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="order-first lg:order-last mb-8 lg:mb-0">
              <Image
                src="/webdev.jpg?height=600&width=600"
                alt="Web Development"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Development */}
      <section id="app-development" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mb-8 lg:mb-0">
              <Image
                src="/appdev.jpg?height=600&width=600"
                alt="App Development"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <Badge className="mb-4" variant="outline">
                App Development
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile Applications That Engage Users</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                We develop native and cross-platform mobile applications that provide seamless user experiences across
                iOS and Android devices.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Native iOS & Android Apps</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Platform-specific applications that leverage the full capabilities of iOS and Android devices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Cross-Platform Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cost-effective solutions that work across multiple platforms with a single codebase.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">App Maintenance & Updates</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ongoing support to ensure your app stays current with the latest OS updates and security
                      standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">App Store Optimization</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Strategies to improve your app's visibility and downloads in app stores.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design */}
      <section id="ui-ux-design" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                UI/UX Design
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">User-Centered Design That Converts</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                Our UI/UX design services focus on creating intuitive, engaging user experiences that drive conversions
                and customer satisfaction.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">User Research & Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Understanding your users' needs, behaviors, and pain points to inform design decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Wireframing & Prototyping</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Creating interactive mockups to test and refine user flows before development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Visual Design</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Creating visually appealing interfaces that align with your brand identity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Usability Testing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Evaluating designs with real users to identify and address usability issues.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="order-first lg:order-last mb-8 lg:mb-0">
              <Image
                src="/uiux.jpg?height=600&width=600"
                alt="UI/UX Design"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section id="digital-marketing" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mb-8 lg:mb-0">
              <Image
                src="/buss.jpg?height=600&width=600"
                alt="Digital Marketing"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <Badge className="mb-4" variant="outline">
                Digital Marketing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Marketing for Digital Growth</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                Our digital marketing services help you reach your target audience, increase brand awareness, and drive
                conversions through data-driven strategies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Search Engine Optimization (SEO)</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Improving your website's visibility in search engine results to drive organic traffic.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Social Media Marketing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Building and engaging your audience on social media platforms to increase brand awareness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Content Marketing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Creating valuable content that attracts and retains your target audience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Pay-Per-Click (PPC) Advertising</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Targeted advertising campaigns that drive immediate traffic and conversions.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Automation */}
      <section id="business-automation" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Business Automation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamline Operations with Automation</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                Our business automation solutions help you streamline operations, reduce manual tasks, and improve
                efficiency across your organization.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Workflow Automation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Automating repetitive tasks and processes to save time and reduce errors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">CRM Integration</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Connecting your customer relationship management system with other business tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Custom Business Tools</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Developing tailored software solutions to address your specific business needs and challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Data Integration & Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Connecting disparate systems and providing insights through data visualization and reporting.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="order-first lg:order-last mb-8 lg:mb-0">
              <Image
                src="/auto.jpg?height=600&width=600"
                alt="Business Automation"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our structured approach ensures that we deliver high-quality solutions that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">1</span>
                </div>
                <CardTitle>Discovery</CardTitle>
                <CardDescription>Understanding your business, goals, and requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  We start by learning about your business, target audience, and project requirements. This helps us
                  develop a clear understanding of your goals and challenges.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <CardTitle>Planning</CardTitle>
                <CardDescription>Creating a roadmap for your project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Based on our discovery findings, we develop a detailed project plan that outlines the scope, timeline,
                  deliverables, and resources required for your project.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-green-600 dark:text-green-400">3</span>
                </div>
                <CardTitle>Execution</CardTitle>
                <CardDescription>Bringing your project to life</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Our team of experts works diligently to develop your solution, following best practices and industry
                  standards. We keep you updated throughout the process.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-orange-600 dark:text-orange-400">4</span>
                </div>
                <CardTitle>Delivery & Support</CardTitle>
                <CardDescription>Launching and maintaining your solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  After thorough testing and your approval, we launch your solution. We provide ongoing support and
                  maintenance to ensure your solution continues to perform optimally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project and discover how DevAstra Tech can help you achieve your business
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
