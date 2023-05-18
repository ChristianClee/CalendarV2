import React from 'react';
import Li from './elements/Li';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/slices/dateSlice';

const NumberDays: React.FC = () => {
  const { currentDay, listOfWeekDays } = useSelector(selectDate)
  // {listOfWeekDays:[17,18,19,20,21,22,23], }
  // currentDay
  // console.log('currentDay', currentDay)
  // console.log('listOfWeekDays', listOfWeekDays)


  return (
    <ul className="nav__dayUl">
      {listOfWeekDays.map((day, index) => (
        <Li key={index} currentDay={currentDay}>
          {day}
        </Li>
      ))}
     
      
   
    </ul>
  );
}
export default NumberDays;