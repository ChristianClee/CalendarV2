import React from 'react';
// import { checkDate, goToMessageDate, selectDate } from '../../../redux/slices/date2Slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';




const ButtonAssign: React.FC = () => {
  // const { validDate } = useSelector(selectDate)
  // const { dateUserStatus } = validDate


  const dispatch = useDispatch()
  function onclick(event: React.MouseEvent) {
    // dispatch(checkDate())
    // dispatch(goToMessageDate())
    // dispatch(addTracker())
  }

  return (
    <button
      className='eventMessageComponent-buttons__button'
      onClick={onclick}
    >
      assign
    </button>
  );
}
export default ButtonAssign;