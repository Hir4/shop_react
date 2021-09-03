import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login/index.jsx";
import Signin from "../pages/Signin/index.jsx";
import Home from "../pages/Home/index.jsx";
import PurchaseHistory from '../pages/History/index.jsx';
import ShoppingCart from '../pages/Cart/index.jsx'; 
import Account from '../pages/Account/index.jsx';
import Product from "../pages/Product/index.jsx";
import SearchProduct from '../pages/SearchProduct/index.jsx';
import Public from '../Routes/Public.jsx';
import Private from '../Routes/Private.jsx';
import CartProvider from '../context/cart.js';

function Routes() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Public restricted={false} component={Home} path="/" exact />
          <Public restricted={true} component={Login} path="/login" exact />
          <Public restricted={true} component={Signin} path="/signin" exact />
          <Public restricted={false} component={Product} path="/product/:product_id" exact />
          <Public restricted={false} component={SearchProduct} path="/searchproduct/:search_product" exact />
          <Public restricted={false} component={ShoppingCart} path="/cart" exact />
          <Private component={Account} path="/account" exact />
          <Private component={PurchaseHistory} path="/history" exact />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default Routes;
