import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./pages/Login/index.jsx"
import Home from "./pages/Home/index.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Route component = { Home } path="/" exact/>
           <Redirect  from="/home"  to="/" exact/>
           <Route component = { Login }  path="/login" exact/>
       </BrowserRouter>
    </div>
  );
}

export default App;
