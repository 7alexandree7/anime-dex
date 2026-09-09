import { useState } from 'react'
import { LanguageContext } from './LanguageContext'

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {

  const [lang, setLang] = useState("pt")

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
