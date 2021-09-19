import React, { FC, Suspense, useEffect } from 'react'
import { MainForm } from './components/MainForm'
import { LangSwitch } from './components/LangSwitch'
import ru from 'antd/lib/locale/ru_RU'
import en from 'antd/lib/locale/en_US'
import ar from 'antd/lib/locale/ar_EG'
import { useAppSelector } from './store/store'
import { LangType } from './store/locale/reducers/localeSlice'
import { ConfigProvider } from 'antd'

import './App.scss'
import 'antd/dist/antd.css'
import i18n from 'i18next'

const switchAntLocale = (locale: LangType) => {
  let antLocale = ru

  switch (locale) {
    case 'ru':
      antLocale = ru
      break
    case 'en':
      antLocale = en
      break
    case 'ar':
      antLocale = ar
  }

  return antLocale
}

export const App: FC = () => {
  const locale = useAppSelector(
    (state) => state.rootReducer.localeReducers.lang.currentLang
  )

  useEffect(() => {
    i18n.changeLanguage(locale).then(() => {})
  })

  return (
    <ConfigProvider
      direction={locale === 'ar' ? 'rtl' : 'ltr'}
      locale={switchAntLocale(locale)}
    >
      <Suspense fallback={null}>
        <div className="App" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <LangSwitch />
          <MainForm />
        </div>
      </Suspense>
    </ConfigProvider>
  )
}
