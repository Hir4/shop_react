import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login/index.jsx";
import Signin from "../pages/Signin/index.jsx";
import Home from "../pages/Home/index.jsx";
import Product from "../pages/Product/index.jsx";
import Public from '../Routes/Public.jsx';
// import Private from '../Routes/Private.jsx';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Public restricted={false} component={Home} path="/" exact />
        <Public restricted={true} component={Login} path="/login" exact />
        <Public restricted={true} component={Signin} path="/signin" exact />
        <Public restricted={false} component={Product} path="/product/:product_id" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
