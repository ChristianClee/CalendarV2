import React from 'react';
import Nav from './Nav'
import MainGreed from './MainGreed';
import Buttons from './Buttons';


const Main:React.FC = () => {
  return (
    <main className="main">
      <Nav/>
      <MainGreed />
      <Buttons/>
    </main>
  );
}
export default Main;