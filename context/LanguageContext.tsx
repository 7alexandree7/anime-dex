"use client";

import { LanguageContextType } from "@/types/language";
import { createContext } from "react";

export const LanguageContext = createContext<LanguageContextType | null>(null);
