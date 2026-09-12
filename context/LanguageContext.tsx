"use client";

import { createContext, Dispatch, SetStateAction } from "react";

export type LanguageCode = "pt" | "ja";

type LanguageContextType = {
  lang: LanguageCode;
  setLang: Dispatch<SetStateAction<LanguageCode>>;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);
