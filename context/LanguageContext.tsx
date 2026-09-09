import { createContext, Dispatch, SetStateAction } from "react";

type LanguafeContextType = {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
};

export const LanguageContext = createContext<LanguafeContextType | null>(null);
