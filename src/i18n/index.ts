import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetector from 'i18next-browser-languagedetector'
import resources from './lang'

i18n.use(initReactI18next)
    .use(languageDetector)
    .init({
        resources,
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false,
        },
    })

export function changeLanguage(lng: string) {
    return i18n.changeLanguage(lng)
}
