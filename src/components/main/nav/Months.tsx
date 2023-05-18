import React from 'react';
import { ReactComponent as ArrowLeft } from "../../../assets/picture/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../../assets/picture/arrow-right.svg"
import { selectDate, goToRight } from "../../../redux/slices/dateSlice"
import { useSelector, useDispatch } from 'react-redux';
import Button from './elements/Button';


const Months: React.FC = () => {
  const dispatch = useDispatch()
  
  function goRight() {
    dispatch(goToRight())
  }
  const { listOfWeekDays, allMonths } = useSelector(selectDate)
  const year: string = listOfWeekDays[0]?.slice(0,4)
  const month: string = allMonths[parseInt(listOfWeekDays[1]?.slice(5, 7))]

  // console.log(year)
  // console.log("month", month)

  return (
    <div className="nav__monthBlock">
      <Button>
        <ArrowLeft />
      </Button>
      <div className="nav__month">{[month, year].join(", ")}</div>
      
      <Button
        func={goRight}
      >
        <ArrowRight />
      </Button>      
    </div>
  );
}
export default Months;