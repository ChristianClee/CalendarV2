import React, { useEffect, useState } from 'react';
import InnerSquare from './elements/InnerSquare';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate, addToTemporatyStorage, changeActivDate, } from '../../../redux/slices/dateSlice';
import { DownLoadedWeek } from '../../../redux/slices/dateSlice';
// @ts-ignore
import lodash from 'lodash'

const Events: React.FC = () => {
  const dispatch = useDispatch()
  const { listOfWeekDays, listOfAllWeeks, temporatyStorageWeek, currentPossition, validDate } = useSelector(selectDate)
  const { newDate, dateUser } = validDate
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



  useEffect(() => {
    if (newDate === 0) return
    // @ts-ignore
    const result = temporatyStorageWeek.value.includes("2023-04-29-Mond-01-f")
    console.log(temporatyStorageWeek.value)

  }, [newDate])


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
  function makeTrack(index: number, active: string) { // this finction change conditional of current square after tauching 
    const clon = JSON.parse(JSON.stringify(temporatyStorageWeek))
    clon.value[index] = active
    // console.log(clon)
    dispatch(addToTemporatyStorage(clon)) // it saves changes it to temporaty Storage

    dispatch(changeActivDate(active.slice(0, 15))) // it change active date
  }

  return (

    <div className="greed__events">
      {Boolean(temporatyStorageWeek.value.length) &&

        temporatyStorageWeek.value.map((item, index: number) => <InnerSquare key={item} value={item} func={makeTrack} index={index} />)
      }
    </div>
  );
}

export default Events;