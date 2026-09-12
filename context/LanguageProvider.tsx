"use client";

import { useState } from 'react'
import { LanguageContext } from './LanguageContext'
import { LanguageCode } from '@/types/language';

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {

  const [lang, setLang] = useState<LanguageCode>("pt")

  return (
    <LanguageContext.Provider value={{lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
