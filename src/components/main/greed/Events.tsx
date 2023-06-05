import React from 'react';
import InnerSquare from './elements/InnerSquare';


const Events: React.FC = () => {

  return (

    <div className="greed__events">
      {
        new Array(168).fill("").map((item, index: number) => <InnerSquare key={index}/>)
      }
     </div>
 
  );
}

export default Events;