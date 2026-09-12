import { Dispatch, SetStateAction } from "react";

export type LanguageCode = "pt" | "ja";

export type LanguageContextType = {
  lang: LanguageCode;
  setLang: Dispatch<SetStateAction<LanguageCode>>;
};
