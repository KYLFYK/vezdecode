import { combineReducers } from '@reduxjs/toolkit'
import localeReducer from './reducers/localeSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'lang',
  storage,
}

export const localeReducers = combineReducers({
  lang: persistReducer(persistConfig, localeReducer),
})
