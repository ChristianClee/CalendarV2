import React from 'react';
import { ReactComponent as ArrowLeft } from "../../../assets/picture/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../../assets/picture/arrow-right.svg"
import { selectDate } from "../../../redux/slices/dateSlice"
import { useSelector } from 'react-redux';


const Months: React.FC = () => {
  const { currentYear, currentMonth, isBothMonthsInWeek, bothMonthsInWeek } = useSelector(selectDate)
  const month = isBothMonthsInWeek ? bothMonthsInWeek.join(" ") : currentMonth
  // console.log("month", isBothMonthsInWeek)

  return (
    <div className="nav__monthBlock">
      <div className="button29">
        <ArrowLeft />
      </div>
      <div className="nav__month">{month} {currentYear}</div>
      <div className="button29">
        <ArrowRight />
      </div>
    </div>
  );
}
export default Months;