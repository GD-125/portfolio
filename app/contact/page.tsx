import Link from "next/link"
import { ArrowRight, Mail, Phone, Linkedin, Github, MapPin, Terminal, Shield, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block cyber-badge mb-4">
                  <Lock className="h-3 w-3 mr-1" /> Encrypted Communication Channel
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Get in Touch</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Interested in working together? Reach out through any of these secure channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5 relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Form */}
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle>Secure Message Transmission</CardTitle>
                  <CardDescription>Your message will be encrypted and securely delivered</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium flex items-center">
                        <Terminal className="h-3 w-3 mr-2 text-primary" />
                        Identifier
                      </label>
                      <Input id="name" placeholder="Your name" className="cyber-input" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium flex items-center">
                        <Terminal className="h-3 w-3 mr-2 text-primary" />
                        Communication Vector
                      </label>
                      <Input id="email" type="email" placeholder="Your email" className="cyber-input" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="subject" className="text-sm font-medium flex items-center">
                        <Terminal className="h-3 w-3 mr-2 text-primary" />
                        Subject Classification
                      </label>
                      <Input id="subject" placeholder="What's this regarding?" className="cyber-input" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium flex items-center">
                        <Terminal className="h-3 w-3 mr-2 text-primary" />
                        Message Payload
                      </label>
                      <Textarea id="message" placeholder="Your message" className="min-h-[120px] cyber-input" />
                    </div>
                    <Button type="submit" className="cyber-button">
                      <span className="flex items-center">
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle>Secure Communication Channels</CardTitle>
                    <CardDescription>Multiple encrypted vectors to reach me</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="flex items-center gap-4 group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-sm font-medium">Direct Line</h3>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-sm font-medium">Encrypted Email</h3>
                        <p className="text-sm text-muted-foreground">contact@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-sm font-medium">Professional Network</h3>
                        <p className="text-sm text-muted-foreground">linkedin.com/in/username</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-sm font-medium">Code Repository</h3>
                        <p className="text-sm text-muted-foreground">github.com/username</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="text-sm font-medium">Operational Base</h3>
                        <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle>Security Guarantee</CardTitle>
                    <CardDescription>Your data is protected with military-grade encryption</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-medium">End-to-End Encryption</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        All communications are secured with AES-256 encryption and protected against man-in-the-middle
                        attacks.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-medium">Zero Knowledge Protocol</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Your sensitive information is never stored in plaintext and is securely wiped after
                        transmission.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Fortify Your Digital Perimeter?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's collaborate to build impenetrable defenses for your digital assets.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline" className="cyber-outline-button" asChild>
                  <Link href="/projects" className="flex items-center">
                    View Security Portfolio
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

