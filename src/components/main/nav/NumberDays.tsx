import React from 'react';
import Li from './elements/Li';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/slices/dateSlice';

const NumberDays: React.FC = () => {
  
  const { currentDate, listOfWeekDays } = useSelector(selectDate)
  // console.log("currentDate ", currentDate.slice(8,10))
  // console.log("listOfWeekDays ", listOfWeekDays)

  return (
    <ul className="nav__dayUl">
      {listOfWeekDays.map((day) => (
        <Li key={day} currentDay={currentDate}>
          {day}
        </Li>
      ))}
    </ul>
  );
}
export default NumberDays;