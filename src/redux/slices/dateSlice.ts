import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "../store";
import type { PayloadAction } from '@reduxjs/toolkit'


type Months =  "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"
type WeekFormat =  "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" |"Sunday" 

interface Init {
  allMonths: Months[];
  weekformat: WeekFormat[];
  currentDate: string;              // example:  '2023-05-18 Thursday'
  listOfWeekDays: string[] | [];   // example:  ['2023-05-18 Thursday', '2023-05-19 Friday', ... ]        this is list of current week with current date of week, it is indexed, first argument after initialization will be on monday place, getWeek() - is initializator method
  currentPossition: number;
}

const initialState: Init = {
  allMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekformat: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  currentDate: "",
  listOfWeekDays: [], 
  currentPossition: 0,
}
export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    getCurrentDate(state) {
      const date = new Date()
      const _year = date.getFullYear()
      const _month = date.getMonth()
      const _day = date.getDate()
      const currentPossition = state.currentPossition 

      const indexWeek = (new Date(_year,_month, _day + currentPossition).getDay() - 1 < 0) ? 6 : new Date(_year,_month, _day + currentPossition).getDay() - 1
      

      state.currentDate = getDate(0) // !!!
      console.log("state.currentDate ", state.currentDate)
      
      state.listOfWeekDays = getWeek(indexWeek)  // !!!

      function getWeek(indexWeek: number): string[] {
        // this function create a list and fills it the dates of week, indexWeek shows current day of week then the discribed logic determines oters days in a current week
        let week = []
        for (let i = indexWeek - 1; i >= 0; i--){
          const num = (i + 1)*(-1)
          week.push(getDate(num)) // these are previous days
        } 
        week.push(getDate(0)) // this is current day

        for (let i = indexWeek + 1; i < 7; i++){
          const num = i - indexWeek
          week.push(getDate(num)) //these are nexts days
        } 
        return week
      }
      function getDate(_differentDays: number): string {
        // this function create a string which contains year month days and day of week in '2023-05-18 Thursday' format. _differentDays parameter determines what day befor/after today  I want to get 
        const weekDays = state.weekformat
        const _year = new Date().getFullYear()
        const _month = new Date().getMonth()
        const _day = new Date().getDate()
        const date = new Date(_year, _month, _day + _differentDays)
        
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
        return currentDate
      }
 
    },
    goToRight(state) {
      state.currentPossition += 7

      function getWeek(indexWeek: number): string[] {
        // this function create a list and fills it the dates of week, indexWeek shows current day of week then the discribed logic determines oters days in a current week
        let week = []
        for (let i = indexWeek - 1; i >= 0; i--){
          const num = (i + 1)*(-1)
          week.push(getDate(num)) // these are previous days
        } 
        week.push(getDate(0)) // this is current day

        for (let i = indexWeek + 1; i < 7; i++){
          const num = i - indexWeek
          week.push(getDate(num)) //these are nexts days
        } 
        return week
      }
      function getDate(_differentDays: number): string {
        // this function create a string which contains year month days and day of week in '2023-05-18 Thursday' format. _differentDays parameter determines what day befor/after today  I want to get 
        const weekDays = state.weekformat
        const _year = new Date().getFullYear()
        const _month = new Date().getMonth()
        const _day = new Date().getDate()
        const date = new Date(_year, _month, _day + _differentDays)
        
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
        return currentDate
      }

      console.log(state.currentPossition)
    }

  }
})

export default dateSlice.reducer
export const selectDate = (state:RootState) => state.date
export const {
  getCurrentDate,
  goToRight,
} = dateSlice.actions