import React from 'react';
import { ReactComponent as ArrowLeft } from "../../assets/picture/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../assets/picture/arrow-right.svg"


const Main:React.FC = () => {
  return (
    <main className="main">
      <nav className="main__nav">
        <div className="nav">
          <ul className="nav__weekUl">
            <li>
              Mo
            </li>
            <li>
              Tu
            </li>
            <li>
              We
            </li>
            <li>
              Th
            </li>
            <li>
              Fr
            </li>
            <li>
              St
            </li>
            <li>
              Su
            </li>
          </ul>
          <ul className="nav__dayUl">
            <li>
              <span>1</span>
            </li>
            <li className="active">
              <span>2</span>
            </li>
            <li>
              <span>3</span>
            </li>
            <li>
              <span>4</span>
            </li>
            <li>
              <span>5</span>
            </li>
            <li>
              <span>6</span>
            </li>
            <li>
              <span>7</span>
            </li>
          </ul>
          <div className="nav__monthBlock">
            <div className="button29">
              <ArrowLeft />
            </div>
            <div className="nav__month">Март 2023</div>
            <div className="button29">
              <ArrowRight />
            </div>
          </div>
        </div>
      </nav>
      <div className="main__greed">
        <div className="greed">
          <div className="greed__time">
            <div>09:00</div>
            <div>10:00</div>
            <div>11:00</div>
            <div>12:00</div>
            <div>13:00</div>
            <div>14:00</div>
            <div>15:00</div>
            <div>16:00</div>
            <div>17:00</div>
            <div>18:00</div>
            <div>19:00</div>
            <div>20:00</div>
          </div>
          <div className="greed__events">
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
            <div className="greed__event"></div>
          </div>
          <div className="greed__gorizontal">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="greed__vertical">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>


      </div>

      <div className="main__buttons">
        <div className="button30">Today</div>
        <div className="button30">Delete</div>
      </div>
    </main>
  );
}
export default Main;