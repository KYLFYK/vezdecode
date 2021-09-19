import { createSlice } from '@reduxjs/toolkit'

export type LangType = 'ru' | 'en' | 'ar'

interface initialStateType {
  currentLang: LangType
}

const initialState: initialStateType = {
  currentLang: 'ru',
}

const localeSlice = createSlice({
  name: 'locale',
  initialState: initialState as initialStateType,
  reducers: {
    setLang(state, { payload }) {
      state.currentLang = payload
    },
  },
})

export const localeActions = localeSlice.actions
export default localeSlice.reducer
