import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../../redux/slices/dateSlice'

type InSqProps = {
  value: string;
  index: number;
  func: (index: number, active: string) => void;
  func2: (index: number, active: string) => void;
}

const InnerSquare: React.FC<InSqProps> = ({ value, func, func2, index }) => {


  const { validDate } = useSelector(selectDate)
  const { dateUser } = validDate
  const { strDate, strTime } = dateUser
  if (
    strDate == value.slice(0, 10)
    && strTime.slice(0, 2) === value.slice(16, 18)
    && value.slice(-1) === "f"
  ) {
    value = value.slice(0, -1) + "t"
    func2(index, value)
  }

  const flaf2 = value.slice(-1)



  return (
    <div
      className={(flaf2 == "t") ? ['greed__event', 'active'].join(" ") : 'greed__event'}
      onClick={() => {
        if (flaf2 == "t") {
          value = value.slice(0, -1) + "f"
          func(index, value)
          console.log("false")
        }
        if (flaf2 == "f") {
          value = value.slice(0, -1) + "t"
          func(index, value)
          console.log("true")
        }
        console.log(value)
      }}
    ></div>
  );
}
export default InnerSquare;