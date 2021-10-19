import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import {withRouter} from "react-router"

const Players = ({history}) => {
  const onGameStart = () => {
    history.push('/game')
  }

  return (
    <div className="players">
      Введите имена игроков
      В этой игре доступно 3-5 игроков
      <ul className="players__list-input">
        <li className="players__item-input">
          <Input mod="players__input"/>
        </li>
        <li className="players__item-input">
          <Input mod="players__input"/>
        </li>
        <li className="players__item-input">
          <Input mod="players__input"/>
        </li>
      </ul>
      <ul className="players__list-button">
        <li className="players__item">
          <Button text="Удалить игрока"/>
        </li>
        <li className="players__item">
          <Button text="Добавить игрока"/>
        </li>
        <li className="players__item">
          <Button text="Начать игру"
                  onClick={onGameStart}/>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Players);
