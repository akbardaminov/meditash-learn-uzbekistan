import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  hasGlow?: boolean
  className?: string
  variant?: 'default' | 'hero' | 'feature' | 'stats' | 'cta'
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, hasGlow = true, className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: "bg-gradient-to-br from-background via-background to-muted/20",
      hero: "bg-gradient-to-br from-background via-background/95 to-primary/5",
      feature: "bg-gradient-to-br from-background via-background/90 to-blue-500/5",
      stats: "bg-gradient-to-br from-background via-background/95 to-accent/5",
      cta: "bg-gradient-to-br from-background via-background/90 to-primary/10"
    }

    return (
      <>
        <section
          ref={ref}
          className={cn(
            "relative overflow-hidden py-20",
            variants[variant],
            className
          )}
          {...props}
        >
          {/* Background mesh pattern */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </section>
        
        {/* Bottom glow effect */}
        {hasGlow && (
          <div className="w-full h-12 flex items-end justify-center overflow-hidden -mt-6 pointer-events-none">
            <div 
              className={cn(
                "w-3/4 h-8 rounded-b-full blur-2xl mx-auto",
                {
                  'bg-gradient-to-b from-blue-200/30 via-blue-400/10 to-transparent': variant === 'default',
                  'bg-gradient-to-b from-primary/30 via-primary/10 to-transparent': variant === 'hero',
                  'bg-gradient-to-b from-blue-300/30 via-blue-500/10 to-transparent': variant === 'feature',
                  'bg-gradient-to-b from-accent/30 via-accent/10 to-transparent': variant === 'stats',
                  'bg-gradient-to-b from-primary/40 via-primary/15 to-transparent': variant === 'cta',
                }
              )}
            />
          </div>
        )}
      </>
    )
  }
)

SectionWrapper.displayName = "SectionWrapper"

export { SectionWrapper } 