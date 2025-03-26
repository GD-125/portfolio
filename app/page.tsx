import Link from "next/link"
import Image from "next/image"
import { Download, ArrowRight, Shield, Code, Lock, Terminal, Zap, Database, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block cyber-badge mb-4">
                    <Lock className="h-3 w-3 mr-1" /> Secure • Ethical • Professional
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient">
                    Jr Penetration Tester
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Securing digital landscapes through ethical hacking and advanced security solutions
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                  <Button variant="default" size="lg" className="cyber-button" asChild>
                    <a href="/resume.pdf" download className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="cyber-outline-button" asChild>
                    <Link href="/contact" className="flex items-center">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-primary/20 cyber-glow">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"></div>
                  <div className="absolute inset-0 cyber-lines"></div>
                  <Image
                    src="/photo.jpg?height=460&width=460"
                    alt="Profile"
                    fill
                    className="object-cover z-10 rounded-full p-1"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5 relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">
                  <Shield className="h-3 w-3 mr-1" /> Expert Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gradient">
                  Specialized Security Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Comprehensive cybersecurity solutions tailored to protect your digital assets
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group cyber-card h-full hover-lift">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Penetration Testing</h3>
                  <p className="text-muted-foreground flex-grow">
                    Comprehensive security assessments to identify vulnerabilities in your systems before malicious
                    actors can exploit them.
                  </p>
                  <Button variant="link" className="mt-4 p-0 group justify-start" asChild>
{/*                     <Link href="/services" className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link> */}
                  </Button>
                </CardContent>
              </Card>

              <Card className="group cyber-card h-full hover-lift">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Secure Code Review</h3>
                  <p className="text-muted-foreground flex-grow">
                    Expert analysis of your application code to identify security flaws and implement secure coding
                    practices.
                  </p>
                  <Button variant="link" className="mt-4 p-0 group justify-start" asChild>
{/*                     <Link href="/services" className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link> */}
                  </Button>
                </CardContent>
              </Card>

              <Card className="group cyber-card h-full hover-lift">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cloud Security</h3>
                  <p className="text-muted-foreground flex-grow">
                    Specialized security assessments for cloud environments, ensuring your data remains protected in
                    AWS, Azure, or GCP.
                  </p>
                  <Button variant="link" className="mt-4 p-0 group justify-start" asChild>
{/*                     <Link href="/services" className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link> */}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">
                  <Terminal className="h-3 w-3 mr-1" /> Featured Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gradient">
                  Recent Security Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore my portfolio of advanced cybersecurity projects and tools
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group cyber-card overflow-hidden hover-lift">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Keylogger Idetentification"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardContent className="relative p-6">
                  <h3 className="text-xl font-bold mb-2">Keylogger Identification & Prevention</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed a web-based Keylogger Identification & Prevention, which pratically demonstrates how attackers use keylogger techniques to capture the 
                    Key strokes.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-primary/10">
                        Python
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10">
                        Security
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="group" asChild>
                      <Link href="/projects" className="flex items-center">
                        View
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cyber-card overflow-hidden hover-lift">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Security Dashboard"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardContent className="relative p-6">
                  <h3 className="text-xl font-bold mb-2">Network Monitoring System</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Designed a comprehensive Network Monitoring dashboard that provides real-time visibility of how actual Networking tools works.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-primary/10">
                        React
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10">
                        Node.js
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="group" asChild>
                      <Link href="/projects" className="flex items-center">
                        View
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cyber-card overflow-hidden hover-lift">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Phishing Simulator"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardContent className="relative p-6">
                  <h3 className="text-xl font-bold mb-2">Investigation of a Data Breach</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Building a sophisticated Data Breach System which is used to monitor Data Breaches in the organization also it will have live data 
                    of past Breaches happened in the world.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-primary/10">
                        PHP
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10">
                        JavaScript
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="group" asChild>
                      <Link href="/projects" className="flex items-center">
                        View
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="cyber-outline-button" asChild>
                <Link href="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5 relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">
                  <Cpu className="h-3 w-3 mr-1" /> Technical Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gradient">
                  Specialized Security Skills
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Advanced technical capabilities in cybersecurity and penetration testing
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="cyber-card p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Penetration Testing
                </h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Web Application Testing</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-primary to-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Network Penetration</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-[12%] rounded-full bg-gradient-to-r from-primary to-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Mobile Application Security</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-[18%] rounded-full bg-gradient-to-r from-primary to-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cyber-card p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Security Development
                </h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Secure Coding Practices</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-primary to-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Security Tool Development</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-[12%] rounded-full bg-gradient-to-r from-primary to-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">DevSecOps Integration</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-[6%] rounded-full bg-gradient-to-r from-primary to-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cyber-card p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Specialized Security
                </h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Cloud Security</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-[6%] rounded-full bg-gradient-to-r from-primary to-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">IoT Security</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-[6%] rounded-full bg-gradient-to-r from-primary to-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Blockchain Security</span>
                      <span className="text-sm text-muted-foreground">Bedinner</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                      <div className="h-full w-[8%] rounded-full bg-gradient-to-r from-primary to-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gradient">
                  Ready to Secure Your Digital Assets?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's work together to protect your organization from evolving cyber threats.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button variant="default" size="lg" className="cyber-button" asChild>
                  <Link href="/contact" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="cyber-outline-button" asChild>
                  <Link href="/projects" className="flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

