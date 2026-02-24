import { useIntl } from "react-intl";
import type { MessageDescriptor } from "react-intl";

export function useTranslation() {
  const intl = useIntl();
  const t = (
    descriptor: MessageDescriptor,
    values?: Record<string, string | number | boolean | null | undefined | React.ReactNode>
  ): string => {
    const result = intl.formatMessage(descriptor, values);
    return typeof result === "string" ? result : "";
  };
  return { t };
}
