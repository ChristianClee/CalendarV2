import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import EventMessage from './components/popUpMessages/EventMessage'
import Text from './components/popUpMessages/eventMessageElements/Text'
import Form from './components/popUpMessages/eventMessageElements/Form';
import Buttons from './components/popUpMessages/eventMessageElements/Buttons';
//@ts-ignore
import { CSSTransition } from 'react-transition-group';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDate, getDayTime, selectDate } from './redux/slices/dateSlice';
import { selectPopUp, showEventMessage } from './redux/slices/popUpSlice';
import BlackFonMessage from './components/popUpMessages/BlackFonMessage';
import Description from './components/popUpMessages/Description';



function App() {
  const dispatch = useDispatch()
  const { currentPossition } = useSelector(selectDate)
  const { eventMessage, descriptMessage } = useSelector(selectPopUp)



  useEffect(() => {
    dispatch(getCurrentDate())
    dispatch(getDayTime())
  }, [currentPossition])

  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>


      <CSSTransition
        // in={descriptMessage}
        in={true}
        timeout={1200}
        classNames="descriptMessage"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Description />
      </CSSTransition>









      <CSSTransition
        in={eventMessage}
        timeout={800}
        classNames="blackFonMessage"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <BlackFonMessage />
      </CSSTransition>


      <CSSTransition
        in={eventMessage}
        timeout={900}
        classNames="messageWindow"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <EventMessage />
      </CSSTransition>

      <CSSTransition
        in={eventMessage}
        timeout={800}
        classNames="messageText"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Text />
      </CSSTransition>

      <CSSTransition
        in={eventMessage}
        timeout={700}
        classNames="messageInput"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Form />
      </CSSTransition>

      <CSSTransition
        in={eventMessage}
        timeout={900}
        classNames="messageButtons"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Buttons />
      </CSSTransition>

    </>

  );
}

export default App;
