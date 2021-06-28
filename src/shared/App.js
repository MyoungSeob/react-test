import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

function App() {
  return (
    <>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Switch></Switch>
        </ConnectedRouter>
      </BrowserRouter>
    </>
  );
}

export default App;
