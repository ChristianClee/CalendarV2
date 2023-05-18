import React from 'react';


const Button: React.FC<{ children: React.ReactNode, func?: ()=>void  }> = ({children , func}) => {
  return (
    <div
      className="button29"
      onClick={func}
    >
      {children}
    </div>
  );
}
export default Button;