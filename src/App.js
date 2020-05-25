import React, { useState, useEffect } from "react";

import css from "./App.module.css";
import downloadIcon from "./assets/download.png";
import Hygge from "./containers/Hygge";

const App = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", getInstallPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", getInstallPrompt);
    };
  }, []);

  const getInstallPrompt = (event) => {
    event.preventDefault();
    setDeferredPrompt(event);
    return false;
  };

  const promptForInstallHandler = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setDeferredPrompt(null);
    }
  };

  let downloadBtn = null;
  if (deferredPrompt) {
    downloadBtn = (
      <button className={css.DownloadBtn} onClick={promptForInstallHandler}>
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
