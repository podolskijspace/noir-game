import Popups from "../popups/Popups";
import {connect} from "react-redux";

function App({}) {


  return (
    <div className="app">

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