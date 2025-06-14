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
            <Badge className="mb-4">App Development</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Native vs. Cross-Platform: Which is Right for Your App?
            </h1>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                April 15, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                8 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                DevAstra Tech Team
              </div>
            </div>

            <Image
              src="/respDesign.jpg?height=400&width=800"
              alt="Native vs. Cross-Platform App Development"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Choosing between native and cross-platform app development is one of the most important decisions 
              for your mobile project. It can affect everything from your development timeline to your app’s 
              performance, scalability, and user experience.
            </p>

            <h2>What is Native App Development?</h2>
            <p>
              Native development means building apps specifically for a particular platform like iOS or Android 
              using platform-specific languages like Swift, Objective-C, or Kotlin. These apps typically offer 
              better performance and deeper integration with the device’s hardware.
            </p>

            <h2>What is Cross-Platform Development?</h2>
            <p>
              Cross-platform frameworks like React Native, Flutter, or Xamarin allow developers to write code once 
              and deploy it across multiple platforms. This approach can save time and cost while maintaining a 
              relatively consistent experience.
            </p>

            <h3>Pros and Cons: A Quick Comparison</h3>
            <ul>
              <li><strong>Native:</strong> Superior performance, better UI/UX, but more expensive and time-consuming.</li>
              <li><strong>Cross-Platform:</strong> Faster development, lower cost, but may lack some native features or speed.</li>
            </ul>

            <h2>When to Choose Native</h2>
            <p>
              Go native when performance, security, or advanced features are a priority. It’s ideal for apps 
              that require heavy animation, hardware interaction, or platform-specific functionality.
            </p>

            <h2>When to Choose Cross-Platform</h2>
            <p>
              If you're targeting both iOS and Android with limited budget and need a quicker go-to-market, 
              cross-platform is a smart choice. Modern frameworks offer great performance with native-like experiences.
            </p>

            <h2>DevAstra Tech’s Expertise</h2>
            <p>
              At DevAstra Tech, we help businesses evaluate the right tech stack based on their goals. Whether you need 
              a high-performance native app or a flexible cross-platform solution, we build apps that are fast, scalable, 
              and user-centric.
            </p>

            <p>
              Need help deciding what’s best for your app idea? 
              <Link href="/contact" className="text-purple-600 hover:text-purple-700">
                Contact our experts today
              </Link> and let’s bring your vision to life.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
