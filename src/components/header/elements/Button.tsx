import React from 'react';


const Button: React.FC = () => {
  
  return (
    <div
      onClick={()=>{console.log("hello")  }}
      className="header__img"
    >
      +
    </div>
  );
}
export default Button;