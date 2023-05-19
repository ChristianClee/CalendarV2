import React, { useEffect, useState } from 'react';
import InnerSquare from './elements/InnerSquare';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate, add } from '../../../redux/slices/dateSlice'
// @ts-ignore
import lodash from 'lodash'

const Events: React.FC = () => {
  const dispatch = useDispatch()
  const { listOfWeekDays, listOfAllWeeks, } = useSelector(selectDate)
  const [gridList, setGredList] = useState<string[]>([])
  // console.log(gridList)
  const flag = (listOfWeekDays.length === 7) ? true : false
 

  
useEffect(() => {
    if (listOfWeekDays.length > 1) {
      if (listOfAllWeeks.length === 0) {
        const value = createList(listOfWeekDays)
        setGredList(value)
        const arr: any = {}
        arr[listOfWeekDays[0]] = value   // !!! danger zone
        dispatch(add(arr))
        console.log("listOfAllWeeks ", listOfAllWeeks)
      }

      else if (!(listOfAllWeeks.map(item => Object.keys(item))).flat(2).includes(listOfWeekDays[0])){
        const value = createList(listOfWeekDays)
        setGredList(value)
        const arr: any = {}
        arr[listOfWeekDays[0]] = value
        dispatch(add(arr))
        console.log("listOfAllWeeks ", listOfAllWeeks)
      }
      else {
        for (let i of listOfAllWeeks) {
          if (Object.keys(i)[0] == listOfWeekDays[0]) {
            // console.log(...Object.values(i))
            // @ts-ignore
            setGredList(...Object.values(i))
            break
          }
        }
      }
// [{key:dfdfd,value:[dfgfgd]}]
      
    }
   
  }, [listOfWeekDays])

  function createList(listOfWeekDays:string[]):string[] {
    let innerSquares = []
    for (let i = 1; i < 24; i++) { // this double cycle generates array whis unique value, each value has '2023-05-18-Thursday-01'
      for (let j = 0; j < 7; j++) {
        const timeNumber = (String(i).length < 2) ? "0" + String(i) + "-f" : String(i) + "-f"
        innerSquares.push(`${listOfWeekDays[j]}-${timeNumber}`)
      }
    }
    return innerSquares
  }
  function makeTrack() {
    
  }
  return (
    <div className="greed__events">
      {flag &&
        gridList.map(item => <InnerSquare key={item} value={item} />)
      }
    </div>
  );
}

export default Events;