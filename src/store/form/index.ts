import { combineReducers } from '@reduxjs/toolkit'
import mainFormReducer from './reducers/mainFormSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

export const formReducers = combineReducers({
  form: persistReducer(persistConfig, mainFormReducer),
})
