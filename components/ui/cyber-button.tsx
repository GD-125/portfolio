"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cyberButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground",
        secondary:
          "bg-gradient-to-r from-secondary to-tertiary hover:from-tertiary hover:to-secondary text-secondary-foreground",
        accent: "bg-gradient-to-r from-accent to-tertiary hover:from-tertiary hover:to-accent text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary hover:bg-primary/10 neon-border",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      glow: {
        none: "",
        subtle:
          "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-primary/20 before:to-secondary/20 before:blur-md before:opacity-50",
        medium:
          "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-primary/40 before:to-secondary/40 before:blur-md before:opacity-70",
        strong:
          "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-primary/60 before:to-secondary/60 before:blur-lg before:opacity-90",
      },
      animated: {
        none: "",
        border: "animated-border",
        pulse: "animate-pulse",
        shimmer: "shimmer-effect",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      glow: "none",
      animated: "none",
    },
  },
)

export interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberButtonVariants> {
  asChild?: boolean
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant, size, glow, animated, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <button
          className={cn(cyberButtonVariants({ variant, size, glow, animated, className }))}
          ref={ref}
          {...props}
        />
      )
    }
    return (
      <button className={cn(cyberButtonVariants({ variant, size, glow, animated, className }))} ref={ref} {...props} />
    )
  },
)
CyberButton.displayName = "CyberButton"

export { CyberButton, cyberButtonVariants }

