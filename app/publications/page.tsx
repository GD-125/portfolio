import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PublicationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-primary/5 via-background to-primary/5">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Research & Publications
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  My contributions to the cybersecurity community through research papers, articles, and presentations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Publications */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Featured Research</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Key Publications</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Highlighted research papers and articles that have contributed to the cybersecurity field.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Publication 1 */}
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-gradient-to-br from-background to-primary/5 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Web Application Security Research"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/50 cyber-scan-line"></div>
                </div>
                <CardHeader className="relative">
                  <CardTitle>Advanced Techniques in Web Application Penetration Testing</CardTitle>
                  <CardDescription>Published in Security Journal, 2023</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground">
                    This research paper explores innovative approaches to identifying and exploiting vulnerabilities in
                    modern web applications, with a focus on single-page applications and API security.
                  </p>
                </CardContent>
                <CardFooter className="relative flex justify-end">
                  <Button variant="outline" size="sm" className="group cyber-outline-button" asChild>
                    <Link href="#">
                      Read Paper
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Publication 2 */}
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-gradient-to-br from-background to-primary/5 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Ransomware Research"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/50 cyber-scan-line"></div>
                </div>
                <CardHeader className="relative">
                  <CardTitle>The Evolution of Ransomware: Trends and Mitigation Strategies</CardTitle>
                  <CardDescription>Cybersecurity Conference, 2022</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground">
                    A comprehensive analysis of ransomware evolution over the past decade, examining attack vectors,
                    encryption techniques, and effective organizational defense strategies.
                  </p>
                </CardContent>
                <CardFooter className="relative flex justify-end">
                  <Button variant="outline" size="sm" className="group cyber-outline-button" asChild>
                    <Link href="#">
                      View Presentation
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* All Publications */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Complete Collection</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">All Publications</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  A comprehensive list of my research papers, articles, and presentations.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Publication 3 */}
              <Card className="overflow-hidden transition-all hover:shadow-lg cyber-card">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform rotate-45 translate-x-10 -translate-y-10 cyber-corner"></div>
                <CardHeader>
                  <CardTitle>Securing the Internet of Things: Challenges and Solutions</CardTitle>
                  <CardDescription>Tech Security Magazine, 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This article addresses the unique security challenges posed by IoT devices and proposes a framework
                    for implementing robust security measures in IoT ecosystems.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="#">
                      Read Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Publication 4 */}
              <Card className="overflow-hidden transition-all hover:shadow-lg cyber-card">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform rotate-45 translate-x-10 -translate-y-10 cyber-corner"></div>
                <CardHeader>
                  <CardTitle>Zero Trust Architecture: Implementation Guide for Modern Enterprises</CardTitle>
                  <CardDescription>Enterprise Security Today, 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A practical guide to implementing Zero Trust security models in enterprise environments, including
                    step-by-step approaches and case studies of successful deployments.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="#">
                      Read Guide
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Publication 5 */}
              <Card className="overflow-hidden transition-all hover:shadow-lg cyber-card">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform rotate-45 translate-x-10 -translate-y-10 cyber-corner"></div>
                <CardHeader>
                  <CardTitle>Machine Learning in Cybersecurity: Applications and Limitations</CardTitle>
                  <CardDescription>AI Security Journal, 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    An exploration of how machine learning is being applied to cybersecurity challenges, with a critical
                    analysis of its effectiveness and potential limitations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="#">
                      Read Paper
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Publication 6 */}
              <Card className="overflow-hidden transition-all hover:shadow-lg cyber-card">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform rotate-45 translate-x-10 -translate-y-10 cyber-corner"></div>
                <CardHeader>
                  <CardTitle>Supply Chain Security: Protecting the Software Development Lifecycle</CardTitle>
                  <CardDescription>DevSecOps Conference, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive analysis of supply chain security risks in software development and strategies for
                    securing the entire development lifecycle.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="#">
                      View Presentation
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Publication 7 */}
              <Card className="overflow-hidden transition-all hover:shadow-lg cyber-card">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform rotate-45 translate-x-10 -translate-y-10 cyber-corner"></div>
                <CardHeader>
                  <CardTitle>Cloud Security Governance: A Framework for Multi-Cloud Environments</CardTitle>
                  <CardDescription>Cloud Security Alliance Journal, 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This paper presents a governance framework for managing security across multiple cloud providers,
                    addressing the unique challenges of hybrid and multi-cloud architectures.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="#">
                      Read Paper
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Speaking Engagements */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Speaking Engagements</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Conference Presentations</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Recent and upcoming speaking engagements at cybersecurity conferences and events.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Event 1 */}
              <div className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:bg-muted/50 cyber-card">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/50"></div>
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary font-bold cyber-glow">
                    2023
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold">Black Hat USA</h3>
                    <p className="text-sm text-muted-foreground">Las Vegas, NV - August 2023</p>
                    <p className="mt-2">
                      "Advanced Exploitation Techniques for Modern Web Frameworks: Beyond the OWASP Top 10"
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-4 md:mt-0">
                    <Button variant="outline" size="sm" className="group cyber-outline-button" asChild>
                      <Link href="#">
                        View Slides
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:bg-muted/50 cyber-card">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/50"></div>
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary font-bold cyber-glow">
                    2022
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold">DEF CON 30</h3>
                    <p className="text-sm text-muted-foreground">Las Vegas, NV - August 2022</p>
                    <p className="mt-2">
                      "Breaking Blockchain Security: Vulnerabilities in Smart Contract Implementations"
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-4 md:mt-0">
                    <Button variant="outline" size="sm" className="group cyber-outline-button" asChild>
                      <Link href="#">
                        View Slides
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:bg-muted/50 cyber-card">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/50"></div>
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary font-bold cyber-glow">
                    2022
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold">RSA Conference</h3>
                    <p className="text-sm text-muted-foreground">San Francisco, CA - June 2022</p>
                    <p className="mt-2">"Zero Trust Implementation: Lessons Learned from Enterprise Deployments"</p>
                  </div>
                  <div className="flex-shrink-0 mt-4 md:mt-0">
                    <Button variant="outline" size="sm" className="group cyber-outline-button" asChild>
                      <Link href="#">
                        View Slides
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Interested in My Research?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact me to discuss collaboration opportunities or speaking engagements.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="cyber-button" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="cyber-outline-button" asChild>
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

