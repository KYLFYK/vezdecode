import React, { FC, useState } from 'react'
import {
  LangType,
  localeActions,
} from '../../store/locale/reducers/localeSlice'
import i18n from 'i18next'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { Popover } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'

import styles from './LangSwitch.module.scss'

interface PopupProps {
  setVisible: (state: boolean) => void
  i18n: any
}

const PopupContent: FC<PopupProps> = ({ setVisible }) => {
  const dispatch = useAppDispatch()

  const handleClick = (lang: LangType) => {
    setVisible(false)
    dispatch(localeActions.setLang(lang))
  }

  return (
    <div className={styles.popup}>
      <div
        className={styles.popupSelect}
        onClick={() => {
          handleClick('en')
        }}
      >
        <span className={styles.itemText}>English</span>
      </div>
      <div
        className={`${styles.popupSelect} ${styles.popupSelectAlt}`}
        onClick={() => {
          handleClick('ar')
        }}
      >
        <span className={styles.itemText}>عربي</span>
      </div>
      <div
        className={styles.popupSelect}
        onClick={() => {
          handleClick('ru')
        }}
      >
        <span className={styles.itemText}>Русский</span>
      </div>
    </div>
  )
}

export const LangSwitch: FC = () => {
  const appLang = useAppSelector(
    (state) => state.rootReducer.localeReducers.lang.currentLang
  )

  const [visible, setVisible] = useState(false)

  return (
    <div
      className={`${styles.wrapper} ${appLang === 'ar' ? styles.altDir : ''}`}
    >
      <Popover
        placement="bottomRight"
        content={<PopupContent i18n={i18n} setVisible={setVisible} />}
        trigger="click"
        visible={visible}
        onVisibleChange={setVisible}
      >
        <div className={styles.current}>
          <span className={styles.text}>{appLang.toUpperCase()}</span>
          <div className={styles.arrow}>
            <CaretDownOutlined />
          </div>
        </div>
      </Popover>
    </div>
  )
}
