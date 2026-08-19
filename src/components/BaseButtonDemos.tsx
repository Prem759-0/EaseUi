"use client"

import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
  ArrowRightIcon,
  PlusIcon,
  CircleFadingArrowUpIcon,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

import { BaseButton, baseButtonVariants } from "@/components/ui/base-button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Spinner } from "@/components/ui/spinner"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

export function ButtonLoading() {
  return (
    <div className="flex gap-2">
      <BaseButton variant="outline" disabled>
        <Spinner data-icon="inline-start" className="mr-2" />
        Generating
      </BaseButton>
      <BaseButton variant="secondary" disabled>
        Downloading
        <Spinner data-icon="inline-end" className="ml-2" />
      </BaseButton>
    </div>
  )
}

export function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal")

  return (
    <div className="flex gap-2">
      <ButtonGroup className="hidden sm:flex">
        <BaseButton variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </BaseButton>
      </ButtonGroup>
      <ButtonGroup>
        <BaseButton variant="outline">Archive</BaseButton>
        <BaseButton variant="outline">Report</BaseButton>
      </ButtonGroup>
      <ButtonGroup>
        <BaseButton variant="outline">Snooze</BaseButton>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
             <BaseButton variant="outline" size="icon" aria-label="More Options"><MoreHorizontalIcon /></BaseButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon className="w-4 h-4" />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon className="w-4 h-4" />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon className="w-4 h-4" />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon className="w-4 h-4" />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon className="w-4 h-4" />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon className="w-4 h-4 mr-2" />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="personal">
                      Personal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      Work
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      Other
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon className="w-4 h-4" />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  )
}

export function ButtonRender() {
  return (
    <a
      href="#"
      className={baseButtonVariants({ variant: "secondary", size: "sm" })}
    >
      Login
    </a>
  )
}

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      button: "Button",
      submit: "Submit",
      delete: "Delete",
      loading: "Loading",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      button: "زر",
      submit: "إرسال",
      delete: "حذف",
      loading: "جاري التحميل",
    },
  },
  he: {
    dir: "rtl",
    values: {
      button: "כפתור",
      submit: "שלח",
      delete: "מחק",
      loading: "טוען",
    },
  },
}

export function ButtonRtl() {
  const { dir, t, lang, setLang } = useTranslation(translations, "en")

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <BaseButton variant="outline">
              {lang === "en" ? "English" : lang === "ar" ? "Arabic" : "Hebrew"}
            </BaseButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
             <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
               <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="ar">Arabic</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="he">Hebrew</DropdownMenuRadioItem>
             </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row p-4 border border-black dark:border-white rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white dark:bg-zinc-900" dir={dir}>
        <BaseButton variant="outline">{t.button}</BaseButton>
        <BaseButton variant="destructive">{t.delete}</BaseButton>
        <BaseButton variant="outline">
          {t.submit}{" "}
          <ArrowRightIcon className="rtl:rotate-180 ml-2" data-icon="inline-end" />
        </BaseButton>
        <BaseButton variant="outline" size="icon" aria-label="Add">
          <PlusIcon />
        </BaseButton>
        <BaseButton variant="secondary" disabled>
          <Spinner data-icon="inline-start" className="mr-2" /> {t.loading}
        </BaseButton>
      </div>
    </div>
  )
}

export function BaseButtonIcon() {
  return (
    <div className="flex gap-4 justify-center">
      <BaseButton variant="outline" size="icon">
        <ChevronLeft />
      </BaseButton>
      <BaseButton variant="outline" size="icon">
        <ChevronRight />
      </BaseButton>
    </div>
  )
}

