import React, {useRef, useEffect} from 'react';
import Time from './Time';
import Events from './Events'
import Grid from './Grid';



type GreedProps = {
  refdate: number; 
  func: (child: {current: HTMLDivElement})=>void
} 
const Greed: React.FC<GreedProps> = ({ refdate, func }) => {

  
  const childRef = useRef<HTMLDivElement>(null!)
  func(childRef)
  
  return (
    <div className='greed' data-key={refdate} ref={childRef}

    >

      <div className="greed__item">
        <Time position="greed__time-left" />
        <Events />
        <Grid />
        <Time position="greed__time-right" />
      </div>
    </div>
  );
}
export default Greed;