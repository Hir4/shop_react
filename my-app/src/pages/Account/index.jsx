import React from 'react';
import { useHistory } from "react-router-dom";
import jwt from 'jsonwebtoken';
import HeaderAfterLogin from '../../components/HeaderAfterLogin/index.jsx';
import PersonIcon from '../../assets/images/icon-person.svg';
import Back from '../../assets/images/back_button.svg';
import Server from './../../services/server.js';
import './styleAccount.css';

function Account() {
  const history = useHistory();
  const cookie = document.cookie.split('=')[1];
  const cookieDecoded = jwt.decode(cookie);
  console.log(cookieDecoded);

  const url = "http://localhost:8080/userdelete";

  function handleDeleteAccount(id) {
    Server.post(url, {
      id: id,
      delete_date: "NOW()",
      update_date: "NOW()"
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          document.cookie = "cookieId=;expires=" + new Date().toUTCString() + ";path=/";
          history.push(`/`);
          console.log("Deleted Account")
        }
      })
      .catch(() => {
        // document.getElementById('error-message').textContent = "Check your info again";
        console.log("Error trying to delete")
      })
  }

  return (
    <React.Fragment>
      <HeaderAfterLogin />
      <div className="container-account">
        <div className="container-title-back">
          <div className="back-button" onClick={() => window.history.back()}>
            <img id="back-button-img" src={Back} alt="Back button" />
            <span>Back</span>
          </div>
        </div>
        <h1>Personal Info</h1>
        <img src={PersonIcon} alt="Person icon" />
        <h2>{cookieDecoded.name}</h2>
        <button>Change password</button>
        <button>History</button>
        <button id="delete-account" onClick={() => handleDeleteAccount(cookieDecoded.id)}>Delete account</button>
      </div>
    </React.Fragment >
  );
}

export default Account;