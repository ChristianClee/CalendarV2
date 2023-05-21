import { selectDate } from '../redux/slices/dateSlice'
import { useSelector } from 'react-redux';

type YearMonthDay = {
  year:string, month:string, day:string
}

export function useGetDayTime():string {
  const { currentDate, currentDayTime } = useSelector(selectDate)
  // console.log(currentDate)

  let month = currentDate.slice(5, 7)
  let monthNumb = parseInt(month) + 1
  month = String(monthNumb)
  month = (month.length < 2) ? "0" + month : month
  const newCurrentDate = currentDate.slice(0,5) + month + currentDate.slice(7,) // todo  this needs to be reduced


  const dayTime = [newCurrentDate.slice(0, 10), currentDayTime].join(" ")
  return dayTime
}

export function useGetDay():YearMonthDay {
  const { currentDate } = useSelector(selectDate)
  const year = currentDate.slice(0, 4)
  let month = currentDate.slice(5, 7)
  let monthNumb = parseInt(month) + 1
  month = String(monthNumb)
  month = (month.length < 2)? "0" + month : month

  const day = currentDate.slice(8, 10)
  return {year, month, day}
}


