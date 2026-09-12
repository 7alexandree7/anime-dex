"use client";

import { useState } from 'react'
import { LanguageCode, LanguageContext } from './LanguageContext'

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {

  const [lang, setLang] = useState<LanguageCode>("pt")

  return (
    <LanguageContext.Provider value={{lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
