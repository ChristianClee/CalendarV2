import React from 'react';
import Button from './elements/Button';



const Header:React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__text">Interview Calendar</div>
        <Button/>
      </div>
    </header>
  );
}
export default Header;