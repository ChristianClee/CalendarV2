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
  const { dateUser } = validDate




  //"2023-04-22-Mond-01-f"

  // useEffect(() => {
  //   if (dateUser.years === 0) return
  //   const { strDate, strTime } = dateUser
  //   const strhour = strTime.slice(0, 2)
  //   // console.log( temporatyStorageWeek.value[0].slice(16, 18))

  //   // @ts-ignore
  //   const result = temporatyStorageWeek.value.some((item) => item.slice(0, 10) === strDate)
  //   if (result) {
  //     let clon = JSON.parse(JSON.stringify(temporatyStorageWeek))
  //     clon.value = clon.value.map((item: string) => {
  //       if (item.slice(0, 10) === strDate && item.slice(16, 18) === strhour) {
  //         return item = item.slice(0, -1) + "t"
  //       } else {
  //         return item
  //       }
  //     })
  //     // console.log('clon ', clon)
  //     // dispatch(addToTemporatyStorage(clon))

  //   }
  //   // console.log("result ", temporatyStorageWeek.value[0].length)
  //   // console.log(strhour)


  // }, [temporatyStorageWeek, dateUser.years])



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