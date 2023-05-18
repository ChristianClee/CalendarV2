import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDate, selectDate } from './redux/slices/dateSlice';


function App() {
  const { currentPossition } = useSelector(selectDate)
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCurrentDate())
      // dispatch(getWeek())
    }, [currentPossition])

  return (
    // <div className="App">
      <div className="wrapper">
        <Header/>
        <Main />
        <Footer/>
      </div>
    // {/* </div> */}
  );
}

export default App;
