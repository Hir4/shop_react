import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import Server from './../../services/server.js';
import Logo from '../../assets/logo/logo.svg';
import Back from '../../assets/images/back_button.svg';
import './styleLogin.css';


function Login() {
  const history = useHistory();

  const url = "http://localhost:8080/login";
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  function handleLoginSubmit(formData) {
    formData.preventDefault();
    Server.post(url, {
      email: login.email,
      password: login.password
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          document.cookie = "cookieId =" + res.data + ";";
          history.push(`/`);
          console.log("Connected")
        }
      })
      .catch(() => {
        document.getElementById('error-message').textContent = "Check your info again";
        console.log("Error trying to connect")
      })
  }

  function handleLoginChange(data) {
    const newData = { ...login };
    newData[data.target.id] = data.target.value;
    setLogin(newData);
  }

  return (
    <div className="container-login">
      <Link to="/">
        <img id="logo" src={Logo} alt="Shopetronic icon" />
      </Link>
      <div className="forms">
        <h1>Login</h1>
        <form id="login-form" onSubmit={(formData) => handleLoginSubmit(formData)}>
          <input onChange={(data) => handleLoginChange(data)} id="email" value={login.email} type="email" className="form-control" placeholder="E-mail" required />
          <input onChange={(data) => handleLoginChange(data)} id="password" value={login.password} type="password" minLength="3" className="form-control" placeholder="Password" required />
          <button className="btn-login" type="submit">Login</button>
        </form>
        <span><Link to="/signin" className="signin-button">Sign In here</Link></span>
        <span id="error-message"></span>
      </div>
      <div className="back-button" onClick={() => window.history.back()}>
        <img id="back-button-img" src={Back} alt="Back button" />
        <span>Back</span>
      </div>

    </div>
  );
}

export default Login;