import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "../store";
import type { PayloadAction } from '@reduxjs/toolkit'


type Months =  "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"
type WeekFormat =  "Mond" | "Tues" | "Wedn" | "Thur" | "Frid" | "Satu" |"Sund" 

interface Init {
  allMonths: Months[];
  weekformat: WeekFormat[];
  currentDate: string;              // example:  '2023-05-18 Thursday'
  listOfWeekDays: string[] | [];   // example:  ['2023-05-18 Thursday', '2023-05-19 Friday', ... ]        this is list of current week with current date of week, it is indexed, first argument after initialization will be on monday place, getWeek() - is initializator method
  currentPossition: number;
  listOfAllWeeks: {data:string}[] ; // ????????????? this list keeps all downloaded weeks, I don't know what should I apply type to it
}

const initialState: Init = {
  allMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekformat: [ "Mond", "Tues", "Wedn", "Thur", "Frid", "Satu", "Sund"],
  currentDate: "",
  listOfWeekDays: [], 
  currentPossition: 0,
  listOfAllWeeks: [],
}
export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    getCurrentDate(state) {
      const _year = new Date().getFullYear()                              //
      const _month = new Date().getMonth()                                //
      const _day = new Date().getDate()                                   //
      const currentPossition = state.currentPossition                     //
      const date = new Date(_year,_month, _day + currentPossition)        // it can be shortened

      const indexWeek = (date.getDay() - 1 < 0) ? 6 : date.getDay() - 1
      

      state.currentDate = getDate(0)                                      // !!!
      state.listOfWeekDays = getWeek(indexWeek, currentPossition)         // !!!

      function getWeek(indexWeek: number, add: number): string[] {
        // this function create a list and fills it the dates of week, indexWeek shows current day of week then the discribed logic determines oters days in a current week
        let week = []
        for (let i = indexWeek - 1; i >= 0; i--){
          const num = (i + 1)*(-1)
          week.push(getDate(num + add)) // these are previous days
        } 
        week.push(getDate(add)) // this is current day

        for (let i = indexWeek + 1; i < 7; i++){
          const num = i - indexWeek 
          week.push(getDate(num + add)) //these are nexts days
        } 
        return week
      }
      function getDate(_differentDays: number): string {
        // this function create a string which contains year month days and day of week in '2023-05-18 Thursday' format. _differentDays parameter determines what day befor/after today  I want to get 
        const weekDays = state.weekformat                               //
        const _year = new Date().getFullYear()                          //
        const _month = new Date().getMonth()                            //
        const _day = new Date().getDate()                               //
        const date = new Date(_year, _month, _day + _differentDays)     // it can be shortened 
        
        const indexWeekDay:number = (date.getDay() - 1 < 0) ? 6 : date.getDay() - 1 // translate to Russian system of week, now first day of week starts from Monday
        const numberCurrentMonth:string = String(date.getMonth()) // it shows current number of month
        const numberCurrentDay:string = String(date.getDate())

        const currentYear: string = String(date.getFullYear())
        const currentWeekDay: string = weekDays[ indexWeekDay ]
        const currentDay: string = (numberCurrentDay.length < 2) ?
          "0" + numberCurrentDay : numberCurrentDay
        const currentMonth: string = (numberCurrentMonth.length < 2) ?
          "0" + numberCurrentMonth : numberCurrentMonth
        
        const currentDate = [currentYear, currentMonth, currentDay, currentWeekDay].join("-")
        return currentDate // 2023-04-18-Thursday
      }
    },
    goToRight(state) {
      state.currentPossition += 7
    },
    goToLeft(state) {
      state.currentPossition -= 7
    },
    checkPreviousLists() {
      
    },
    add(state, action:PayloadAction<{data:string}>) {
      state.listOfAllWeeks = [...state.listOfAllWeeks, action.payload ]
    },


  }
})

export default dateSlice.reducer
export const selectDate = (state:RootState) => state.date
export const {
  getCurrentDate,
  goToRight,
  goToLeft,
  add,
} = dateSlice.actions