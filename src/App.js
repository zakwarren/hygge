import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import css from "./App.module.css";
import { useInstaller, useLoadData } from "./hooks/index";
import Menu from "./containers/Menu/Menu";
import logo from "./assets/snowflake.png";
import Hygge from "./containers/Hygge/Hygge";
import Collection from "./containers/Collection/Collection";
import Category from "./containers/Category/Category";
import AddCategory from "./containers/AddCategory/AddCategory";
import AddImage from "./containers/AddImage/AddImage";

const App = () => {
  const [canInstall, installHandler] = useInstaller();
  useLoadData();

  const routes = (
    <Switch>
      <Route path="/collection/add" exact component={AddCategory} />
      <Route path="/collection/:category" component={Category} />
      <Route path="/collection" exact component={Collection} />
      <Route path="/add" exact component={AddImage} />
      <Route path="/" exact component={Hygge} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <>
      <Menu canInstall={canInstall} install={installHandler} />
      <img className={css.Logo} src={logo} alt="Logo" />
      {routes}
      <ToastContainer
        className={css.Toastit}
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
