import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/index.jsx"
import Signin from "./pages/Signin/index.jsx"
import Home from "./pages/Home/index.jsx"
import Product from "./pages/Product/index.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Route component = { Home } path="/" exact/>
           <Route component = { Login }  path="/login" exact/>
           <Route component = { Signin }  path="/signin" exact/>
           <Route component = { Product } path="/product" exact/>
       </BrowserRouter>
    </div>
  );
}

export default App;
