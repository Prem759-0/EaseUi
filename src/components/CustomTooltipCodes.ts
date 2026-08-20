export const customTooltipCodes: Record<string, { react: string, html?: string, vue?: string }> = {
  "TooltipDemo": {
    react: `import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">Hover</Button>} />
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
`,
  },
  "TooltipSides": {
    react: `import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" className="w-fit capitalize">{side}</Button>} />
          <TooltipContent side={side}>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
`,
  },
  "TooltipKeyboard": {
    react: `import { SaveIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon-sm"><SaveIcon /></Button>} />
      <TooltipContent>
        Save Changes <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}
`,
  },
  "TooltipDisabled": {
    react: `import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDisabled() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={<span className="inline-block w-fit"><Button variant="outline" disabled>
            Disabled
          </Button></span>} />
        <TooltipContent>
          <p>This feature is currently unavailable</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}
`,
  },
  "TooltipRtl": {
    react: `"use client"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      content: "Add to library",
      "inline-start": "Inline Start",
      left: "Left",
      top: "Top",
      bottom: "Bottom",
      right: "Right",
      "inline-end": "Inline End",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      content: "إضافة إلى المكتبة",
      "inline-start": "بداية السطر",
      left: "يسار",
      top: "أعلى",
      bottom: "أسفل",
      right: "يمين",
      "inline-end": "نهاية السطر",
    },
  },
  he: {
    dir: "rtl",
    values: {
      content: "הוסף לספרייה",
      "inline-start": "תחילת השורה",
      left: "שמאל",
      top: "למעלה",
      bottom: "למטה",
      right: "ימין",
      "inline-end": "סוף השורה",
    },
  },
}

const physicalSides = ["left", "top", "bottom", "right"] as const
const logicalSides = ["inline-start", "inline-end"] as const

export function TooltipRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {physicalSides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger render={<Button variant="outline">{t[side]}</Button>} />
            <TooltipContent side={side} dir={dir}>
              {t.content}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {logicalSides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger render={<Button variant="outline">{t[side]}</Button>} />
            <TooltipContent side={side} dir={dir}>
              {t.content}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
`,
  },
  "SocialMediaTooltips": {
    react: `const App = () => {
    const socials = [
        { name: 'Twitter', icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.184 1.258h1.846l-4.034 4.61 4.746 6.275H9.026l-2.91-3.806-3.33 3.806H.937L5.253 7.21.7 1.258h3.81l2.63 3.478zm-.648 9.78h1.023L3.954 2.304H2.856z" fill="currentColor"/></svg>
        )},
        { name: 'YouTube', icon: (
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.458 9.208a12.15 12.15 0 0 1 0-5.417c.054-.181.157-.346.3-.48a1.2 1.2 0 0 1 .517-.278 31.1 31.1 0 0 1 9.45 0c.195.05.373.146.516.279s.247.298.3.48a12.15 12.15 0 0 1 0 5.416 1.07 1.07 0 0 1-.3.48 1.2 1.2 0 0 1-.516.278 31.1 31.1 0 0 1-9.45 0 1.2 1.2 0 0 1-.517-.279 1.07 1.07 0 0 1-.3-.48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.833 8.125 8.75 6.5 5.833 4.875z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
        )},
        { name: 'Github', icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.125 11.92V9.752a2.6 2.6 0 0 0-.541-1.896c1.625 0 3.25-1.084 3.25-2.98a2.93 2.93 0 0 0-.542-1.895 4 4 0 0 0 0-1.896s-.542 0-1.625.812a11.7 11.7 0 0 0-4.333 0c-1.084-.812-1.625-.812-1.625-.812a3.75 3.75 0 0 0 0 1.896 2.93 2.93 0 0 0-.542 1.896c0 1.895 1.625 2.979 3.25 2.979a2.55 2.55 0 0 0-.542 1.896v2.166" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.875 9.747c-2.443 1.084-2.708-1.083-3.791-1.083" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
        )},
        { name: 'LinkedIn', icon: (
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.334 4.336c.928 0 1.818.342 2.474.952a3.14 3.14 0 0 1 1.026 2.298v3.792H10.5V7.586c0-.287-.123-.563-.341-.766a1.2 1.2 0 0 0-.825-.317c-.31 0-.607.114-.825.317a1.05 1.05 0 0 0-.342.766v3.792H5.834V7.586c0-.862.368-1.689 1.025-2.298a3.64 3.64 0 0 1 2.475-.952M3.5 4.875H1.167v6.5H3.5zM2.333 3.253c.644 0 1.167-.485 1.167-1.084 0-.598-.522-1.083-1.167-1.083-.644 0-1.166.485-1.166 1.083 0 .599.522 1.084 1.166 1.084" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
        )},
        { name: 'Instagram', icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#igClip)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M9.209 1.086H3.792a2.71 2.71 0 0 0-2.708 2.708v5.417a2.71 2.71 0 0 0 2.708 2.708h5.417a2.71 2.71 0 0 0 2.708-2.708V3.794a2.71 2.71 0 0 0-2.708-2.708"/><path d="M8.667 6.161a2.167 2.167 0 1 1-4.287.636 2.167 2.167 0 0 1 4.287-.636"/><path d="M9.479 3.523h.007" strokeWidth="2"/></g><defs><clipPath id="igClip"><path fill="#fff" d="M0 0h13v13H0z"/></clipPath></defs></svg>
        )},
    ]

    return (
        <>
            <style>
                {\`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{  }
                \`}
            </style>

            <section className="bg-white min-h-screen flex items-center justify-center">
                <div className="flex items-center gap-4">
                    {socials.map((s) => (
                        <div key={s.name} className="group relative flex flex-col items-center">
                            <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.47,2,0.41,1.5)] absolute bottom-full mb-4 pointer-events-none">
                                <div className="bg-slate-900 text-slate-50 text-xs px-5 py-2.5 rounded-sm">
                                    {s.name}
                                </div>
                            </div>
                            <div className="size-12.5 rounded-full border border-slate-300 flex items-center justify-center cursor-pointer relative overflow-hidden text-slate-900 group-hover:border-slate-800 group-hover:text-slate-50 transition-[border-color,color] duration-400 before:content-[''] before:absolute before:inset-0 before:bg-slate-800 before:translate-y-full before:transition-transform before:duration-400 group-hover:before:translate-y-0">
                                <span className="relative z-10">{s.icon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
`,
    html: `<style>
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
    *{
        
    }
</style>

<section class="bg-white min-h-screen flex items-center justify-center">
    <div class="flex items-center gap-4">
        <!-- Twitter -->
        <div class="group relative flex flex-col items-center">
            <div class="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.47,2,0.41,1.5)] absolute bottom-full mb-4 pointer-events-none">
                <div class="bg-slate-900 text-slate-50 text-xs px-5 py-2.5 rounded-sm">Twitter</div>
            </div>
            <div class="size-12.5 rounded-full border border-slate-300 flex items-center justify-center cursor-pointer relative overflow-hidden text-slate-900 group-hover:border-slate-800 group-hover:text-slate-50 transition-[border-color,color] duration-400 before:content-[''] before:absolute before:inset-0 before:bg-slate-800 before:translate-y-full before:transition-transform before:duration-400 group-hover:before:translate-y-0">
                <span class="relative z-10"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.184 1.258h1.846l-4.034 4.61 4.746 6.275H9.026l-2.91-3.806-3.33 3.806H.937L5.253 7.21.7 1.258h3.81l2.63 3.478zm-.648 9.78h1.023L3.954 2.304H2.856z" fill="currentColor"/></svg></span>
            </div>
        </div>
        <!-- YouTube -->
        <div class="group relative flex flex-col items-center">
            <div class="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.47,2,0.41,1.5)] absolute bottom-full mb-4 pointer-events-none">
                <div class="bg-slate-900 text-slate-50 text-xs px-5 py-2.5 rounded-sm">YouTube</div>
            </div>
            <div class="size-12.5 rounded-full border border-slate-300 flex items-center justify-center cursor-pointer relative overflow-hidden text-slate-900 group-hover:border-slate-800 group-hover:text-slate-50 transition-[border-color,color] duration-400 before:content-[''] before:absolute before:inset-0 before:bg-slate-800 before:translate-y-full before:transition-transform before:duration-400 group-hover:before:translate-y-0">
                <span class="relative z-10"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.458 9.208a12.15 12.15 0 0 1 0-5.417c.054-.181.157-.346.3-.48a1.2 1.2 0 0 1 .517-.278 31.1 31.1 0 0 1 9.45 0c.195.05.373.146.516.279s.247.298.3.48a12.15 12.15 0 0 1 0 5.416 1.07 1.07 0 0 1-.3.48 1.2 1.2 0 0 1-.516.278 31.1 31.1 0 0 1-9.45 0 1.2 1.2 0 0 1-.517-.279 1.07 1.07 0 0 1-.3-.48" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.833 8.125 8.75 6.5 5.833 4.875z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
        </div>
        <!-- Github -->
        <div class="group relative flex flex-col items-center">
            <div class="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.47,2,0.41,1.5)] absolute bottom-full mb-4 pointer-events-none">
                <div class="bg-slate-900 text-slate-50 text-xs px-5 py-2.5 rounded-sm">Github</div>
            </div>
            <div class="size-12.5 rounded-full border border-slate-300 flex items-center justify-center cursor-pointer relative overflow-hidden text-slate-900 group-hover:border-slate-800 group-hover:text-slate-50 transition-[border-color,color] duration-400 before:content-[''] before:absolute before:inset-0 before:bg-slate-800 before:translate-y-full before:transition-transform before:duration-400 group-hover:before:translate-y-0">
                <span class="relative z-10"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.125 11.92V9.752a2.6 2.6 0 0 0-.541-1.896c1.625 0 3.25-1.084 3.25-2.98a2.93 2.93 0 0 0-.542-1.895 4 4 0 0 0 0-1.896s-.542 0-1.625.812a11.7 11.7 0 0 0-4.333 0c-1.084-.812-1.625-.812-1.625-.812a3.75 3.75 0 0 0 0 1.896 2.93 2.93 0 0 0-.542 1.896c0 1.895 1.625 2.979 3.25 2.979a2.55 2.55 0 0 0-.542 1.896v2.166" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.875 9.747c-2.443 1.084-2.708-1.083-3.791-1.083" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
        </div>
        <!-- LinkedIn -->
        <div class="group relative flex flex-col items-center">
            <div class="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.47,2,0.41,1.5)] absolute bottom-full mb-4 pointer-events-none">
                <div class="bg-slate-900 text-slate-50 text-xs px-5 py-2.5 rounded-sm">LinkedIn</div>
            </div>
            <div class="size-12.5 rounded-full border border-slate-300 flex items-center justify-center cursor-pointer relative overflow-hidden text-slate-900 group-hover:border-slate-800 group-hover:text-slate-50 transition-[border-color,color] duration-400 before:content-[''] before:absolute before:inset-0 before:bg-slate-800 before:translate-y-full before:transition-transform before:duration-400 group-hover:before:translate-y-0">
                <span class="relative z-10"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.334 4.336c.928 0 1.818.342 2.474.952a3.14 3.14 0 0 1 1.026 2.298v3.792H10.5V7.586c0-.287-.123-.563-.341-.766a1.2 1.2 0 0 0-.825-.317c-.31 0-.607.114-.825.317a1.05 1.05 0 0 0-.342.766v3.792H5.834V7.586c0-.862.368-1.689 1.025-2.298a3.64 3.64 0 0 1 2.475-.952M3.5 4.875H1.167v6.5H3.5zM2.333 3.253c.644 0 1.167-.485 1.167-1.084 0-.598-.522-1.083-1.167-1.083-.644 0-1.166.485-1.166 1.083 0 .599.522 1.084 1.166 1.084" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
        </div>
        <!-- Instagram -->
        <div class="group relative flex flex-col items-center">
            <div class="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.47,2,0.41,1.5)] absolute bottom-full mb-4 pointer-events-none">
                <div class="bg-slate-900 text-slate-50 text-xs px-5 py-2.5 rounded-sm">Instagram</div>
            </div>
            <div class="size-12.5 rounded-full border border-slate-300 flex items-center justify-center cursor-pointer relative overflow-hidden text-slate-900 group-hover:border-slate-800 group-hover:text-slate-50 transition-[border-color,color] duration-400 before:content-[''] before:absolute before:inset-0 before:bg-slate-800 before:translate-y-full before:transition-transform before:duration-400 group-hover:before:translate-y-0">
                <span class="relative z-10"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#igClip)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.209 1.086H3.792a2.71 2.71 0 0 0-2.708 2.708v5.417a2.71 2.71 0 0 0 2.708 2.708h5.417a2.71 2.71 0 0 0 2.708-2.708V3.794a2.71 2.71 0 0 0-2.708-2.708"/><path d="M8.667 6.161a2.167 2.167 0 1 1-4.287.636 2.167 2.167 0 0 1 4.287-.636"/><path d="M9.479 3.523h.007" stroke-width="2"/></g><defs><clipPath id="igClip"><path fill="#fff" d="M0 0h13v13H0z"/></clipPath></defs></svg></span>
            </div>
        </div>
    </div>
</section>
`,
  },
  "InteractiveDirectionalTooltips": {
    react: `const App = () => {
    const directions = [
        { label: 'Left', tipCls: 'right-full top-1/2 -translate-y-1/2 mr-3', arrowCls: '-right-1 top-1/2 -translate-y-1/2' },
        { label: 'Top', tipCls: 'bottom-full left-1/2 -translate-x-1/2 mb-3', arrowCls: '-bottom-1 left-1/2 -translate-x-1/2' },
        { label: 'Bottom', tipCls: 'top-full left-1/2 -translate-x-1/2 mt-3', arrowCls: '-top-1 left-1/2 -translate-x-1/2' },
        { label: 'Right', tipCls: 'left-full top-1/2 -translate-y-1/2 ml-3', arrowCls: '-left-1 top-1/2 -translate-y-1/2' },
    ]

    return (
        <>
            <style>
                {\`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{  }
                \`}
            </style>

            <section className="bg-white min-h-screen flex items-center justify-center">
                <div className="flex items-center gap-4">
                    {directions.map((item) => (
                        <div key={item.label} className="group relative inline-flex">
                            <div className={\`opacity-0 group-hover:opacity-100 transition-opacity absolute \${item.tipCls} pointer-events-none z-10\`}>
                                <div className="bg-slate-100 text-slate-800 text-sm px-4 py-2 rounded-xl whitespace-nowrap relative">
                                    Add to library
                                    <div className={\`size-2.5 bg-slate-100 rotate-45 absolute \${item.arrowCls}\`} />
                                </div>
                            </div>
                            <button className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 cursor-pointer">{item.label}</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
`,
    html: `<style>
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
    *{
        
    }
</style>
<section class="bg-white min-h-screen flex items-center justify-center">
    <div class="flex items-center gap-4">
        <!-- Left -->
        <div class="group relative inline-flex">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity absolute right-full top-1/2 -translate-y-1/2 mr-3 pointer-events-none z-10">
                <div class="bg-slate-100 text-slate-800 text-sm px-4 py-2 rounded-xl whitespace-nowrap relative">
                    Add to library
                    <div class="size-2.5 bg-slate-100 rotate-45 absolute -right-1 top-1/2 -translate-y-1/2"></div>
                </div>
            </div>
            <button class="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 cursor-pointer">Left</button>
        </div>
        <!-- Top -->
        <div class="group relative inline-flex">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none z-10">
                <div class="bg-slate-100 text-slate-800 text-sm px-4 py-2 rounded-xl whitespace-nowrap relative">
                    Add to library
                    <div class="size-2.5 bg-slate-100 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
            </div>
            <button class="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 cursor-pointer">Top</button>
        </div>
        <!-- Bottom -->
        <div class="group relative inline-flex">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity absolute top-full left-1/2 -translate-x-1/2 mt-3 pointer-events-none z-10">
                <div class="bg-slate-100 text-slate-800 text-sm px-4 py-2 rounded-xl whitespace-nowrap relative">
                    Add to library
                    <div class="size-2.5 bg-slate-100 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
            </div>
            <button class="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 cursor-pointer">Bottom</button>
        </div>
        <!-- Right -->
        <div class="group relative inline-flex">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity absolute left-full top-1/2 -translate-y-1/2 ml-3 pointer-events-none z-10">
                <div class="bg-slate-100 text-slate-800 text-sm px-4 py-2 rounded-xl whitespace-nowrap relative">
                    Add to library
                    <div class="size-2.5 bg-slate-100 rotate-45 absolute -left-1 top-1/2 -translate-y-1/2"></div>
                </div>
            </div>
            <button class="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 cursor-pointer">Right</button>
        </div>
    </div>
</section>
`,
  },
};
