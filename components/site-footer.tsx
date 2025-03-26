import Link from "next/link"
import { Shield, Linkedin, Globe, Mail, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-primary/20 py-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Portfolio</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} All rights reserved. Designed and Developed by{" "}
          <span className="font-bold text-primary cyber-glow">DEV QUEENS</span>
        </p>
        <div className="flex gap-4">
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">Website</span>
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-5 w-5" />
            <span className="sr-only">Phone</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

