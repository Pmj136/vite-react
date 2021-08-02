import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import resources from './lang'

i18n.use(languageDetector).init({
    resources,
    fallbackLng: 'zh',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n

export function changeLanguage(lng: string) {
    return i18n.changeLanguage(lng)
}
