import React from 'react';
import Button from './Button';
import { checkDate, selectValid } from '../../../redux/slices/validSlice';
import { useSelector } from 'react-redux';
import {hideEventMessage} from '../../../redux/slices/popUpSlice'



const Buttons: React.FC = () => {
  // const { year } = useSelector(selectValid())
  return (
    <div className='eventMessageComponent-buttons'>
      <Button text={"cancel"} func={hideEventMessage} />
      <Button text={"assign"} func={checkDate} />
      
    </div>
  );
}
export default Buttons;