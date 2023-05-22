import React, { useEffect } from 'react';
import Time from './greed/Time';
import Events from './greed/Events'
import Grid from './greed/Grid';

import { useSelector } from 'react-redux';
import { selectDate, addToTemporatyStorage, } from '../../redux/slices/dateSlice'


const Greed: React.FC = () => {


  return (
    <div className="main__greed">
      <div className="greed">
        <Time position="greed__time-left" />
        <Events />
        <Grid />
        <Time position="greed__time-right" />
      </div>
    </div>
  );
}
export default Greed;