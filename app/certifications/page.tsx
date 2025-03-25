import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CertificationsPage() {
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
                  Professional Certifications
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Industry-recognized certifications that validate my expertise in cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Credentials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  My Cybersecurity Certifications
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Credentials that demonstrate my expertise and commitment to the cybersecurity field.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Certification 1 */}
              <div className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1 duration-300 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="CEH Certification"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">Verified</Badge>
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2">Certified Ethical Hacker (CEH)</h3>
                  <p className="text-sm text-muted-foreground mb-4">EC-Council</p>
                  <p className="text-sm">
                    Demonstrates proficiency in identifying vulnerabilities and weaknesses in target systems using the
                    same knowledge and tools as malicious hackers.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Issued: Jan 2022</span>
                    <Button variant="ghost" size="sm" className="group" asChild>
                      <Link href="#">
                        View Certificate
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Certification 2 */}
              <div className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1 duration-300 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="OSCP Certification"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">Verified</Badge>
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2">Offensive Security Certified Professional (OSCP)</h3>
                  <p className="text-sm text-muted-foreground mb-4">Offensive Security</p>
                  <p className="text-sm">
                    Hands-on penetration testing certification that proves practical skills in exploiting
                    vulnerabilities and conducting security assessments.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Issued: Mar 2021</span>
                    <Button variant="ghost" size="sm" className="group" asChild>
                      <Link href="#">
                        View Certificate
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Certification 3 */}
              <div className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1 duration-300 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="CISSP Certification"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">Verified</Badge>
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2">
                    Certified Information Systems Security Professional (CISSP)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">(ISC)²</p>
                  <p className="text-sm">
                    Advanced certification that demonstrates expertise across various domains of information security.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Issued: Sep 2020</span>
                    <Button variant="ghost" size="sm" className="group" asChild>
                      <Link href="#">
                        View Certificate
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Certification 4 */}
              <div className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1 duration-300 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Security+ Certification"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">Verified</Badge>
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2">CompTIA Security+</h3>
                  <p className="text-sm text-muted-foreground mb-4">CompTIA</p>
                  <p className="text-sm">
                    Validates the baseline skills necessary to perform core security functions and pursue an IT security
                    career.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Issued: Jun 2019</span>
                    <Button variant="ghost" size="sm" className="group" asChild>
                      <Link href="#">
                        View Certificate
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Certification 5 */}
              <div className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1 duration-300 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="CISM Certification"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">Verified</Badge>
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2">Certified Information Security Manager (CISM)</h3>
                  <p className="text-sm text-muted-foreground mb-4">ISACA</p>
                  <p className="text-sm">
                    Demonstrates expertise in information security governance, program development, and management.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Issued: Nov 2020</span>
                    <Button variant="ghost" size="sm" className="group" asChild>
                      <Link href="#">
                        View Certificate
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Certification 6 */}
              <div className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1 duration-300 cyber-card">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="GWAPT Certification"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">Verified</Badge>
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2">GIAC Web Application Penetration Tester (GWAPT)</h3>
                  <p className="text-sm text-muted-foreground mb-4">GIAC</p>
                  <p className="text-sm">
                    Specialized certification focused on web application security testing and vulnerability assessment.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Issued: Feb 2021</span>
                    <Button variant="ghost" size="sm" className="group" asChild>
                      <Link href="#">
                        View Certificate
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Certifications */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Additional Credentials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Specialized Training & Courses
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Additional specialized training and courses I've completed to enhance my cybersecurity skills.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Course 1 */}
              <div className="group flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50 cyber-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Advanced Web Application Security</h3>
                  <p className="text-sm text-muted-foreground">SANS Institute</p>
                  <p className="mt-2 text-sm">
                    Comprehensive training on identifying and exploiting web application vulnerabilities, including
                    OWASP Top 10 risks.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">Completed: August 2021</p>
                </div>
              </div>

              {/* Course 2 */}
              <div className="group flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50 cyber-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Cloud Security Architecture</h3>
                  <p className="text-sm text-muted-foreground">Cloud Security Alliance</p>
                  <p className="mt-2 text-sm">
                    Specialized training on designing and implementing secure cloud architectures across major cloud
                    providers.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">Completed: March 2022</p>
                </div>
              </div>

              {/* Course 3 */}
              <div className="group flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50 cyber-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Incident Response & Digital Forensics</h3>
                  <p className="text-sm text-muted-foreground">SANS Institute</p>
                  <p className="mt-2 text-sm">
                    Advanced training on responding to security incidents and conducting digital forensics
                    investigations.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">Completed: November 2021</p>
                </div>
              </div>

              {/* Course 4 */}
              <div className="group flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50 cyber-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                    <line x1="8" x2="8" y1="16" y2="16" />
                    <line x1="8" x2="8" y1="20" y2="20" />
                    <line x1="12" x2="12" y1="18" y2="18" />
                    <line x1="12" x2="12" y1="22" y2="22" />
                    <line x1="16" x2="16" y1="16" y2="16" />
                    <line x1="16" x2="16" y1="20" y2="20" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Secure DevOps Practices</h3>
                  <p className="text-sm text-muted-foreground">DevSecOps Foundation</p>
                  <p className="mt-2 text-sm">
                    Training on integrating security into DevOps workflows and implementing secure CI/CD pipelines.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">Completed: January 2022</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Need a Certified Security Professional?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how my expertise and certifications can help secure your organization.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="cyber-button" asChild>
                  <Link href="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="cyber-outline-button" asChild>
                  <Link href="/publications">View My Publications</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

