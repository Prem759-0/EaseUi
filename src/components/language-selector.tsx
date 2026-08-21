"use client"
import * as React from "react"

export type Translations = {
  [lang: string]: {
    dir: "ltr" | "rtl";
    values: Record<string, string>;
  };
};

export function useTranslation(translations: Translations, defaultLang: string = "en") {
  const language = defaultLang;
  const currentTranslation = translations[language] || translations["en"];

  const t = currentTranslation?.values || {};
  const dir = currentTranslation?.dir || "ltr";

  return { language, dir, t };
}
