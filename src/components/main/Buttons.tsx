import React from 'react';
import { useDispatch } from 'react-redux';
import { goToday, goToMessageDate } from '../../redux/slices/dateSlice'


const Buttons: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <div className="main__buttons">
      <div className="main__buttonsContainer">

        <div
          className="button30"
          onClick={() => dispatch(goToday())}
        >
          Today
        </div>

        <div className="button30">Delete</div>
      </div>
    </div>
  );
}
export default Buttons;