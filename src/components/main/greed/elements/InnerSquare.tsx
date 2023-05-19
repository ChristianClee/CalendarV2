import React,{useState} from 'react';

type InSqProps = {
  value: string
}

const InnerSquare: React.FC<InSqProps> = ({ value }) => {
  // console.log(value.slice(-1))

  // const [flag, setFlag] = useState(false)
  const flag = value.slice(-1)
  return (
    <div
      className={(flag == "f") ? ['greed__event', 'active'].join(" ") : 'greed__event' }
      onClick={() => {
        // setFlag(true)
        // value = value.slice(0, -1) + "t"
        // console.log(value.slice(0, -1))
      }}
    ></div>
  );
}
export default InnerSquare;