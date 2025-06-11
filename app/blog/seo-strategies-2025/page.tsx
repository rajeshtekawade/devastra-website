import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Badge className="mb-4">Digital Marketing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SEO Strategies That Will Dominate in 2025
            </h1>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                April 10, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                6 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                DevAstra Tech Team
              </div>
            </div>

            <Image
              src="/seo.jpg?height=400&width=800"
              alt="SEO Trends in 2025"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Search engine optimization (SEO) is more dynamic than ever. As search engine algorithms evolve, 
              staying ahead requires a proactive approach and updated strategies. In 2025, success in SEO means 
              embracing AI, focusing on user intent, and optimizing for mobile-first indexing.
            </p>

            <h2>1. Search Intent Optimization</h2>
            <p>
              Understanding and addressing user intent is key. Google prioritizes content that directly answers 
              search queries in a natural, helpful manner. Content needs to go beyond keywords and deliver true value.
            </p>

            <h2>2. Voice and Visual Search</h2>
            <p>
              With the rise of voice assistants and image search, optimizing for spoken queries and adding alt text, 
              schema markup, and structured data are more important than ever.
            </p>

            <h2>3. AI-Driven SEO Tools</h2>
            <p>
              AI tools can analyze trends, audit content, and provide optimization insights faster and smarter than 
              manual methods. These tools are vital for keeping pace with the evolving SEO landscape.
            </p>

            <h2>4. Core Web Vitals & UX</h2>
            <p>
              Google now ranks websites not just on relevance, but also on performance. Fast load times, mobile 
              responsiveness, and great user experience are non-negotiables.
            </p>

            <h2>Partner with DevAstra Tech</h2>
            <p>
              At DevAstra Tech, we combine technical expertise with marketing insights to craft SEO strategies that work. 
              From keyword research to site audits and content optimization, we help your business stay at the top of the search results.
            </p>

            <p>
              Ready to boost your website’s visibility in 2025? 
              <Link href="/contact" className="text-purple-600 hover:text-purple-700">
                Contact our SEO experts today
              </Link> and get started.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
