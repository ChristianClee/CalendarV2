import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "../store";
import type { PayloadAction } from '@reduxjs/toolkit'

interface Init{
  eventMessage: boolean;
}

const initialState = {
  eventMessage: false,
  descriptMessage: true,
}

export const popUpSlice = createSlice({
  name: "popUp",
  initialState, 
  reducers: {
    showEventMessage(state) {
      state.eventMessage = true
    },
    hideEventMessage(state) {
      state.eventMessage = false
    },
    hideDescriptMessage(state) {
      state.descriptMessage = false
    },
  }
})

export default popUpSlice.reducer
export const selectPopUp = (state: RootState) => state.popUp
export const {
  showEventMessage,
  hideEventMessage,
  hideDescriptMessage,
} = popUpSlice.actions