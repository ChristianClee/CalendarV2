import React from 'react';
import Button from './Button';


import { hideEventMessage } from '../../../redux/slices/popUpSlice'
import ButtonAssign from './ButtonAssign';



const Buttons: React.FC = () => {
  // const { year } = useSelector(selectValid())
  return (
    <div className='eventMessageComponent-buttons'>
      <Button text={"cancel"} func={hideEventMessage} />
      {/* <Button text={"assign"} func={checkDate} /> */}
      <ButtonAssign />

    </div>
  );
}
export default Buttons;