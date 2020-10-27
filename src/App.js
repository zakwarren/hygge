import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import useInstaller from "./hooks/useInstaller";
import Menu from "./containers/Menu/Menu";
import Hygge from "./containers/Hygge/Hygge";
import Collection from "./containers/Collection/Collection";

const App = () => {
  const [canInstall, installHandler] = useInstaller();

  const routes = (
    <Switch>
      <Route path="/collection" component={Collection} />
      <Route path="/" exact component={Hygge} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <>
      <Menu canInstall={canInstall} install={installHandler} />
      {routes}
    </>
  );
};

export default App;
