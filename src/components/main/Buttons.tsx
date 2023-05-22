import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goToday, addToTemporatyStorage, selectDate } from '../../redux/slices/dateSlice'
//@ts-ignore
import { CSSTransition } from 'react-transition-group';


const Buttons: React.FC = () => {
  const dispatch = useDispatch()
  const { temporatyStorageWeek } = useSelector(selectDate)
  const buttonStatus = temporatyStorageWeek.value.some(item => item.slice(-1) == "t")

  function onclick() {
    const clon = JSON.parse(JSON.stringify(temporatyStorageWeek))
    const arr = clon.value.map((item: string) => {
      if (item.slice(-1) === "t") {
        return item.slice(0, -1) + "f"
      }
      else return item
    })
    clon.value = arr
    console.log(clon)

    dispatch(addToTemporatyStorage(clon))
  }

  return (
    <div className="main__buttons">
      <div className="main__buttonsContainer">

        <div
          className="button30"
          onClick={() => dispatch(goToday())}
        >
          Today
        </div>



        <CSSTransition
          in={buttonStatus}
          timeout={900}
          classNames="buttonsDelete"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <div
            className="button30"
            onClick={onclick}
          >Delete
          </div>
        </CSSTransition>






      </div>
    </div>
  );
}
export default Buttons;