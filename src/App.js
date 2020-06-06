import React from "react";

import css from "./App.module.css";
import useInstaller from "./hooks/useInstaller";
import downloadIcon from "./assets/download.png";
import Hygge from "./containers/Hygge/Hygge";

const App = () => {
  const [canInstall, install] = useInstaller();

  let downloadBtn = null;
  if (canInstall) {
    downloadBtn = (
      <button className={css.DownloadBtn} onClick={install}>
        <img src={downloadIcon} alt="Download" />
      </button>
    );
  }

  return (
    <>
      <Hygge />
      {downloadBtn}
    </>
  );
};

export default App;
