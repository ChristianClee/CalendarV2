import React from 'react';
import { useDispatch } from 'react-redux';


type ButtonType = {
  text: string;
  func?: () => void;
}

const Button: React.FC<ButtonType> = ({ text, func }) => {
  const dispatch = useDispatch()
  function onclick(event: React.MouseEvent) {
    event.preventDefault()
    //@ts-ignore
    dispatch(func())
  }
  return (
    <button
      className='eventMessageComponent-buttons__button'
      onClick={onclick}
    >
      {text}
    </button>
  );
}
export default Button;