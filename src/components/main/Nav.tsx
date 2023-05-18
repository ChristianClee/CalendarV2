import React,{useEffect} from 'react';
import WeekDays from './nav/WeekDays';
import NumberDays from './nav/NumberDays';
import Months from './nav/Months';
// import {  useSelector } from 'react-redux';
// import { selectDate } from '../../redux/slices/dateSlice';


const Nav: React.FC = () => {
  // const date = useSelector(selectDate)


  // console.log(date)

  return (
    <nav className="main__nav">
      <div className="nav">
        <WeekDays/>
        <NumberDays/>
        <Months/>
      </div>
    </nav>
  );
}
export default Nav;