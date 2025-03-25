import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-primary/5 via-background to-primary/5">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Security Projects</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A showcase of my cybersecurity projects, tools, and security assessments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Featured Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Highlighted Security Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  A selection of my most impactful cybersecurity projects and contributions.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-gradient-to-br from-background to-primary/5 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Vulnerability Scanner"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardHeader className="relative">
                  <CardTitle>Advanced Vulnerability Scanner</CardTitle>
                  <CardDescription>Automated security assessment tool</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground">
                    Developed a custom vulnerability scanner that automates the detection of common security flaws in
                    web applications and network infrastructure with advanced reporting capabilities.
                  </p>
                </CardContent>
                <CardFooter className="relative flex justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-primary/10">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Security
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View project</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-gradient-to-br from-background to-primary/5 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Security Dashboard"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardHeader className="relative">
                  <CardTitle>Real-time Security Dashboard</CardTitle>
                  <CardDescription>Comprehensive monitoring solution</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground">
                    Created a comprehensive security dashboard that provides real-time visibility into security events
                    and potential threats across an organization with alert capabilities.
                  </p>
                </CardContent>
                <CardFooter className="relative flex justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-primary/10">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Node.js
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View project</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300 bg-gradient-to-br from-background to-primary/5 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Phishing Simulator"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardHeader className="relative">
                  <CardTitle>Advanced Phishing Simulator</CardTitle>
                  <CardDescription>Security awareness training tool</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground">
                    Built a sophisticated phishing simulation platform to help organizations train employees to
                    recognize and avoid social engineering attacks with detailed analytics.
                  </p>
                </CardContent>
                <CardFooter className="relative flex justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-primary/10">
                      PHP
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      JavaScript
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View project</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Project Portfolio</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Complete Project Collection</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Browse through my complete portfolio of cybersecurity projects.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 4 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg cyber-card">
                <CardHeader>
                  <CardTitle>Network Intrusion Detection</CardTitle>
                  <CardDescription>Advanced threat detection system</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Implemented a custom network intrusion detection system that uses machine learning to identify
                    unusual patterns and potential security breaches.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-primary/10">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      ML
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View project</span>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 5 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg cyber-card">
                <CardHeader>
                  <CardTitle>Secure Code Analyzer</CardTitle>
                  <CardDescription>Static code analysis tool</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Developed a tool that automatically scans codebases for security vulnerabilities and provides
                    remediation guidance for developers.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-primary/10">
                      Java
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      SAST
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View project</span>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 6 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg cyber-card">
                <CardHeader>
                  <CardTitle>IoT Security Framework</CardTitle>
                  <CardDescription>Security for connected devices</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Created a comprehensive security framework for IoT devices, addressing common vulnerabilities and
                    providing secure communication protocols.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-primary/10">
                      C++
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      IoT
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View project</span>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 7 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg cyber-card">
                <CardHeader>
                  <CardTitle>Cloud Security Posture Manager</CardTitle>
                  <CardDescription>Cloud infrastructure security</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Built a tool to continuously monitor and improve cloud security posture across AWS, Azure, and GCP
                    environments with automated remediation capabilities.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-primary/10">
                      Go
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Cloud
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View project</span>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 8 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg cyber-card">
                <CardHeader>
                  <CardTitle>Mobile App Security Scanner</CardTitle>
                  <CardDescription>Android & iOS security testing</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Developed an automated tool for scanning mobile applications for security vulnerabilities, including
                    insecure data storage, weak cryptography, and API vulnerabilities.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-primary/10">
                      Kotlin
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Swift
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View project</span>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 9 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg cyber-card">
                <CardHeader>
                  <CardTitle>Blockchain Security Auditor</CardTitle>
                  <CardDescription>Smart contract security</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Created a specialized tool for auditing smart contracts and blockchain applications for security
                    vulnerabilities and potential exploits.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-primary/10">
                      Solidity
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10">
                      Web3
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View project</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Interested in Collaborating?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how we can work together on your next security project.
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
                  <Link href="/certifications">View My Certifications</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

