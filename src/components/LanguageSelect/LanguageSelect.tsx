import styles from "./LanguageSelect.module.less";
import React from "react";
import { Globe, ChevronDown, Check } from "react-feather";
import { useLocale } from "../../i18n/LocaleContext";
import { useTranslation } from "../../i18n/useTranslation";
import type { Locale } from "../../i18n/LocaleContext";

export const LanguageSelect = () => {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();
  const [langDropdownOpen, setLangDropdownOpen] = React.useState(false);
  const langDropdownRef = React.useRef<HTMLDivElement>(null);
  const mobileLangDropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!langDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (langDropdownRef.current?.contains(target)) return;
      if (mobileLangDropdownRef.current?.contains(target)) return;
      setLangDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langDropdownOpen]);

  const handleSelectLocale = (next: Locale) => {
    setLocale(next);
    setLangDropdownOpen(false);
  };

  const localeLabel = locale === "de" ? "DE" : "EN";

  return (
    <div className={styles.langSwitcher} ref={langDropdownRef}>
      <button
        type="button"
        className={styles.langTrigger}
        onClick={() => setLangDropdownOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={langDropdownOpen}
        aria-label={t({ id: "aria.language" })}
      >
        <Globe size={16} aria-hidden />
        <span>{localeLabel}</span>
        <ChevronDown
          size={10}
          strokeWidth={4}
          className={`${styles.langTriggerChevron} ${langDropdownOpen ? styles.langTriggerChevronOpen : ""}`}
          aria-hidden
        />
      </button>
      {langDropdownOpen && (
        <ul
          className={styles.langDropdown}
          role="listbox"
          aria-label={t({ id: "aria.language" })}
        >
          <li>
            <button
              type="button"
              role="option"
              aria-selected={locale === "de"}
              className={`${styles.langOption} ${styles.langTop}`}
              onClick={() => handleSelectLocale("de")}
            >
              {t({ id: "language.de" })}
              {locale === "de" && <Check size={14} strokeWidth={3} />}
            </button>
          </li>
          <li>
            <button
              type="button"
              role="option"
              aria-selected={locale === "en"}
              className={`${styles.langOption} ${styles.langBottom}`}
              onClick={() => handleSelectLocale("en")}
            >
              {t({ id: "language.en" })}
              {locale === "en" && <Check size={14} strokeWidth={3} />}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
