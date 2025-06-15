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
            <Badge className="mb-4">UI/UX Design</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              UX Design Trends That Enhance User Engagement
            </h1>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                April 5, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                7 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                DevAstra Tech Team
              </div>
            </div>

            <Image
              src="/uxTrends.jpg?height=400&width=800"
              alt="UX Design Trends"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              User experience (UX) has become a defining factor in the success of digital products. In 2025, the focus is 
              on creating engaging, intuitive, and personalized experiences that keep users coming back.
            </p>

            <h2>1. Microinteractions for Delight</h2>
            <p>
              Small animations and interactive elements are making interfaces more engaging and enjoyable. These subtle 
              design choices enhance feedback and build emotional connections.
            </p>

            <h2>2. AI-Personalized Interfaces</h2>
            <p>
              Leveraging user data, AI-driven personalization creates dynamic interfaces that adapt to individual 
              preferences, increasing usability and satisfaction.
            </p>

            <h2>3. Voice & Gesture Integration</h2>
            <p>
              UX is expanding beyond the screen. Voice commands and gesture-based interactions are becoming more common 
              in mobile and wearable apps, offering hands-free convenience.
            </p>

            <h2>4. Accessibility as a Standard</h2>
            <p>
              Inclusive design is no longer optional. Prioritizing accessibility ensures your digital product reaches 
              everyone, regardless of ability.
            </p>

            <h2>Let DevAstra Elevate Your UX</h2>
            <p>
              At DevAstra Tech, we craft UX strategies that put your users first. Our team blends creative design with 
              user research to deliver intuitive and impactful experiences across all devices.
            </p>

            <p>
              Want to boost user engagement through better UX? 
              <Link href="/contact" className="text-purple-600 hover:text-purple-700">
                Get in touch with our design experts
              </Link> today.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
