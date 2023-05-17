import React from 'react';
import { ReactComponent as ArrowLeft } from "../../../assets/picture/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../../assets/picture/arrow-right.svg"


const Months:React.FC = () => {
  return (
    <div className="nav__monthBlock">
      <div className="button29">
        <ArrowLeft />
      </div>
      <div className="nav__month">Март 2023</div>
      <div className="button29">
        <ArrowRight />
      </div>
    </div>
  );
}
export default Months;