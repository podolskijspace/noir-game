import Popups from "../popups/Popups";
import Main from "../../pages/main/Main";
import Game from "../../pages/game/Game";
import Players from "../../pages/players/Players";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

function App({}) {


  return (
    <div className="app">
      <Route path="/" exact component={() => <Main/>} />
      <Route path="/players" exact component={() => <Players/>} />
      <Route path="/game" exact component={() => <Game/>} />
      <Popups/>
    </div>
  );
}

const mstp = ({}) => {
  return {

  }
}

const mdtp = {

}


export default connect(mstp, mdtp)(App);