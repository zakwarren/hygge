import { useState, useEffect } from "react";

const useInstaller = () => {
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

  return [deferredPrompt !== null, promptForInstallHandler];
};

export default useInstaller;
