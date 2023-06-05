import React from 'react';
import Li from './elements/Li';

const NumberDays: React.FC = () => {



  return (
    <ul className="nav__dayUl">
      {new Array(7).fill("1").map((day, index) => (
        <Li key={index} >
          {day}
        </Li>
      ))}
    </ul>
  );
}
export default NumberDays;