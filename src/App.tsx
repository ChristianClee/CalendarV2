import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { useDispatch } from 'react-redux';
import { getCurrentDate, getWeek } from './redux/slices/dateSlice';


function App() {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCurrentDate())
      dispatch(getWeek())
  },[])

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
