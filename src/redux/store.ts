import { configureStore } from '@reduxjs/toolkit'
import dateReducer from './slices/dateSlice'
import popUpReducer from './slices/popUpSlice'
// import validReducer from './slices/validSlice'

export const store = configureStore({
  reducer: {
    date: dateReducer,
    popUp: popUpReducer,
    // valid: validReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch