import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import Main from '../pages/Main'
function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
