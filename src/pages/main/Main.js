import Button from "../../components/button/Button";
import {withRouter} from "react-router"

const Main = ({history}) => {

  const onGameClick = () => {
    history.push('/players')
  }

  return (
    <div className="main">
      Добро пожаловать на сайт настольной игры Noir.
      В какую из игр вы хотите сыграть?
      <ul className="main__list">
        <li className="main__item">
          <Button text="Игра 1"
                  onClick={onGameClick}
                  mod="main__button"/>
        </li>
        <li className="main__item">
          <Button text="Игра 2"
                  mod="main__button button--disabled"/>
        </li>
        <li className="main__item">
          <Button text="Игра 3"
                  mod="main__button button--disabled"/>
        </li>
      </ul>



    </div>
  )
}

export default withRouter(Main);
