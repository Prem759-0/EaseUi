"use client"

import * as React from "react"

export type Translations = Record<string, {
  dir: "ltr" | "rtl"
  values: Record<string, string>
}>

export function useTranslation(translations: Translations, defaultLang: string) {
  const [lang, setLang] = React.useState(defaultLang)

  const currentTranslation = translations[lang] || translations[Object.keys(translations)[0]]
  
  return {
    dir: currentTranslation.dir,
    t: currentTranslation.values,
    lang,
    setLang,
  }
}
