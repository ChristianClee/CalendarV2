import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import AllMessages from './components/popUpMessages/AllMessages';
import { useActions } from './redux/reduxHooks';




function App() {
  // const { getCurrentDate, getCurrentMonthDate, } = useActions()

  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
      <AllMessages/> 
    </>

  );
}

export default App;
