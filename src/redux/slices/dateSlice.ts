import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "../store";
import type { PayloadAction } from '@reduxjs/toolkit'

type Months = "" | "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"

interface Init {
  currentYear: string;
  currentMonth: Months;
  currentWeekDay: string;
  currentDay: string;
  listOfWeekDays: string[] | []; //this is list of current week with current date of week, it is indexed, first argument after initialization will be on monday place, getWeek() - is initializator method
  isBothMonthsInWeek: boolean; //it shows , is booth month in one week
  bothMonthsInWeek: string[];
}

const initialState:Init = {
  currentYear: "",
  currentMonth: "",
  currentWeekDay: "",
  currentDay: "",
  listOfWeekDays: [], 
  isBothMonthsInWeek: false,
  bothMonthsInWeek: [],
  
}
export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    getCurrentDate(state) {
      const month: Months[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const weekDays= "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      const date = new Date()

      const currentYear = String(date.getFullYear())
    
      const currentMonth:Months = month[date.getMonth()]

      const currentWeekDay = weekDays[date.getDay()]
      const currentDay = String(date.getDate())
      // currentWeekDay and currentDay don't need additional verify and I can save their value
      state.currentYear = currentYear
      state.currentMonth = currentMonth
      state.currentWeekDay = currentWeekDay
      state.currentDay = currentDay
     

//       ///////////////////////////////////////////////////////////
//       // but currentYear currentMonth can enter in one week, and if they are in, I want to add both of month or years in  current Year or currentMonth
//       const _year: number = date.getFullYear()
//       const _month: number = date.getMonth()
//       const _day: number = date.getDate()
//       const _currentweekDay: number = (date.getDay() - 1 != -1) ? date.getDay() - 1 : 6 // transform to russia system of week

//       const _finishweekDay: number = (new Date(_year, _month + 1, 0).getDay() - 1 != -1 )? new Date(_year, _month + 1, 0).getDay() - 1 : 6
//       // console.log(_currentweekDay, _finishweekDay)
//       // console.log("SDf")
         
//       const lastDayOfThisMonth = new Date(_year, _month + 1, 0).getDate() 
//       const lastDayOfPreviousMonth = new Date(_year, _month, 0).getDate() 
// // console.log(lastDayOfThisMonth)
//       // next 'if' block checks : are both month in one week or not?
//       if (_day < 7) { // check previous month
//         state.isBothMonthsInWeek = true
//         if (month.indexOf(currentMonth) === 0) { // if index is 0 it means previous month must be December
//           state.bothMonthsInWeek = ["December", currentMonth]
//         } else {
//           const previousMonth = month[month.indexOf(currentMonth) - 1]
//           state.bothMonthsInWeek = [previousMonth, currentMonth]
//         }
//       } else if (_day + 7 > lastDayOfThisMonth && _finishweekDay - _currentweekDay === -1) { //check next month
//         state.isBothMonthsInWeek = true
//         if (month.indexOf(currentMonth) === 11) {
//           state.bothMonthsInWeek = [currentMonth, "January"]
//         } else {
//           const nextMonth = month[month.indexOf(currentMonth) + 1]
//           state.bothMonthsInWeek = [currentMonth, nextMonth]
//         }
//       } 
//       // todo  I need to do bothYearsInWeek like month 
//       //////////////////////////////////////////////////////////////////////////



    },
    getWeek(state) {
      const weekDays = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" ")
      const date = new Date()
      let currentWeek: number[] = []
      const day = parseInt(state.currentDay) // current day
      const weekDay = state.currentWeekDay   // current day of week

      const year: number = date.getFullYear() 
      const month: number = date.getMonth()
      const lastDayOfThisMonth: number = new Date(year, month + 1, 0).getDate() 
      const lastDayOfPreviousMonth: number = new Date(year, month, 0).getDate() 


      const dayIndex = weekDays.indexOf(weekDay)
      const daysAfterCurrentDay = 7 - (dayIndex + 1) // amount of days of week after current day 
      const daysBeforeCurrentDay = 7 - (daysAfterCurrentDay + 1)


      if (daysBeforeCurrentDay > 0) {      // if the 'days before' exists I whant to add them to currentWeek
        for (let i = 1; i < daysBeforeCurrentDay + 1; i++){
          const _day = day - i 
          if (_day < 1) {                  // test on previous days of month
            const _dayPreviousMonth = lastDayOfPreviousMonth - _day
            currentWeek.push(_dayPreviousMonth)
          } else {
            currentWeek.push(_day) 
          }
        }
      }

      currentWeek.push(day) // I add curent day to week

      if (daysAfterCurrentDay > 0) {      // if the 'days after' exists I whant to add them to currentWeek
        for (let i = 1; i < daysAfterCurrentDay + 1; i++){
          const _day = day + i
          if (_day > lastDayOfThisMonth) {
            const _dayNextMonth = _day - lastDayOfThisMonth
            currentWeek.push(_dayNextMonth)
          } else {
            currentWeek.push(_day)
          }
        }
      }
      state.listOfWeekDays = currentWeek.map(item => String(item))
    },
    goToRight(state) {
    }

  }
})

export default dateSlice.reducer
export const selectDate = (state:RootState) => state.date
export const {
  getCurrentDate,
  getWeek,
} = dateSlice.actions