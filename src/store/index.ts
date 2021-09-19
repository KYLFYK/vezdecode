import { combineReducers } from '@reduxjs/toolkit'
import { formReducers } from './form'
import { localeReducers } from './locale'

const rootReducer = combineReducers({
  formReducers,
  localeReducers,
})

export default rootReducer
