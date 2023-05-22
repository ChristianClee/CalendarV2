import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../../redux/slices/dateSlice'

type InSqProps = {
  value: string;
  index: number;
  func: (index: number, active: string) => void;
}

const InnerSquare: React.FC<InSqProps> = ({ value, func, index }) => {
  const [flag, setFlag] = useState(false)

  const { validDate } = useSelector(selectDate)
  const { dateUser } = validDate
  const { strDate, strTime } = dateUser

  value = (strDate == value.slice(0, 10) && strTime.slice(0, 2) == value.slice(16, 18)) ? value = value.slice(-1) + "t" : value
  const flaf2 = value.slice(-1)

  console.log(value)


  return (
    <div
      className={(flag || flaf2 == "t") ? ['greed__event', 'active'].join(" ") : 'greed__event'}
      onClick={() => {
        setFlag(true)
        value = value.slice(0, -1) + "t"
        func(index, value)
      }}
    ></div>
  );
}
export default InnerSquare;