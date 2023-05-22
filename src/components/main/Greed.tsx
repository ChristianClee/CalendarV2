import React, { useEffect } from 'react';
import Time from './greed/Time';
import Events from './greed/Events'
import Grid from './greed/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { selectDate, addToTemporatyStorage, } from '../../redux/slices/dateSlice'


const Greed: React.FC = () => {
  const dispatch = useDispatch()
  const { listOfWeekDays, listOfAllWeeks, temporatyStorageWeek, currentPossition, validDate } = useSelector(selectDate)
  const { dateUser } = validDate
  // console.log(dateUser)

  useEffect(() => {
    if (listOfWeekDays.length === 7) { // it cheks on empty WeekDays's list, it needs because react launch precheking code befor main launch 
      if (listOfAllWeeks.length === 0) {   // it addes new week immedeately if AllWeeks's list is empty
        const value = createList(listOfWeekDays)
        const week = { "uniqKey": listOfWeekDays[0], "value": value }
        dispatch(addToTemporatyStorage(week))

        // console.log("listOfAllWeeks ", listOfAllWeeks)
      }
      // @ts-ignore   I want to use 'findLast' method because it is razor then 'find' in this case, but TS doesn't allow me do it
      else if (!listOfAllWeeks.findLast((item: DownLoadedWeek) => item.uniqKey === listOfWeekDays[0])) { // it searches WeekDays in AllWeeks and if it hasn't done neccessary value it creates new one and adds it to rest 
        const value = createList(listOfWeekDays)                        //       todo you can improve it
        const week = { "uniqKey": listOfWeekDays[0], "value": value }
        dispatch(addToTemporatyStorage(week))
        // console.log("listOfAllWeeks ", listOfAllWeeks)
      }
      else {
        //@ts-ignore 
        const week = listOfAllWeeks.findLast((item: DownLoadedWeek) => item.uniqKey === listOfWeekDays[0])
        //@ts-ignore    here won't be undefind , I checked it above #1 in 'else if' block
        dispatch(addToTemporatyStorage(week))
        // setGredList(week)

      }
    }
    // console.log("currentPossition ", currentPossition)
  }, [listOfWeekDays])
  function createList(listOfWeekDays: string[]): string[] { // this function create new list 
    let innerSquares = []
    for (let i = 1; i < 24; i++) { // this double cycle generates array with unique value, each value has '2023-05-18-Thur-01'
      for (let j = 0; j < 7; j++) {
        const timeNumber = (String(i).length < 2) ? "0" + String(i) + "-f" : String(i) + "-f"
        // console.log(`${listOfWeekDays[j]}-${timeNumber}`)
        innerSquares.push(`${listOfWeekDays[j]}-${timeNumber}`)
      }
    }
    return innerSquares
  }
  return (
    <div className="main__greed">
      <div className="greed">
        <Time position="greed__time-left" />
        <Events />
        <Grid />
        <Time position="greed__time-right" />
      </div>
    </div>
  );
}
export default Greed;