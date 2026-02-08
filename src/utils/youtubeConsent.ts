const YT_CONSENT_KEY = "youtube-consent";
const YT_EVENT = "youtube-consent-changed";

export const getYouTubeConsent = () => {
  //   return localStorage.getItem(YT_CONSENT_KEY) === "true";
  return sessionStorage.getItem(YT_CONSENT_KEY) === "true";
};

export const setYouTubeConsent = (value: boolean) => {
  //   localStorage.setItem(YT_CONSENT_KEY, value.toString());
  sessionStorage.setItem(YT_CONSENT_KEY, value.toString());

  window.dispatchEvent(new Event(YT_EVENT));
};

export const onYouTubeConsentChange = (callback: () => void) => {
  window.addEventListener(YT_EVENT, callback);
  return () => window.removeEventListener(YT_EVENT, callback);
};
