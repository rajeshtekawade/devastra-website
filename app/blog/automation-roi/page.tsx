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
            <Badge className="mb-4">Business Automation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Measuring the ROI of Business Automation
            </h1>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                April 1, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                9 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                DevAstra Tech Team
              </div>
            </div>

            <Image
              src="/roi.jpg?height=400&width=800"
              alt="Business Automation ROI"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Business automation promises increased efficiency and reduced costs, but understanding its true value 
              requires measuring the return on investment (ROI) accurately. In 2025, businesses are focusing more on 
              data-driven evaluations to validate automation strategies.
            </p>

            <h2>Why ROI Matters</h2>
            <p>
              ROI helps quantify the success of your automation initiatives by comparing the benefits achieved against 
              the resources invested. It enables better decision-making and optimization of ongoing processes.
            </p>

            <h2>Key Metrics to Track</h2>
            <ul>
              <li>Time savings across departments</li>
              <li>Cost reductions in operations</li>
              <li>Employee productivity improvements</li>
              <li>Reduction in manual errors</li>
              <li>Customer satisfaction and retention</li>
            </ul>

            <h2>Approach to ROI Measurement</h2>
            <p>
              Begin by setting clear objectives and benchmarks. Use automation tools with built-in analytics, and 
              evaluate both short-term gains and long-term impact. Collaboration between departments is essential 
              for accurate assessment.
            </p>

            <h2>DevAstra's Automation Solutions</h2>
            <p>
              At DevAstra Tech, we help businesses implement automation that delivers measurable results. Our team 
              ensures every solution is designed with ROI in mind—from deployment to optimization.
            </p>

            <p>
              Want to see how automation can work for your business? 
              <Link href="/contact" className="text-purple-600 hover:text-purple-700">
                Let’s talk about your ROI goals
              </Link> and how we can help you achieve them.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
