import * as React from "react"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: "sm" | "default" | "lg" | "icon"
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <Loader2
        ref={ref}
        className={cn(
          "animate-spin",
          {
            "size-4": size === "default",
            "size-3": size === "sm",
            "size-6": size === "lg",
            "size-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner }
