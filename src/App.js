import React, { useState } from "react";

import useInstaller from "./hooks/useInstaller";
import Menu from "./components/Menu/Menu";
import Hygge from "./containers/Hygge/Hygge";
import Collection from "./containers/Collection/Collection";

const App = () => {
  const [canInstall, installHandler] = useInstaller();
  const [currentPage, setCurrentPage] = useState(<Hygge />);

  const pages = [
    { label: "My hygge board", element: <Hygge /> },
    { label: "My collection", element: <Collection /> },
  ];

  const getPageHandler = (page) => setCurrentPage(page);

  return (
    <>
      <Menu
        canInstall={canInstall}
        install={installHandler}
        pages={pages}
        getPage={getPageHandler}
      />
      {currentPage}
    </>
  );
};

export default App;
