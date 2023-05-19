import React,{useState} from 'react';

type InSqProps = {
  value: string;
  index: number;
  func: (index:number, active: string)=>void;
}

const InnerSquare: React.FC<InSqProps> = ({ value, func, index }) => {


  const [flag, setFlag] = useState(false)
  const flaf2 = value.slice(-1)

  return (
    <div
      className={(flag || flaf2 == "t") ? ['greed__event', 'active'].join(" ") : 'greed__event' }
      onClick={() => {
        setFlag(true)
        value = value.slice(0, -1) + "t"
        func(index, value)
      }}
    ></div>
  );
}
export default InnerSquare;