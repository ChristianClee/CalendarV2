import { configureStore } from '@reduxjs/toolkit'
import dataReduser from './slices/dateSlice'
import popUpReducer from './slices/popUpSlice'
// import validReducer from './slices/validSlice'

export const store = configureStore({
  reducer: {
    popUp: popUpReducer,
    date: dataReduser,
    // valid: validReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
