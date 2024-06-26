import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const storedLanguage = localStorage.getItem("i18nextLng");

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(
        {
            debug:false,
            fallbackLng:storedLanguage || "en",
            lng: storedLanguage || "en",
            backend: {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
              },
            whitelist: ["en", "ru"],
        }
    )
export default i18n;