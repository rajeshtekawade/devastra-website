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
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="app">App</TabsTrigger>
                <TabsTrigger value="ui-ux">UI/UX</TabsTrigger>
              </TabsList>
            </div>

            {/* All Projects */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/pastechlifts.jpg?height=240&width=400"
                      alt="PASTECH Lifts"
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
                       A modern, responsive website that highlights elevator solutions and strengthens their digital credibility.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://pastechlifts.netlify.app/">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 2 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/airbnb.jpg?height=240&width=400"
                      alt="Airbnb Clone"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Staynest</CardTitle>
                        <CardDescription>Airbnb Clone App</CardDescription>
                      </div>
                      <Badge>Web</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A full-stack Airbnb Clone built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://devastra-air-bnb-clone.netlify.app/">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 3 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/expensetracker.jpg?height=240&width=400"
                      alt="Expense Tracker"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Expensio</CardTitle>
                        <CardDescription>Expense Tracker App</CardDescription>
                      </div>
                      <Badge>UI/UX</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A full-stack Expense Tracker application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://devastra-expense-tracker.netlify.app/">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 4 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/userapp.jpg?height=240&width=400"
                      alt="IOIT College App"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>StudySphere</CardTitle>
                        <CardDescription>College User Application</CardDescription>
                      </div>
                      <Badge>App</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      College User App ensures every student and staff member stays organized, informed, and engaged throughout their academic journey.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://github.com/Om-Salunkhe/IOIT-College-App.git">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 5 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/adminapp.jpg?height=240&width=400"
                      alt="College Admin App"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>AdminDesk</CardTitle>
                        <CardDescription>College Admin Application</CardDescription>
                      </div>
                      <Badge>App</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      College Admin App, managing college communication becomes faster, easier, and more organized—all from your Android device.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://github.com/Om-Salunkhe/IOIT-Admin-App.git">
                        View Project<ExternalLink className="ml-2 h-4 w-4" />
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
                      src="/pastechlifts.jpg?height=240&width=400"
                      alt="PASTECH Lifts"
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
                       A modern, responsive website that highlights elevator solutions and strengthens their digital credibility.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://pastechlifts.netlify.app/">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 2 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/airbnb.jpg?height=240&width=400"
                      alt="Airbnb Clone"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Staynest</CardTitle>
                        <CardDescription>Airbnb Clone App</CardDescription>
                      </div>
                      <Badge>Web</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A full-stack Airbnb Clone built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://devastra-air-bnb-clone.netlify.app/">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* App Projects */}
            <TabsContent value="app">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 4 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/userapp.jpg?height=240&width=400"
                      alt="IOIT College App"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>StudySphere</CardTitle>
                        <CardDescription>College User Application</CardDescription>
                      </div>
                      <Badge>App</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      College User App ensures every student and staff member stays organized, informed, and engaged throughout their academic journey.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://github.com/Om-Salunkhe/IOIT-College-App.git">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 5 */}
                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src="/adminapp.jpg?height=240&width=400"
                      alt="College Admin App"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>AdminDesk</CardTitle>
                        <CardDescription>College Admin Application</CardDescription>
                      </div>
                      <Badge>App</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      College Admin App, managing college communication becomes faster, easier, and more organized—all from your Android device.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://github.com/Om-Salunkhe/IOIT-Admin-App.git">
                        View Project<ExternalLink className="ml-2 h-4 w-4" />
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
                      src="/expensetracker.jpg?height=240&width=400"
                      alt="Expense Tracker"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Expensio</CardTitle>
                        <CardDescription>Expense Tracker App</CardDescription>
                      </div>
                      <Badge>UI/UX</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      A full-stack Expense Tracker application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://devastra-expense-tracker.netlify.app/">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
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
