import React from 'react';


interface LiProps {
  children: string;
  currentDay: string;
  lastActivDate: string;
}

const Li: React.FC<LiProps> = ({ children, currentDay, lastActivDate }) => {

  const activeCurrent = (currentDay === children) ? "active" : ""
  const activeLastDate = (lastActivDate === children) ? "active2" : ""
  return (
    <li className={[activeCurrent, activeLastDate].join(" ")}>
      <span>{children.slice(8,10)}</span>
    </li>
  );
}
export default Li;