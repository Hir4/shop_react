import React from 'react';
import Logo from '../../assets/logo/logo.svg';
import Back from '../../assets/images/back_button.svg';
import './index.css';

function Login() {
  return (
    <container>
        <img id="logo" src={Logo} alt="Shopetronic icon" />
        <div className="forms">
          <h1>Login</h1>
          <input type="text" className="form-control" placeholder="E-mail" required/>
          <input type="password" className="form-control" placeholder="Password" required/>
          <button className="btn-login">Login</button>
          <span>Sign In here</span>
      </div>
      <div className="back-button">
      <img id="back-button-img" src={Back} alt="Back button" />
      <span>Back</span>
      </div>

    </container>
  );
}

export default Login;