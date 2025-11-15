"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "../types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: { id: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  const t = (text: { id: string; en: string }) => {
    return text[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
