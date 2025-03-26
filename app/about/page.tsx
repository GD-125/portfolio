import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Award, Code, Server, Lock, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-primary/5 via-background to-primary/5">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Me</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Dedicated cybersecurity professional with a passion for identifying and mitigating security risks.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-primary/20 cyber-glow">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"></div>
                  <div className="absolute inset-0 cyber-lines"></div>
                  <Image
                    src="/photo.jpg?height=400&width=400"
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

        {/* Professional Background */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Professional Background</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Expertise & Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  With years of experience in cybersecurity, I help organizations strengthen their digital defenses
                  against evolving threats.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="group flex items-start gap-4 transition-all hover:translate-x-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Penetration Testing</h3>
                      <p className="text-muted-foreground">
                        Conducting thorough security assessments to identify vulnerabilities before malicious actors can
                        exploit them.
                      </p>
                    </div>
                  </li>
                  <li className="group flex items-start gap-4 transition-all hover:translate-x-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Security Consulting</h3>
                      <p className="text-muted-foreground">
                        Providing expert guidance on security best practices, compliance, and risk management
                        strategies.
                      </p>
                    </div>
                  </li>
                  <li className="group flex items-start gap-4 transition-all hover:translate-x-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Web Application Security</h3>
                      <p className="text-muted-foreground">
                        Specializing in identifying and remediating security flaws in web applications and APIs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="group flex items-start gap-4 transition-all hover:translate-x-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Server className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Network Security</h3>
                      <p className="text-muted-foreground">
                        Evaluating network infrastructure for security gaps and recommending robust protection measures.
                      </p>
                    </div>
                  </li>
                  <li className="group flex items-start gap-4 transition-all hover:translate-x-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Security Training</h3>
                      <p className="text-muted-foreground">
                        Educating teams on security awareness and defensive techniques to create a security-first
                        culture.
                      </p>
                    </div>
                  </li>
                  <li className="group flex items-start gap-4 transition-all hover:translate-x-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Incident Response</h3>
                      <p className="text-muted-foreground">
                        Helping organizations prepare for, respond to, and recover from security incidents effectively.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Professional Journey</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  My professional journey in the cybersecurity industry.
                </p>
              </div>
            </div>

            <div className="timeline-container">
              <div className="timeline-line"></div>

              {/* Timeline Items */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Jr Penetration Tester</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Freelancing | Present</p>
                  <p>
                    Conducting comprehensive security assessments, penetration
                    tests, and security architecture reviews for local organizations.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Cyber Security Intern</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Navodita Infotech | 2024 - 2025</p>
                  <p>
                    Developed a web-based Network Monitoring System application which helps students or individuals to understand how the actual NETWORK MONITORING
                    SYSTEMS(NMAP, Wireshark) works. 
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Software Developer</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Freelancing | Present</p>
                  <p>
                    Designed and implemented Student Attendance Management System for our College, which reduces teh manual workload on class attendances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Skills */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-2">Education & Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Academic Background & Technical Skills
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  My educational qualifications and technical expertise.
                </p>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="education-card">
                    <h4 className="text-xl font-bold">B.TECH in Information Technology</h4>
                    <p className="text-sm text-muted-foreground mt-1">P.A.College of Engineering and Technology, Pollachi | 2022 - 2026</p>
                    <p className="mt-2">
                      Focused on computer networks, algorithms, and information security fundamentals.
                    </p>
                  </div>

                  <div className="education-card">
                    <h4 className="text-xl font-bold">HSC-12th Grade in Computer Science</h4>
                    <p className="text-sm text-muted-foreground mt-1">Govt. Boys Hr. Sec. School, Udumalpet | 2020 - 2022</p>
                    <p className="mt-2">
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="grid gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Penetration Testing</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "21%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Network Security</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "30%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Web Application Security</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "40%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Software Devlopment</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "60%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Secure Coding</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "46%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Incident Response</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "18%" }}></div>
                    </div>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Work Together?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how I can help secure your digital assets and protect your organization.
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
                  <Link href="/projects">View My Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

