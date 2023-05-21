import React from 'react';
import {showEventMessage} from '../../../redux/slices/popUpSlice' 
import { useDispatch } from 'react-redux'; 

const Button: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => {
        dispatch(showEventMessage()) // shows pop up message
      }}
      className="header__img"
    >
      +
    </div>
  );
}
export default Button;