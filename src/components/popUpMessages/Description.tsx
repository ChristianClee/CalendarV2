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
            // className="description__burger checked"
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
          <div className="description__title">Календарь</div>
          <div className="description__text">тестовая работа</div>

          <ul>Требования:
            <li>сверстать страницу календаря</li>
            <li>реализовать PopUp окно при нажатии на +</li>
            <li>добавление событий</li>
            <li></li>
            <li></li>

          </ul>

          <ul>Реализованно:
            <li>всё выше перечисленное </li>

            <li>+ открывать новые страницы</li>
            <li>+ все даты генерируются автоматически</li>
            <li>+ правильность дат гарантированна</li>
            <li>+ сохранять события на любых страницах</li>
            <li>+ валидация при вводе с PoPUp</li>
            <li>+ валидация не позволит ввести прошедшую дату </li>
            <li>+ события сохраняются как от касания так и от ввода из PopUp</li>

          </ul>
          <div className="description__text"> Некоторые детали изменены намеренно (например дизайн кнопок).Pixel perfect вроде никто не требовал  </div>

        </div>
      </div>
    </div>

  );
}
export default Description;