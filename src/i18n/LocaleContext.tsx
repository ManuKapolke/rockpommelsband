import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import de from "./locales/de.json";
import en from "./locales/en.json";

const STORAGE_KEY = "app.locale";

export type Locale = "de" | "en";

const messages: Record<Locale, Record<string, string>> = {
  de: de as Record<string, string>,
  en: en as Record<string, string>,
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getStoredLocale(): Locale {
  const stored = typeof document !== "undefined" && localStorage.getItem(STORAGE_KEY);
  if (stored === "de" || stored === "en") return stored;
  return "de";
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages[locale]} defaultLocale="de">
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
