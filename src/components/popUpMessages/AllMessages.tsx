import React from 'react';
import Description from './Description';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopUp, showEventMessage } from '../../redux/slices/popUpSlice';
import EventMessage from './EventMessage'
import Text from './eventMessageElements/Text'
import Form from './eventMessageElements/Form';
import Buttons from './eventMessageElements/Buttons';
import BlackFonMessage from './BlackFonMessage';
//@ts-ignore
import { CSSTransition } from 'react-transition-group';

const AllMessages: React.FC = () => {
  const dispatch = useDispatch()
  const { eventMessage, descriptMessage } = useSelector(selectPopUp)
  return (
    <>
      <CSSTransition
        // in={descriptMessage}
        in={false}
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
        timeout={1100}
        classNames="messageButtons"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Buttons />
      </CSSTransition>
    </>
  );
}
export default AllMessages;