import { useLocale } from "../../i18n/LocaleContext";
import { useTranslation } from "../../i18n/useTranslation";
import styles from "./Imprint.module.less";

export const Imprint = () => {
  const { locale } = useLocale();
  const { t } = useTranslation();

  const isEnglish = locale === "en";

  return (
    <div className={styles.imprint}>
      {isEnglish && (
        <p className={styles.bindingNote}>{t({ id: "legal.bindingNote" })}</p>
      )}
      <h1>{t({ id: "footer.impressum" })}</h1>

      <section>
        <h3>{t({ id: "legal.imprint.tmg" })}</h3>
        <p>
          Manu Kapolke <br />
          Hertleinstr. 23 <br />
          91052 Erlangen
        </p>

        <h3>{t({ id: "legal.imprint.contact" })}</h3>
        <p>
          {t({ id: "legal.imprint.phone" })}{" "}
          <a href="tel:+4917682065119">+49 (0) 176 82065119</a>
          <br />
          E-Mail: <a href="mailto:mail@manukapolke.de">mail@manukapolke.de</a>
        </p>
      </section>

      <section>
        <h3>{t({ id: "legal.imprint.references" })}</h3>
        <p>
          {t({ id: "legal.imprint.referencesText" })}{" "}
          <a
            href="https://thenounproject.com/browse/icons/term/paper-plane/"
            target="_blank"
            title="paper plane Icons"
            rel="noreferrer"
          >
            Noun Project
          </a>{" "}
          (CC BY 3.0).
        </p>
      </section>

      <section>
        <h2>{t({ id: "legal.imprint.disclaimer" })}</h2>

        <h3>{t({ id: "legal.imprint.liabilityContent" })}</h3>
        <p>{t({ id: "legal.imprint.liabilityContentText" })}</p>

        <h3>{t({ id: "legal.imprint.liabilityLinks" })}</h3>
        <p>{t({ id: "legal.imprint.liabilityLinksText" })}</p>

        <h3>{t({ id: "legal.imprint.copyright" })}</h3>
        <p>{t({ id: "legal.imprint.copyrightText" })}</p>

        <h3>{t({ id: "legal.imprint.privacy" })}</h3>
        <p>{t({ id: "legal.imprint.privacyText" })}</p>

        <span className={styles.sourceInfo}>
          {t({ id: "legal.imprint.source" })}{" "}
          <a href="https://www.impressum-generator.de">Impressum Generator</a>{" "}
          {t({ id: "legal.imprint.sourceBy" })}{" "}
          <a
            href="https://www.kanzlei-hasselbach.de/standorte/frankfurt/"
            rel="nofollow"
          >
            Kanzlei Hasselbach, Frankfurt
          </a>
          .
        </span>
      </section>
    </div>
  );
};
