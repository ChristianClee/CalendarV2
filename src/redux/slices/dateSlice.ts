import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "../store";
import type { PayloadAction } from '@reduxjs/toolkit'


type Months =  "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"
type WeekFormat =  "Mond" | "Tues" | "Wedn" | "Thur" | "Frid" | "Satu" |"Sund" 
export type DownLoadedWeek = { uniqKey: string; value: string[] | []}


type UserDateType = {
  years: number;
  months: number,
  days: number,
  hours: number,
  minutes: number,
  strDate: string,
  strTime: string,
}
type ValidDateType = {
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
  dateUser: UserDateType; // it is final  user date after input
  dateUserStatus: boolean; 
}

interface Init {
  allMonths: Months[];
  weekformat: WeekFormat[];
  currentDayTime: string;              // 00:00
  currentDate: string;              // example:  '2023-05-18 Thursday'
  listOfWeekDays: string[] | [];   // example:  ['2023-05-18 Thursday', '2023-05-19 Friday', ... ]        this is list of current week with current date of week, it is indexed, first argument after initialization will be on monday place, getWeek() - is initializator method
  currentPossition: number;
  listOfAllWeeks: DownLoadedWeek[]; // ????????????? this list keeps all downloaded weeks, I don't know what should I apply type to it
  temporatyStorageWeek: DownLoadedWeek;
  lastActivDate: string;            // it show last active date
  validDate: ValidDateType;
}

