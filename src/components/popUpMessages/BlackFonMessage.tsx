import React from 'react';
import { hideEventMessage } from '../../redux/slices/popUpSlice';
import { useDispatch } from 'react-redux';

const BlackFonMessage: React.FC = () => {
  const dispatch =  useDispatch()
  return (
    <div
      className='blackFonMessage'
      onClick={() => dispatch(hideEventMessage())}
    >

    </div>
  );
}
export default BlackFonMessage;