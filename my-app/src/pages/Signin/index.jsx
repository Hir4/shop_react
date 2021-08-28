import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import Server from './../../services/server.js';
import Logo from '../../assets/logo/logo.svg';
import Back from '../../assets/images/back_button.svg';
import './styleSignin.css';


function Signin() {
  const history = useHistory();

  const url = "http://localhost:8080/signin";
  const [signin, setSignin] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    document: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    phone_ddd: "",
    phone_number: ""
  });

  function handleSigninSubmit(formData) {
    formData.preventDefault();
    Server.post(url, {
      email: signin.email,
      password: signin.password,
      first_name: signin.first_name,
      last_name: signin.last_name,
      document: signin.document,
      address: signin.address,
      city: signin.city,
      state: signin.state,
      zip_code: signin.zip_code,
      phone_ddd: signin.phone_ddd,
      phone_number: signin.phone_number,
      creation_date: "NOW()"
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          history.push('/login');
          console.log(res);
          console.log("Signed with success");
        }
      })
      .catch(() => {
        document.getElementById('error-message').textContent = "Check your info again";
        console.log("Error trying to sign in");
      })
  }

  function handleSigninChange(data) {
    const newData = { ...signin };
    newData[data.target.id] = data.target.value;
    setSignin(newData);
  }

  return (
    <div className="container-signin">
      <Link to="/">
        <img id="logo" src={Logo} alt="Shopetronic icon" />
      </Link>
      <div className="forms">
        <h1>Sign In</h1>
        <form id="signin-form" onSubmit={(formData) => handleSigninSubmit(formData)}>
          <input onChange={(data) => handleSigninChange(data)} id="email" value={signin.email} type="email" className="form-control" placeholder="E-mail" required />
          <input onChange={(data) => handleSigninChange(data)} id="password" value={signin.password} type="password" minLength="3" className="form-control" placeholder="Password" required />
          <input onChange={(data) => handleSigninChange(data)} id="first_name" value={signin.first_name} type="text" className="form-control" placeholder="First name" required />
          <input onChange={(data) => handleSigninChange(data)} id="last_name" value={signin.last_name} type="text" className="form-control" placeholder="Last name" required />
          <input onChange={(data) => handleSigninChange(data)} id="document" value={signin.document} type="number" min="11" className="form-control" placeholder="Document" required />
          <input onChange={(data) => handleSigninChange(data)} id="address" value={signin.address} type="text" className="form-control" placeholder="Address" required />
          <input onChange={(data) => handleSigninChange(data)} id="city" value={signin.city} type="text" className="form-control" placeholder="City" required />
          <input onChange={(data) => handleSigninChange(data)} id="state" value={signin.state} type="text" className="form-control" placeholder="State" required />
          <input onChange={(data) => handleSigninChange(data)} id="zip_code" value={signin.zip_code} type="number" maxLength="8" className="form-control" placeholder="Zip code" required />
          <input onChange={(data) => handleSigninChange(data)} id="phone_ddd" value={signin.phone_ddd} type="number" min="2" className="form-control" placeholder="Phone ddd" required />
          <input onChange={(data) => handleSigninChange(data)} id="phone_number" value={signin.phone_number} type="number" minLength="3" className="form-control" placeholder="Phone number" required />
          <button className="btn-signin" type="submit">Sign In</button>
        </form>
        <span><Link to="/login" className="login-button">Login here</Link></span>
        <span id="error-message"></span>
      </div>
      <div className="back-button" onClick={() => window.history.back()}>
        <img id="back-button-img" src={Back} alt="Back button" />
        <span>Back</span>
      </div>

    </div>
  );
}

export default Signin;