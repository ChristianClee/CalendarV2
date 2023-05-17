import React from 'react';


const NumberDays:React.FC = () => {
  return (
    <ul className="nav__dayUl">
      <li>
        <span>1</span>
      </li>
      <li className="active">
        <span>2</span>
      </li>
      <li>
        <span>3</span>
      </li>
      <li>
        <span>4</span>
      </li>
      <li>
        <span>5</span>
      </li>
      <li>
        <span>6</span>
      </li>
      <li>
        <span>7</span>
      </li>
    </ul>
  );
}
export default NumberDays;