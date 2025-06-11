import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import JobApplicationForm from "@/components/job-application-form"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Careers</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Be part of a team that's passionate about innovation and committed to excellence.
            </p>
            <Button size="lg" asChild>
              <Link href="#open-positions">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Why Join Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Work with Purpose</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                At DevAstra Tech, we believe in creating an environment where talented individuals can thrive, innovate,
                and make a real impact. We're not just building software; we're transforming businesses and improving
                lives through technology.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Innovative Work</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Work on cutting-edge projects using the latest technologies and methodologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Growth Opportunities</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Continuous learning and career advancement through mentorship and professional development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Work-Life Balance</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Flexible work arrangements and policies that support your well-being and personal life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Collaborative Culture</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      A supportive team environment where ideas are valued and collaboration is encouraged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last mb-8 lg:mb-0">
              <Image
                src="/career.jpg?height=600&width=600"
                alt="Team Collaboration"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We believe in taking care of our team members with competitive benefits and perks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle>Competitive Compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Salary packages that recognize your skills and experience, with regular reviews and performance-based
                  bonuses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Comprehensive health insurance, wellness programs, and mental health support to keep you at your best.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <CardTitle>Learning & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Access to training resources, conference attendance, and education reimbursement to support your
                  professional growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-orange-600 dark:text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <CardTitle>Flexible Time Off</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Generous paid time off, holidays, and flexible work arrangements to help you recharge and maintain
                  work-life balance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-pink-600 dark:text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle>Team Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular team-building activities, social events, and celebrations to foster a strong sense of
                  community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Remote Work Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Hybrid and remote work options with the tools and support you need to be productive from anywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Open Positions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Opportunities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We're always looking for talented individuals to join our team. Check out our current openings below.
            </p>
          </div>

          <div className="space-y-6">
            {/* Job 1 */}
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">Web Development Intern</CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Remote • Part-time • 3-6 months</p>
                  </div>
                  <Badge className="w-fit">Internship</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">About the Role</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We're looking for passionate web development interns to join our team. This is an excellent
                      opportunity to gain hands-on experience working on real-world projects while being mentored by
                      experienced developers.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Currently pursuing a degree in Computer Science, Web Development, or a related field</li>
                      <li>Basic knowledge of HTML, CSS, and JavaScript</li>
                      <li>Familiarity with React or other modern JavaScript frameworks is a plus</li>
                      <li>Eager to learn and grow in a fast-paced environment</li>
                      <li>Good communication skills and ability to work in a team</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What You'll Learn</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Modern web development practices and tools</li>
                      <li>Front-end and back-end development skills</li>
                      <li>Collaborative development using Git and other version control systems</li>
                      <li>Agile development methodologies</li>
                      <li>Problem-solving and debugging techniques</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button size="lg" asChild>
                      <Link href="#apply-now">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job 2 */}
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">UI/UX Design Intern</CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Remote • Part-time • 3-6 months</p>
                  </div>
                  <Badge className="w-fit">Internship</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">About the Role</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Join our design team as a UI/UX Design Intern and help create beautiful, user-friendly interfaces
                      for our clients. You'll work closely with our design and development teams to bring concepts to
                      life.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Currently pursuing a degree in Design, Human-Computer Interaction, or a related field</li>
                      <li>Basic understanding of UI/UX principles</li>
                      <li>Familiarity with design tools like Figma, Adobe XD, or Sketch</li>
                      <li>Creative mindset and attention to detail</li>
                      <li>Ability to receive and implement feedback</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What You'll Learn</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>User research and testing methodologies</li>
                      <li>Wireframing and prototyping techniques</li>
                      <li>Design systems and component libraries</li>
                      <li>Collaboration between design and development teams</li>
                      <li>Accessibility and inclusive design principles</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button size="lg" asChild>
                      <Link href="#apply-now">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job 3 */}
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">Digital Marketing Intern</CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Remote • Part-time • 3-6 months</p>
                  </div>
                  <Badge className="w-fit">Internship</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">About the Role</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We're seeking a Digital Marketing Intern to assist our marketing team in creating and implementing
                      digital marketing strategies. This role offers hands-on experience in various aspects of digital
                      marketing.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Currently pursuing a degree in Marketing, Communications, or a related field</li>
                      <li>Basic understanding of digital marketing concepts</li>
                      <li>Familiarity with social media platforms and content creation</li>
                      <li>Strong written and verbal communication skills</li>
                      <li>Creative thinking and problem-solving abilities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What You'll Learn</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>SEO and SEM strategies</li>
                      <li>Content marketing and social media management</li>
                      <li>Email marketing campaigns</li>
                      <li>Analytics and performance tracking</li>
                      <li>Brand development and messaging</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button size="lg" asChild>
                      <Link href="#apply-now">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-now" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Apply Now</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey With Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Fill out the application form below to apply for one of our internship positions. We'll review your
              application and get back to you soon.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200 dark:border-gray-800">
              <CardContent className="pt-6">
                <JobApplicationForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Finding the Right Position?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
            mind for future opportunities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
