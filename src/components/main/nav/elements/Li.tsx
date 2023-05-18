import React from 'react';

interface LiProps {
  children: string;
  currentDay: string;
}

const Li: React.FC<LiProps> = ({children, currentDay}) => {
  return (
    <li className={currentDay === children? "active" : ""}>
      <span>{children.slice(8,10)}</span>
    </li>
  );
}
export default Li;