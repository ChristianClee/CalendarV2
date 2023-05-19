import React from 'react';
import { ReactComponent as ArrowLeft } from "../../../assets/picture/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../../assets/picture/arrow-right.svg"
import { selectDate, goToRight, goToLeft } from "../../../redux/slices/dateSlice"
import { useSelector, useDispatch } from 'react-redux';
import Button from './elements/Button';
// @ts-ignore
import lodash from 'lodash'


const Months: React.FC = () => {
  const dispatch = useDispatch()
  
  function goRight() {
    dispatch(goToRight())
  }
  function goLeft() {
    dispatch(goToLeft())
  }
  const { listOfWeekDays, allMonths } = useSelector(selectDate)

  const years: string[] = lodash.uniq( // it contains years in one week
    listOfWeekDays.map((item) =>
      item.slice(0, 4))
  )

  const indexsMonth: number[] = lodash.uniq( // it contains indexes of months in one week 
    listOfWeekDays.map((item) =>
      parseInt(
        item.slice(5, 7)))
  )
  const months: string[] = indexsMonth.map(item => allMonths[item]) // create months from indexes of months

  

    

  return (
    <div className="nav__monthBlock">
      <Button
        func={goLeft}
      >
        <ArrowLeft />
      </Button>
      <div className="nav__month">{months.concat(years).join(" ")}</div>
      
      <Button
        func={goRight}
      >
        <ArrowRight />
      </Button>      
    </div>
  );
}
export default Months;