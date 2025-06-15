import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Our Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Updates</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Stay up-to-date with the latest industry trends, technology updates, and company news.
            </p>
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input type="text" placeholder="Search articles..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
          <Card className="border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative h-64 lg:h-auto">
                <Image src="/futureai.jpg?height=400&width=600" alt="Featured Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <Badge className="mb-2">Technology</Badge>
                <CardTitle className="text-2xl md:text-3xl mb-4">
                  <Link
                    href="/blog/the-future-of-ai-in-business"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    The Future of AI in Business: Trends to Watch in 2025
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm mb-2">April 25, 2025 • 10 min read</CardDescription>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Artificial Intelligence is transforming how businesses operate. From customer service to data
                  analysis, AI is creating new opportunities for innovation and efficiency. In this article, we explore
                  the key AI trends that will shape business in 2025.
                </p>
                <Button asChild>
                  <Link href="/blog/the-future-of-ai-in-business">Read More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <Card className="border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image src="/respDesign.jpg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge>Web Development</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">April 20, 2025</span>
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href="/blog/responsive-design-best-practices"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Responsive Design Best Practices for 2025
                  </Link>
                </CardTitle>
                <CardDescription>5 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  As mobile usage continues to grow, responsive design remains crucial for providing a seamless user
                  experience across all devices.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link
                    href="/blog/responsive-design-best-practices"
                    className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Read More →
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Post 2 */}
            <Card className="border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image src="/native.jpg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge>App Development</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">April 15, 2025</span>
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href="/blog/native-vs-cross-platform"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Native vs. Cross-Platform: Which is Right for Your App?
                  </Link>
                </CardTitle>
                <CardDescription>8 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Choosing between native and cross-platform development is a critical decision that can impact your
                  app's performance and user experience.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link
                    href="/blog/native-vs-cross-platform"
                    className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Read More →
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Post 3 */}
            <Card className="border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image src="/seo.jpg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge>Digital Marketing</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">April 10, 2025</span>
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href="/blog/seo-strategies-2025"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    SEO Strategies That Will Dominate in 2025
                  </Link>
                </CardTitle>
                <CardDescription>6 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Search engine algorithms are constantly evolving. Stay ahead of the curve with these SEO strategies
                  that will help your website rank higher.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link
                    href="/blog/seo-strategies-2025"
                    className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Read More →
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Post 4 */}
            <Card className="border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image src="/uxTrends.jpg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge>UI/UX Design</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">April 5, 2025</span>
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href="/blog/ux-design-trends"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    UX Design Trends That Enhance User Engagement
                  </Link>
                </CardTitle>
                <CardDescription>7 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  User experience is at the heart of successful digital products. Discover the latest UX design trends
                  that are driving user engagement.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link
                    href="/blog/ux-design-trends"
                    className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Read More →
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Post 5 */}
            <Card className="border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image src="/roi.jpg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge>Business Automation</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">April 1, 2025</span>
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href="/blog/automation-roi"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Measuring the ROI of Business Automation
                  </Link>
                </CardTitle>
                <CardDescription>9 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Business automation can deliver significant returns, but measuring its impact requires the right
                  metrics and approach.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link
                    href="/blog/automation-roi"
                    className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Read More →
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Post 6 */}
            <Card className="border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image src="/global.jpg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge>Company News</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">March 28, 2025</span>
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href="/blog/devnastra-expansion"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    DevAstra Tech Announces Global Expansion
                  </Link>
                </CardTitle>
                <CardDescription>4 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  We're excited to announce our expansion into new markets, bringing our IT solutions to businesses
                  around the world.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link
                    href="/blog/devnastra-expansion"
                    className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Read More →
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>


      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay updated with the latest industry insights, technology trends, and company news.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900 border-0" />
            <Button variant="secondary">Subscribe</Button>
          </div>
          <p className="text-sm mt-4 text-white/80">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  )
}
