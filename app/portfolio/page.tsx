import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Showcasing Our Best Work</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full max-w-3xl">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="app">App</TabsTrigger>
                <TabsTrigger value="ui-ux">UI/UX</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
              </TabsList>
            </div>

            {/* All Projects */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="E-commerce Website"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>PASTECH Lifts</CardTitle>
                        <CardDescription>Elevator Company</CardDescription>
                      </div>
                      <Badge>Web</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                     We built PASTECH Lifts’ first-ever online presence — a modern, responsive website that highlights their elevator solutions and strengthens their digital credibility.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/luxemarket">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 2 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Fitness App"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>FitTrack</CardTitle>
                        <CardDescription>Fitness Tracking App</CardDescription>
                      </div>
                      <Badge>App</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A mobile app for tracking workouts, nutrition, and fitness goals with social sharing features.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/fittrack">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 3 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Banking Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>FinVision</CardTitle>
                        <CardDescription>Banking Dashboard</CardDescription>
                      </div>
                      <Badge>UI/UX</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A comprehensive banking dashboard with intuitive data visualization and user-friendly interface.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/finvision">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 4 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Digital Marketing Campaign"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>GreenEarth</CardTitle>
                        <CardDescription>Marketing Campaign</CardDescription>
                      </div>
                      <Badge>Marketing</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A multi-channel digital marketing campaign that increased brand awareness by 200% in 3 months.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/greenearth">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 5 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Business Automation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>LogiFlow</CardTitle>
                        <CardDescription>Logistics Automation</CardDescription>
                      </div>
                      <Badge>Automation</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      An automated logistics management system that reduced processing time by 60% and errors by 80%.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/logiflow">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 6 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Real Estate Website"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>HomeHaven</CardTitle>
                        <CardDescription>Real Estate Platform</CardDescription>
                      </div>
                      <Badge>Web</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A real estate platform with advanced search, virtual tours, and agent-client communication tools.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/homehaven">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Web Projects */}
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="E-commerce Website"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>LuxeMarket</CardTitle>
                        <CardDescription>E-commerce Platform</CardDescription>
                      </div>
                      <Badge>Web</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A full-featured e-commerce platform with inventory management, payment processing, and customer
                      portal.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/luxemarket">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 6 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Real Estate Website"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>HomeHaven</CardTitle>
                        <CardDescription>Real Estate Platform</CardDescription>
                      </div>
                      <Badge>Web</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A real estate platform with advanced search, virtual tours, and agent-client communication tools.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/homehaven">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* App Projects */}
            <TabsContent value="app">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 2 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Fitness App"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>FitTrack</CardTitle>
                        <CardDescription>Fitness Tracking App</CardDescription>
                      </div>
                      <Badge>App</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A mobile app for tracking workouts, nutrition, and fitness goals with social sharing features.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/fittrack">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* UI/UX Projects */}
            <TabsContent value="ui-ux">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 3 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Banking Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>FinVision</CardTitle>
                        <CardDescription>Banking Dashboard</CardDescription>
                      </div>
                      <Badge>UI/UX</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A comprehensive banking dashboard with intuitive data visualization and user-friendly interface.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/finvision">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Marketing Projects */}
            <TabsContent value="marketing">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 4 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Digital Marketing Campaign"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>GreenEarth</CardTitle>
                        <CardDescription>Marketing Campaign</CardDescription>
                      </div>
                      <Badge>Marketing</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A multi-channel digital marketing campaign that increased brand awareness by 200% in 3 months.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/greenearth">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Automation Projects */}
            <TabsContent value="automation">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 5 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Business Automation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>LogiFlow</CardTitle>
                        <CardDescription>Logistics Automation</CardDescription>
                      </div>
                      <Badge>Automation</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      An automated logistics management system that reduced processing time by 60% and errors by 80%.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/portfolio/logiflow">
                        View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Clients</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We've had the privilege of working with a diverse range of clients across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex justify-center">
                <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center justify-center p-4">
                  <Image
                    src={`/placeholder.svg?height=80&width=80`}
                    alt={`Client Logo ${i + 1}`}
                    width={80}
                    height={80}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our tailored IT solutions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
