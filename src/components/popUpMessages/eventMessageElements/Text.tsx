import React from 'react';
import { useGetDayTime } from '../../../ulilits/time';

const Text: React.FC = () => {

  const dayTime = useGetDayTime()
  return (
    <div className='eventMessageComponent-text'>
      {dayTime}
    </div>
  );
}
export default Text;