import React, { useEffect, useState } from 'react';
import InnerSquare from './elements/InnerSquare';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate, addToTemporatyStorage, changeActivDate, zerroUserDate } from '../../../redux/slices/dateSlice';
import { DownLoadedWeek } from '../../../redux/slices/dateSlice';
// @ts-ignore
import lodash from 'lodash'

const Events: React.FC = () => {
  const dispatch = useDispatch()
  const { listOfWeekDays, listOfAllWeeks, temporatyStorageWeek, currentPossition, validDate } = useSelector(selectDate)
  const { dateUser } = validDate




  function makeTrack(index: number, active: string) { // this finction change conditional of current square after tauching 
    const clon = JSON.parse(JSON.stringify(temporatyStorageWeek))
    clon.value[index] = active
    dispatch(addToTemporatyStorage(clon)) // it saves changes it to temporaty Storage

    dispatch(changeActivDate(active.slice(0, 15))) // it change active date
  }

  function makeTrackFromMessage(index: number, active: string) {
    const clon = JSON.parse(JSON.stringify(temporatyStorageWeek))
    clon.value[index] = active
    // console.log(clon)
    dispatch(addToTemporatyStorage(clon))
    dispatch(zerroUserDate())
  }

  return (

    <div className="greed__events">
      {Boolean(temporatyStorageWeek.value.length) &&

        temporatyStorageWeek.value.map((item, index: number) => <InnerSquare key={item} value={item} func={makeTrack} func2={makeTrackFromMessage} index={index} />)
      }
    </div>
  );
}

export default Events;