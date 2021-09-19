import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  firstname: string
  lastname: string
  email: string
  company: string
  city: string
  message: string
}

const initialState: initialStateType = {
  firstname: '',
  lastname: '',
  email: '',
  company: '',
  city: '',
  message: '',
}

const mainFormSlice = createSlice({
  name: 'form',
  initialState: initialState as initialStateType,
  reducers: {
    setData(state, { payload }) {
      state = payload
    },
    setField(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    clearForm() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        city: '',
        message: '',
      }
    },
  },
})

export const mainFormActions = mainFormSlice.actions
export default mainFormSlice.reducer
