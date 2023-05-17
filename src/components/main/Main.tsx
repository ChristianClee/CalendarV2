import React from 'react';
import Nav from './Nav'
import Greed from './Greed';
import Buttons from './Buttons';


const Main:React.FC = () => {
  return (
    <main className="main">
      <Nav/>
      <Greed/>
      <Buttons/>
    </main>
  );
}
export default Main;