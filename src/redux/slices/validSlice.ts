import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "../store";
import type { PayloadAction } from '@reduxjs/toolkit'

interface Init {
  years: string;
  months: string;
  days: string;
  hours: string;
  minutes: string;
  errorYears: boolean;
  errorMonths: boolean;
  errorHours: boolean;
  errorDays: boolean;
  errorMinutes: boolean;
  dateUser: string; // it is final  user date after input
}


const initialState = {
  years: "",
  months: "",
  days: "",
  hours: "",
  minutes: "",
  errorYears: true, // before putting on button "assigh" error is disable 
  errorMonths: true,
  errorDays: true,
  errorHours: true,
  errorMinutes: true,
  dateUser: ""

}

export const validSlice = createSlice({
  name: "valid",
  initialState,
  reducers: {
    saveYears(state, action: PayloadAction<string>) {
      const currentYear = new Date().getFullYear()
      const years = action.payload
      state.years = years
      
      if (years.length === 0) {
        state.errorYears = false
        return
      }
      state.errorYears = (currentYear <= parseInt(years) && parseInt(years) < currentYear + 2) ?   true : false 
    },

    saveMonths(state, action: PayloadAction<string>) {
      const months = action.payload
      state.months = months

      if (months.length === 0) {
        state.errorMonths = false
        return
      }
      state.errorMonths = (0 < parseInt(months) && parseInt(months) < 13) ?   true : false 
    },
    saveDays(state, action:PayloadAction<string>){
      const days = action.payload
      const years = state.years
      const months = state.months

      // console.log(`${years} ${months}`)
      const lastDay = new Date(parseInt(years), parseInt(months) , 0).getDate()
      // console.log(`last day is ${lastDay}`)

      state.days = days

      if (days.length === 0) {
        state.errorDays = false
        return
      }
      state.errorDays = (parseInt(days) <= lastDay) ?   true : false 
    },
    saveHours(state, action: PayloadAction<string>) {
      const hours = action.payload
      state.hours = hours

      if (hours.length === 0) {
        state.errorHours = false
        return
      }
      state.errorHours = (parseInt(hours) < 60) ?   true : false 


    },
    saveMinutes(state, action: PayloadAction<string>) {

      const minutes = action.payload
      state.minutes = minutes

      if (minutes.length === 0) {
        state.errorMinutes = false
        return
      }
      state.errorMinutes = (parseInt(minutes) < 60) ?   true : false 
    },
    checkDate(state) {
      let years = state.years
      let months = state.months
      let days = state.days
      let hours = state.hours
      let minutes = state.minutes

      const lastDay = new Date(parseInt(years), parseInt(months) , 0).getDate()
      state.errorDays = (parseInt(days) <= lastDay) ?   true : false            // additional check for a days in month, it needs for it because if user will change month date after change 'days' auto correct won't work
          
      const errorYears = state.errorYears
      const errorMonths = state.errorMonths
      const errorDays = state.errorDays
      const errorHours = state.errorHours
      const errorMinutes = state.errorMinutes

      const resultError = errorYears && errorMonths && errorDays && errorHours && errorMinutes

      if (resultError) {
        months = (months.length < 2)? "0" + months : months
        days = (days.length < 2)? "0" + days : days
        hours = (hours.length < 2)? "0" + hours : hours
        minutes = (minutes.length < 2) ? "0" + minutes : minutes
        
        const result = `${years}-${months}-${days}-${hours}:${minutes}`
        state.dateUser = result
        console.log(result)
      }
    }
  }
})

export default validSlice.reducer
export const selectValid = (state: RootState) => state.valid
export const {
  saveYears,
  saveMonths,
  saveDays,
  saveHours,
  saveMinutes,
  checkDate,
} = validSlice.actions