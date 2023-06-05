import { forEach } from "lodash";

type WeekFormat = "Mond" | "Tues" | "Wedn" | "Thur" | "Frid" | "Satu" | "Sund"
type Months =  "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"

type YMDWHMnow = {
  year: number;
  month: number;
  day: number;
  hours: number;
  minuets: number;
  weekDay: number;
}
type YMDWHM = {
  year: number;
  month: number;
  day: number;
  weekDay: number;
}
type YMD = {
  year: number;
  month: number;
  day: number;
}
type UniqDay = {
  unicDayString: string;
  uniqDayNumber: number;
}
export type CurrentDay = {
  year:number,
  month: number,
  day: number,
  hours: number,
  minuets: number,
  weekInMonth: number,
  weekDay: WeekFormat,
  currentUniqDay:UniqDay,
}

type day = { key: number, active: boolean, data: { alarm: number | null, message: string } }
export type Week = {key: number, day: day[]}
export type MonthDate = {
  month: Months | "";
  weeks: Week[];
}


export class CalendarDay{
  static weekDays: WeekFormat[] = ["Sund", "Mond", "Tues", "Wedn", "Thur", "Frid", "Satu"]
  static months: Months[] = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
  static date: Date = new Date()

  static getWeekDay(outdate: number = 0) {
    const {weekDay} = this.getYMDWHM(outdate)
    return this.weekDays[weekDay]
  }
  static getZero(numb: string | number): string {
    const str = `${numb}`
    return str.length < 2 ? `0${str}` : str
  }
  static getCurrentDate(): CurrentDay {
    const { year, month, day, hours, minuets } = this.getNowYMDWHM()
    const weekDay = this.getWeekDay()
    const weekInMonth = CalendarMonthDays.orderWeekInMonth()
    return {
      year,
      month,
      day,
      hours,
      minuets,
      weekDay,
      weekInMonth,
      currentUniqDay: this.getUniqDay(),

    }
  }
  static getUniqDayString(outday: number = 0): string {
    const { year, month, day } = this.getYMDWHM(outday)
    const yearStr: string = `${year}`
    let monthStr: string = `${month + 1}`
    let dayStr: string = `${day}`
    let dayWeek: string = this.getWeekDay(outday)
    monthStr = this.getZero(monthStr)
    dayStr = this.getZero(dayStr)
    return `${yearStr}-${monthStr}-${dayStr}-${dayWeek}`
  }
  static getNowYMDWHM(): YMDWHMnow{
    const year: number = this.date.getFullYear()
    const month: number = this.date.getMonth()
    const day: number = this.date.getDate()
    const hours: number = this.date.getHours()
    const minuets: number = this.date.getMinutes()
    const weekDay: number = this.date.getDay()
    return {year,month,day,hours,minuets,weekDay}
  }
  static getYMDWHM(outDay: number = 0): YMDWHM {
    const {year:yearNow,month:monthNow,day:dayNow} = this.getNowYMDWHM()
    const dateSpecified = new Date(yearNow, monthNow, dayNow + outDay)

    const year: number = dateSpecified.getFullYear()
    const month: number = dateSpecified.getMonth()
    const day: number = dateSpecified.getDate()
    const weekDay: number = dateSpecified.getDay()
    return {year,month,day,weekDay}
  }
  static getUniqDayNumber(strDate: string): number {
    const year:string = strDate.slice(0,4)
    let month:string = strDate.slice(5,7)
    const day: string = strDate.slice(8, 10)
    month = this.getZero(parseInt(month)-1) 
    return parseInt(`${year}${month}${day}`)
  }
  static getUniqDay(outDay: number = 0): { uniqDayNumber: number, unicDayString: string } {
    const unicDayString = this.getUniqDayString(outDay)
    const uniqDayNumber = this.getUniqDayNumber(unicDayString)
    return {unicDayString, uniqDayNumber}
  }
  static translateWeekFormat(num: number):number {
    // it translates date to another format starting from monday
    if (num - 1 < 0) return 6
    else return num - 1
  }
  static getUniqString(uniqNumber: number | string):string {
    return (typeof uniqNumber === "number")? String(uniqNumber) : uniqNumber
  }
  static getDateFromUniqDayNumber(uniqNumber: number | string): YMD { //
    let value: string = this.getUniqString(uniqNumber)
    const year:number = parseInt(value.slice(0,4))
    const month:number = parseInt(value.slice(4,6))
    const day:number = parseInt(value.slice(6, 8))
    return {year,month,day}
  }
  static getDayFromDate(uniqNumber: number) {
    // it requires uniqNumber, yhen it terurns the amount of days before or after today
    const { year, month, day } = this.getDateFromUniqDayNumber(uniqNumber)
    const specifiedDate:number = new Date(year, month, day).getTime()
    const different: number = Math.ceil((specifiedDate - Date.now()) / 1000 / 60 / 60 / 24)
    return parseInt(String(different))
  } 
}


