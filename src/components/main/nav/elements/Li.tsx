import React from 'react';


interface LiProps {
  children: string;
}

const Li: React.FC<LiProps> = ({ children}) => {


  return (
    <li className="">
      <span>{children}</span>
    </li>
  );
}
export default Li;