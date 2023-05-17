import React from 'react';
import WeekDays from './nav/WeekDays';
import NumberDays from './nav/NumberDays';
import Months from './nav/Months';


const Nav:React.FC = () => {
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