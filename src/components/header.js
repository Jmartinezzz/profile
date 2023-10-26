import * as React from "react"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"

export default function Header({ siteTitle }) {
  const { languages, changeLanguage } = useI18next()
  const { t } = useTranslation()
  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <div class="relative group inline-block">
        <button class="bg-white font-semibold  text-gray-900 shadow-sm text-sm py-2 px-3 rounded-md inline-flex items-center ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {t("btn_lang")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2 transform -rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 010 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <ul class="absolute right-3 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 hidden text-gray-700 group-hover:block mt-1  w-18 bg-white px-2">
          {languages.map(lang => (
            <li key={lang} className="list-none">
              <a
                key={lang}
                onClick={e => {
                  e.preventDefault()
                  changeLanguage(lang)
                }}
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
              >
                {lang}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
