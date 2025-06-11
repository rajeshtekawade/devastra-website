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
            <Badge className="mb-4">Company News</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DevAstra Tech Announces Official Launch & Expansion in India
            </h1>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                March 28, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                4 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                DevAstra Tech Team
              </div>
            </div>

            <Image
              src="/global.jpg?height=400&width=800"
              alt="DevAstra Launch"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              We're excited to officially announce the launch of <strong>DevAstra Tech</strong> — a passionate IT startup born in India with a mission to empower businesses through cutting-edge digital solutions.
            </p>

            <h2>Our Head Office in Pune</h2>
            <p>
              Our journey begins in the tech-savvy city of <strong>Pune, Maharashtra</strong>, where our head office is now live. Pune’s vibrant ecosystem of startups and talent makes it the perfect launchpad for DevAstra Tech.
            </p>

            <h2>Expanding Across India</h2>
            <p>
              As we kickstart our operations, we’re also setting up <strong>sub-offices across major cities in India</strong> to ensure we stay close to our clients and provide timely support. Our goal is to make advanced technology more accessible to businesses of all sizes.
            </p>

            <h2>What We Offer</h2>
            <p>
              From web and mobile app development to business automation and AI-driven solutions, DevAstra Tech is here to help Indian businesses innovate and grow in the digital era.
            </p>

            <p>
              This is just the beginning. 
              <Link href="/contact" className="text-purple-600 hover:text-purple-700">
                Get in touch
              </Link> to learn more about how we can support your digital goals.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