const initialState: Init = {
  allMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekformat: [ "Mond", "Tues", "Wedn", "Thur", "Frid", "Satu", "Sund"],
  currentDayTime: "",
  currentDate: "",
  listOfWeekDays: [], 
  currentPossition: 0,
  listOfAllWeeks: [],
  temporatyStorageWeek: { uniqKey: "", value: [] },
  lastActivDate: "",
  validDate: {
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

    dateUser: { // it shows user date additional date from popUp message
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      strDate: "",
      strTime: "",
    },
    dateUserStatus: false, 
  }
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
    getDayTime(state) {
      const _hours = String(new Date().getHours())
      const _minutes = String(new Date().getMinutes())
      const hours = (_hours.length < 2) ? "0" + _hours : _hours
      const minutes = (_minutes.length < 2) ? "0" + _minutes : _minutes
      const time = `${hours}:${minutes}`
      state.currentDayTime = time

    },
    goToRight(state) {
      state.currentPossition += 7
      state.listOfAllWeeks = [...state.listOfAllWeeks, state.temporatyStorageWeek ]
    },
    goToLeft(state) {
      state.currentPossition -= 7
      state.listOfAllWeeks = [...state.listOfAllWeeks, state.temporatyStorageWeek ]
    },
    goToday(state) {
      state.currentPossition = 0
      state.listOfAllWeeks = [...state.listOfAllWeeks, state.temporatyStorageWeek ]
    },
    goToMessageDate(state) {
      if (state.validDate.dateUserStatus) {
        const dateUser = state.validDate.dateUser // {years: 2023, months: 5, days: 21, hours: 1, minutes: 1}
        const currentDate = state.currentDate
        const _years:number = parseInt(currentDate.slice(0,4)) 
        const _month:number = parseInt(currentDate.slice(5,7))
        const _day: number = parseInt(currentDate.slice(8, 10))
  


       
        // console.log( state.temporatyStorageWeek.value.includes("2023-04-29-Mond-01-f"))
        // @ts-ignore
        let differentDays:number = ((new Date(dateUser.years, dateUser.months, dateUser.days)
          // @ts-ignore
          - new Date(_years, _month, _day)) / 1000 / 60 / 60 / 24)
        differentDays = Math.floor(differentDays / 7) 
        if (differentDays >= 0) {
          differentDays *= 7
          state.listOfAllWeeks = [...state.listOfAllWeeks, state.temporatyStorageWeek]
          state.currentPossition = differentDays
          
 
        }
        // console.log(state.validDate.newDate)
 
        state.validDate.dateUserStatus = false // don't allow create new request without success "checkDate()"
      }
      
      

    },

    addToTemporatyStorage(state, action: PayloadAction<DownLoadedWeek>) {
      // console.log(action.payload)
      state.temporatyStorageWeek = action.payload
    },
    changeActivDate(state, action:PayloadAction<string>) {
      state.lastActivDate = action.payload
    },
    // =====================
    saveYears(state, action: PayloadAction<string>) {
      // const currentYear = new Date().getFullYear()
      const years = action.payload
      state.validDate.years = years
      
      // if (years.length === 0) {
      //   state.validDate.errorYears = false
      //   return
      // }

      // state.validDate.errorYears = (currentYear <= parseInt(years) && parseInt(years) < currentYear + 2) ?   true : false 
    },
    checkYears(state) {
      const currentYear = new Date().getFullYear()
      const years = state.validDate.years
        
      if (years.length === 0) {
        state.validDate.errorYears = false
        return
      }
      state.validDate.errorYears = (currentYear <= parseInt(years) && parseInt(years) < currentYear + 2) ?   true : false 
    },
    saveMonths(state, action: PayloadAction<string>) {
      // const date = new Date()
      const months = action.payload
      state.validDate.months = months

      // if (months.length === 0) {
      //   state.validDate.errorMonths = false
      //   return
      // }

      // const _years: boolean = parseInt(state.validDate.years) > date.getFullYear() 
      // if (_years) {
      //   state.validDate.errorMonths = (0 < parseInt(months) && parseInt(months) < 13) ?   true : false 
      // } else {
      //   const currentMonth = new Date().getMonth()
      //   state.validDate.errorMonths = (currentMonth < parseInt(months) && parseInt(months) < 13) ?   true : false 
      // }
  
    },
    checkMonth(state) {
      const date = new Date()
      const months = state.validDate.months
      if (months.length === 0) {
        state.validDate.errorMonths = false
        return
      }

      const _years: boolean = parseInt(state.validDate.years) > date.getFullYear() 
      if (_years) {
        state.validDate.errorMonths = (0 < parseInt(months) && parseInt(months) < 13) ?   true : false 
      } else {
        const currentMonth = new Date().getMonth()
        state.validDate.errorMonths = (currentMonth < parseInt(months) && parseInt(months) < 13) ?   true : false 
      }
    },
    saveDays(state, action: PayloadAction<string>) {
      // const date = new Date()
      const days = action.payload
      state.validDate.days = days
      // const years = state.validDate.years
      // const months = state.validDate.months

      // const lastDay = new Date(parseInt(years), parseInt(months), 0).getDate()
      

   
      

      // if (days.length === 0) {
      //   state.validDate.errorDays = false
      //   return
      // }

      // const _years:boolean = parseInt(state.validDate.years) > date.getFullYear() 
      // const _months: boolean = (parseInt(state.validDate.months) - 1) > date.getMonth()
      // const _checkDate: boolean = _years || _months
      // if (_checkDate) {
      //   state.validDate.errorDays = (parseInt(days) <= lastDay) ?   true : false 
      // } else {
      //   const currentDay = new Date().getDate()
      //   state.validDate.errorDays = (currentDay<=parseInt(days) && parseInt(days) <= lastDay) ?   true : false 
      // }

    },
    checkDays(state) {
      const date = new Date()

      const days = state.validDate.days
      const years = state.validDate.years
      const months = state.validDate.months

      const lastDay = new Date(parseInt(years), parseInt(months), 0).getDate()
      
      if (days.length === 0) {
        state.validDate.errorDays = false
        return
      }

      const _years:boolean = parseInt(state.validDate.years) > date.getFullYear() 
      const _months: boolean = (parseInt(state.validDate.months) - 1) > date.getMonth()
      const _checkDate: boolean = _years || _months
      if (_checkDate) {
        state.validDate.errorDays = (parseInt(days) <= lastDay) ?   true : false 
      } else {
        const currentDay = new Date().getDate()
        state.validDate.errorDays = (currentDay<=parseInt(days) && parseInt(days) <= lastDay) ?   true : false 
      }
    },
    saveHours(state, action: PayloadAction<string>) {
      // const date = new Date()

      const hours = action.payload
      state.validDate.hours = hours

      // if (hours.length === 0) {
      //   state.validDate.errorHours = false
      //   return
      // }

      // const _years:boolean = parseInt(state.validDate.years) > date.getFullYear() 
      // const _months:boolean = (parseInt(state.validDate.months) -1) > date.getMonth() 
      // const _days:boolean = parseInt(state.validDate.days) > date.getDate() 
      // const _checkDate:boolean = _years || _months || _days
      
      // if (_checkDate) {
      //   state.validDate.errorHours = (parseInt(hours) < 24) ?   true : false 
      // } else {
      //   const currentHours = new Date().getHours()
      //   state.validDate.errorHours = (currentHours <= parseInt(hours) && parseInt(hours) < 24) ?   true : false 
      // }

    },
    checkHours(state) {
      const date = new Date()
      const hours = state.validDate.hours

      if (hours.length === 0) {
        state.validDate.errorHours = false
        return
      }

      const _years:boolean = parseInt(state.validDate.years) > date.getFullYear() 
      const _months:boolean = (parseInt(state.validDate.months) -1) > date.getMonth() 
      const _days:boolean = parseInt(state.validDate.days) > date.getDate() 
      const _checkDate:boolean = _years || _months || _days
      
      if (_checkDate) {
        state.validDate.errorHours = (parseInt(hours) < 24) ?   true : false 
      } else {
        const currentHours = new Date().getHours()
        state.validDate.errorHours = (currentHours <= parseInt(hours) && parseInt(hours) < 24) ?   true : false 
      }

    },
    saveMinutes(state, action: PayloadAction<string>) {
      // const date = new Date()
      const minutes = action.payload
      state.validDate.minutes = minutes

      

      // if (minutes.length === 0) {
      //   state.validDate.errorMinutes = false
      //   return
      // }

      // const _years:boolean = parseInt(state.validDate.years) > date.getFullYear() 
      // const _months:boolean = (parseInt(state.validDate.months) -1) > date.getMonth() 
      // const _days:boolean = parseInt(state.validDate.days) > date.getDate() 
      // const _hours:boolean = parseInt(state.validDate.hours) > date.getHours() 
      // const _checkDate:boolean = _years || _months || _days || _hours

      // if (_checkDate) {
      //   state.validDate.errorMinutes = (parseInt(minutes) < 60) ?   true : false 
      // } else {
      //   const currentMinutes = new Date().getMinutes()
      //   state.validDate.errorMinutes = (currentMinutes <= parseInt(minutes) && parseInt(minutes) < 60) ?   true : false 
      // }
      
    },
    checkMinutes(state) {
      const date = new Date()
      const minutes = state.validDate.minutes

      if (minutes.length === 0) {
        state.validDate.errorMinutes = false
        return
      }

      const _years:boolean = parseInt(state.validDate.years) > date.getFullYear() 
      const _months:boolean = (parseInt(state.validDate.months) -1) > date.getMonth() 
      const _days:boolean = parseInt(state.validDate.days) > date.getDate() 
      const _hours:boolean = parseInt(state.validDate.hours) > date.getHours() 
      const _checkDate:boolean = _years || _months || _days || _hours

      if (_checkDate) {
        state.validDate.errorMinutes = (parseInt(minutes) < 60) ?   true : false 
      } else {
        const currentMinutes = new Date().getMinutes()
        state.validDate.errorMinutes = (currentMinutes <= parseInt(minutes) && parseInt(minutes) < 60) ?   true : false 
      }
    },
    checkDate(state) {
      let years = state.validDate.years
      let months = state.validDate.months
      let days = state.validDate.days
      let hours = state.validDate.hours
      let minutes = state.validDate.minutes

      
      const lastDay = new Date(parseInt(years), parseInt(months) , 0).getDate()
      state.validDate.errorDays = (parseInt(days) <= lastDay) ?   true : false            // additional check for a days in month, it needs for it because if user will change month date after change 'days' auto correct won't work
          
      const errorYears = state.validDate.errorYears
      const errorMonths = state.validDate.errorMonths
      const errorDays = state.validDate.errorDays
      const errorHours = state.validDate.errorHours
      const errorMinutes = state.validDate.errorMinutes

      let strMonth = String(parseInt(months) - 1)
      strMonth = (strMonth.length < 2) ? "0" + strMonth : strMonth
      const strDays = (days.length < 2) ? "0" + days : days
      const strHours = (hours.length < 2) ? "0" + hours : hours
      const strMinutes = (minutes.length < 2) ? "0" + minutes : minutes
      


      const resultError = errorYears && errorMonths && errorDays && errorHours && errorMinutes

      if (resultError) {
        state.validDate.dateUserStatus = true

        const result = {
          years: parseInt(years),
          months: parseInt(months) - 1, // i want to translate value of month to new Date().getMonth() 
          days: parseInt(days),
          hours: parseInt(hours),
          minutes: parseInt(minutes),
          strDate: `${years}-${strMonth}-${strDays}`,
          strTime: `${strHours}:${strMinutes}`,
        }
        state.validDate.dateUser = result
        

        // console.log(result)
      }
    }
  }
})

export default dateSlice.reducer
export const selectDate = (state:RootState) => state.date
export const {
  getCurrentDate,
  goToRight,
  goToLeft,
  goToday,
  goToMessageDate,
  addToTemporatyStorage,
  changeActivDate,
  getDayTime,
  //===============
  saveYears,
  saveMonths,
  saveDays,
  saveHours,
  saveMinutes,
  checkDate,
  // ============
  checkYears,
  checkMonth,
  checkDays,
  checkHours,
  checkMinutes,
  //=============


} = dateSlice.actions