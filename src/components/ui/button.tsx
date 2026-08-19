"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Button as ButtonPrimitive,
  Link as LinkPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
  type LinkProps as LinkPrimitiveProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import gsap from "gsap"
import { entranceAnimations } from "@/libs/animations/entranceAnimation"
import { hoverAnimations } from "@/libs/animations/hoverAnimation"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center font-bold whitespace-nowrap transition-colors outline-none select-none cursor-pointer border-[3px] border-black dark:border-zinc-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-neo-blue text-black",
        primary: "bg-neo-blue text-black",
        secondary: "bg-neo-pink text-black",
        destructive: "bg-neo-red text-white",
        outline: "bg-white dark:bg-zinc-900",
        ghost: "bg-transparent shadow-none border-transparent hover:bg-gray-100 dark:hover:bg-zinc-800 hover:shadow-none hover:translate-x-0 hover:translate-y-0 active:shadow-none",
        link: "bg-transparent shadow-none border-transparent underline-offset-4 hover:underline hover:shadow-none hover:translate-x-0 hover:translate-y-0 active:shadow-none",
        dark: "bg-black text-white dark:bg-white dark:text-black",
      },
      size: {
        default: "h-11 px-6 text-base gap-2 [&_svg]:size-5",
        sm: "h-9 px-4 text-sm gap-1.5 [&_svg]:size-4",
        lg: "h-14 px-8 text-lg gap-2 [&_svg]:size-6",
        xl: "h-16 px-10 text-xl gap-3 [&_svg]:size-7",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  animation = "none",
  hoverAnimation = "none",
  ...props
}: Omit<ButtonPrimitiveProps, "className"> &
  React.RefAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string
    animation?: keyof typeof entranceAnimations | "none"
    hoverAnimation?: keyof typeof hoverAnimations | "none"
  }) {
    
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    const el = buttonRef.current;
    if (!el || animation === "none") return;
    entranceAnimations[animation as keyof typeof entranceAnimations]?.(el);
  }, [animation]);

  const handleMouseEnter = (e: any) => {
    const el = buttonRef.current;
    if (el && hoverAnimation !== "none") {
      hoverAnimations[hoverAnimation as keyof typeof hoverAnimations]?.(el);
    }
  };

  const handleMouseLeave = (e: any) => {
    if (buttonRef.current && hoverAnimation !== "none") {
      gsap.to(buttonRef.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3,
      });
    }
  };

  return (
    <ButtonPrimitive
      ref={(node) => {
        buttonRef.current = node as HTMLButtonElement;
        if (typeof (props as any).ref === "function") (props as any).ref(node);
      }}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  )
}

function LinkButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: Omit<LinkPrimitiveProps, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }) {
  return (
    <LinkPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, LinkButton, buttonVariants }
