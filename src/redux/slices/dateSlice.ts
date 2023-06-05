import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { MonthDate, CurrentDay} from '../../dateUtilits/dates'

import type { PayloadAction } from '@reduxjs/toolkit'
import { CalendarDay, CalendarWeekDays,CalendarMonthDays } from '../../dateUtilits/dates'

// type Months =  "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"
// type WeekFormat =  "Mond" | "Tues" | "Wedn" | "Thur" | "Frid" | "Satu" |"Sund" 

export interface Init {
  currentDate: CurrentDay;
  currentMonthDate: MonthDate; 
  currentWeek: number[];  // it contains from dates of week
  previousWeek: number // 
}
const initialState : Init = {
  currentDate: CalendarDay.getCurrentDate(),
  currentMonthDate: CalendarMonthDays.getMonthDays(0),
  currentWeek: CalendarWeekDays.getDaysWeek(0),
  previousWeek: CalendarWeekDays.getDaysWeek(0)[0],
}
 
export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    changeCurrentWeek(state, active: PayloadAction<number>) {
      state.previousWeek = active.payload
    }
    // getCurrentDate(state) {   
    //   state.currentDate = CalendarDay.getCurrentDate()
    // },
    // getCurrentMonthDate(state) {
    //   state.currentMonthDate = CalendarMonthDays.getMonthDays()
    // }, 



  },
})

export const { actions, reducer } = dateSlice
export const selectDate = (state:RootState) => state.date
export default dateSlice.reducer