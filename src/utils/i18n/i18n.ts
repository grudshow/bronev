import i18next, { i18n as i18nInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

const createI18n = (language: string): i18nInstance => {
	const i18n = i18next.createInstance().use(initReactI18next)

	i18n
		.use(HttpApi)
		.use(LanguageDetector)
		.init({
			backend: {
				loadPath: './locales/{{lng}}/translation.json',
			},
			lng: language,
			fallbackLng: language,
			detection: {
				caches: ['localStorage', 'cookie'],
				order: ['localStorage', 'queryString', 'cookie'],
			},
		})

	return i18n
}

export const i18n = createI18n('')
