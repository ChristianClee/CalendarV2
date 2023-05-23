import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideDescriptMessage, } from "../../redux/slices/popUpSlice"

const Description: React.FC = () => {
  const dispatch = useDispatch()


  const [burger, setBurger] = useState(false)
  return (
    <div className="description">
      <div className='description__container'>
        <div className='description__burger-container' >
          <div
            className={(burger) ? "description__burger checked" : "description__burger"}
            onClick={() => {
              setBurger(true)
              dispatch(hideDescriptMessage())
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="description__boby">

          <div className ="description__inner-body">
            <div className="description__title">Календарь</div>
            
            <div className="description__subtitle">тестовая работа</div>
            <div className="description__text">
              эта работа предназначенна для мобильной версии,
              откройте её через телефон или уменьшить
              ширину окна браузера
            </div>

            
            <ul> уже реализованно:
              <li>открытие новых страниц (пока от кнопок)</li>
              <li>все даты генерируются автоматически</li>
              <li>правильность дат гарантированна</li>
              <li>события сохраняются на любых страницах</li>
              <li>валидация при вводе с PoPUp message</li>
              <li>валидация не позволит ввести прошедшую дату </li>
              <li>события сохраняются как от касания так и от ввода из PopUp</li>
            </ul>
          </div>
          <div className="description__text">
            работа не окончательна, находится в разработке и постоянно дополняется
          </div>
          

        </div>

      </div>
      
    </div>

  );
}
export default Description;