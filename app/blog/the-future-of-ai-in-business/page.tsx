import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
            <Badge className="mb-4">Technology</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Future of AI in Business: Trends to Watch in 2025
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                April 25, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                10 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                DevAstra Tech Team
              </div>
            </div>
            
            <Image
              src="/futureai.jpg?height=400&width=800"
              alt="AI in Business"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Artificial Intelligence is transforming how businesses operate across every industry. 
              From customer service to data analysis, AI is creating new opportunities for innovation 
              and efficiency that were unimaginable just a few years ago.
            </p>
            
            <h2>Key AI Trends for 2025</h2>
            
            <h3>1. Conversational AI and Chatbots</h3>
            <p>
              Advanced chatbots like our ApX Engine are becoming more sophisticated, 
              providing human-like interactions that can handle complex customer queries 
              and provide personalized assistance 24/7.
            </p>
            
            <h3>2. Predictive Analytics</h3>
            <p>
              Businesses are leveraging AI to predict customer behavior, market trends, 
              and operational needs with unprecedented accuracy.
            </p>
            
            <h3>3. Automation and Process Optimization</h3>
            <p>
              AI-powered automation is streamlining workflows and reducing manual tasks, 
              allowing employees to focus on more strategic activities.
            </p>
            
            <h2>How DevAstra Tech Can Help</h2>
            <p>
              At DevAstra Tech, we're at the forefront of AI implementation for businesses. 
              Our ApX Engine technology demonstrates how AI can be seamlessly integrated 
              into your existing systems to enhance customer experience and operational efficiency.
            </p>
            
            <p>
              Ready to explore how AI can transform your business? 
              <Link href="/contact" className="text-purple-600 hover:text-purple-700">
                Contact us today
              </Link> to learn more about our AI solutions.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
