import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ButtonGroup({ className, ...props }: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center -space-x-px rounded-lg [&>button]:rounded-none [&>button:first-child]:rounded-l-lg [&>button:last-child]:rounded-r-lg data-[slot=button-group]",
        className
      )}
      {...props}
    />
  )
}
