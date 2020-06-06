import React from "react";

import useInstaller from "./hooks/useInstaller";
import Menu from "./components/Menu/Menu";
import Hygge from "./containers/Hygge/Hygge";

const App = () => {
  const [canInstall, installHandler] = useInstaller();

  return (
    <>
      <Menu canInstall={canInstall} install={installHandler} />
      <Hygge />
    </>
  );
};

export default App;
