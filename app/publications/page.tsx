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
                    src="/pojects/nms.png?height=200&width=400"
                    alt="NMS Research"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/50 cyber-scan-line"></div>
                </div>
                <CardHeader className="relative">
                  <CardTitle>Real-time Network Traffic Visualization and Analysis: A Web-based Network Monitoring System</CardTitle>
                  <CardDescription>Published in TNSTC Sponsered Conference, 2025</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground">
                    This research paper explores innovative approaches to educate students by teaching how the actual Network Monitoring Tools like NMPA, Wireshark, etc. wll works.
                  </p>
                </CardContent>
                <CardFooter className="relative flex justify-end">
                  <Button variant="outline" size="sm" className="group cyber-outline-button" asChild>
                    <Link href="https://drive.google.com/file/d/1LP_rDYIg_M4j21yM90Pea--82wNknqjO/view?usp=drive_link">
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
                    src="/projects/keylogger.png?height=200&width=400"
                    alt="Keylogger Research"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/50 cyber-scan-line"></div>
                </div>
                <CardHeader className="relative">
                  <CardTitle>From Theory to Practice: Keylogger Detection and Cyber Threat Intelligence in IT Security Education</CardTitle>
                  <CardDescription>International Conference, 2025</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground">
                    A comprehensive analysis of Keylogger which creates awareness among individuals and students about the major hidden thread in the Modern-era.
                  </p>
                </CardContent>
                <CardFooter className="relative flex justify-end">
                  <Button variant="outline" size="sm" className="group cyber-outline-button" asChild>
                    <Link href="https://drive.google.com/file/d/10-FQYpAg3nOqV_BIzRxOdaK2Ha_awF4q/view?usp=drive_link">
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
                  <CardTitle>Authentication Bypass using SQL Injection on Login Page</CardTitle>
                  <CardDescription>Tech Article, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This article addresses how to bypass Login pages by using SQL Injection attacks.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="https://www.tutorialspoint.com/authentication-bypass-using-sql-injection-on-login-page">
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
                  <CardTitle>How to Set Git Username and Password in GitBash?</CardTitle>
                  <CardDescription>Tech Article, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    An article which clearly describes how to set username and password in Gitbash.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="https://www.tutorialspoint.com/how-to-set-git-username-and-password-in-gitbash">
                      Read Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Publication 5 */}
              <Card className="overflow-hidden transition-all hover:shadow-lg cyber-card">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform rotate-45 translate-x-10 -translate-y-10 cyber-corner"></div>
                <CardHeader>
                  <CardTitle>Top 10 AI Tools for Text Spam Detection</CardTitle>
                  <CardDescription>Tech Article, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Thsi article describes the Top 10 AI tools to detect Spam Texts.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="https://www.tutorialspoint.com/top-10-ai-tools-for-text-spam-detection">
                      Read Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Publication 6 */}
              <Card className="overflow-hidden transition-all hover:shadow-lg cyber-card">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform rotate-45 translate-x-10 -translate-y-10 cyber-corner"></div>
                <CardHeader>
                  <CardTitle>10 Best AI Tools for Inventory Management</CardTitle>
                  <CardDescription>Tech Article, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive artcile consisting of 10 AI tools used for Inventory Management in the industry.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="https://www.tutorialspoint.com/10-best-ai-tools-for-inventory-management">
                      Read Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Publication 7 */}
              <Card className="overflow-hidden transition-all hover:shadow-lg cyber-card">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform rotate-45 translate-x-10 -translate-y-10 cyber-corner"></div>
                <CardHeader>
                  <CardTitle>Top 15 Extensions for ReactJS in VSCode</CardTitle>
                  <CardDescription>Tech Article, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This article describes 
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto cyber-outline-button" asChild>
                    <Link href="https://www.tutorialspoint.com/top-extensions-for-reactjs-in-vscode">
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
                    2025
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold">DSCE, Coimbatore</h3>
                    <p className="text-sm text-muted-foreground">March 2025</p>
                    <p className="mt-2">
                      "International Conference on Emerging Trends in Artificial Intelligence (ICETAI'25)"
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
                    2025
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold">PACET, Pollachi</h3>
                    <p className="text-sm text-muted-foreground">January 2025</p>
                    <p className="mt-2">
                      "Futuristic Trends in Artificial Intelligence and Nano Science for Modern Engineering Applications"
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
  {/*               <div className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:bg-muted/50 cyber-card">
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
              </div> */}
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