export class CalendarWeekDays extends CalendarDay{
  
  static getFirstDayWeek(outDay: number = 0) {
    const { weekDay } = this.getYMDWHM(outDay)
    const weekDayNewFormat = this.translateWeekFormat(weekDay)
    const firstDay = outDay - weekDayNewFormat
    const firstUniqDay = this.getUniqDay(firstDay)
    return firstUniqDay
  }
  static getDayWeek(outDay: number = 0, nextDay: number = 0) {
    const { weekDay } = this.getYMDWHM(outDay)
    const weekDayNewFormat = this.translateWeekFormat(weekDay) 
    const day = outDay - weekDayNewFormat + nextDay
    const uniqDay = this.getUniqDay(day)
    return uniqDay.uniqDayNumber
  }
  static getLastDayWeek(outDay: number = 0) {
    const { weekDay } = this.getYMDWHM(outDay)
    const weekDayNewFormat = this.translateWeekFormat(weekDay)
    const lastDay = (6 + outDay) - weekDayNewFormat
    const lastUniqDay = this.getUniqDay(lastDay)
    return lastUniqDay.uniqDayNumber
  }
  static getDaysWeek(outDay: number = 0) {
    const weekDays = []
    for (let i = 0; i < 7; i++){
      let weekDay = this.getDayWeek(outDay, i)
      weekDays.push(weekDay)
    }
    return weekDays
  }
  // static getDaysWeekAllDate(outDay: number = 0) {
  //   const weekDays = this.getDaysWeek(outDay)
  //   for (let week = 0; week < 7; week ++ ){
  //     for (let hour = 0; hour < 24; hour++){
  //     }
  //   }
  // }
}


export class CalendarMonthDays extends CalendarWeekDays {
  static orderWeekInMonth() {
    // weekInMonth returns position of current week in month
    const firstDayWeek = this.getFirstDayWeek(0).uniqDayNumber
    const daysWeek = this.getMonthWeeks(0)
    if ( !daysWeek.includes(firstDayWeek) ) throw new Error("weekInMonth error")
    const weekInMonth = daysWeek.findIndex((elem: number) => elem === firstDayWeek)
    return weekInMonth
  }
  static getFirstDayMonth(outDay: number = 0) {
    const { day } = this.getYMDWHM(outDay)
    const differentDays = outDay - (day - 1)
    const firstMonthDay = this.getUniqDay(differentDays)
    return firstMonthDay
    
  }
  static getWeekInMonth(outDay: number = 0) {
    const firstDayMonth = this.getFirstDayMonth(outDay)
    const firstDayMonthDaysAgo = this.getDayFromDate(firstDayMonth.uniqDayNumber)
    const { month } = this.getYMDWHM(firstDayMonthDaysAgo)
    let count = 1
    for (let i = 1; i < 7; i++){
      const monday = this.getFirstDayWeek(firstDayMonthDaysAgo + i * 7)
      const { month: checkMonth } = this.getDateFromUniqDayNumber(monday.uniqDayNumber)
      if (month !== checkMonth) break
      count += 1
    }
    return count
  }
  static getMonthWeeks(outDay: number = 0) {
    // it requires day before or after today and returns uniq number of monday of each month, every week is included in month
    const weeks = []
    const amounWeeks = this.getWeekInMonth(outDay)
    const firstDayMonth = this.getFirstDayMonth(outDay)
    const firstDayMonthAgo = this.getDayFromDate(firstDayMonth.uniqDayNumber)
    for (let i = 0; i < amounWeeks; i++){
      const firstDayWeek = this.getFirstDayWeek(firstDayMonthAgo + i * 7)
      weeks.push(firstDayWeek.uniqDayNumber)
    }
    return weeks
  }
  static createWeek(keysWeek: number[]): day[] {
    const arr = []
    for (let i = 0; i < 24; i++){
      for (let j of keysWeek) {
        const data = { alarm: null, message: "" }
        const active = false
        const key = parseInt(`${j}${this.getZero(i)}`)
        const obj = {key, active, data} 
        arr.push(obj)
      }
    }
    return arr
  }
  static getMonthDays(outDay: number = 0):MonthDate {
    const { month: num } = this.getYMDWHM(outDay)
    const month = this.months[num]
    const weeksMonday = this.getMonthWeeks(outDay)
    const weeks = []

    for (let key of weeksMonday) {
      const monday = this.getDayFromDate(key)
      const keysWeek = this.getDaysWeek(monday)
      const day = this.createWeek(keysWeek)
      const week = { key, day }
      weeks.push(week)
    }
    return {month, weeks}
  }
}