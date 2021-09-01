import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import jwt from 'jsonwebtoken';
import HeaderAfterLogin from '../../components/HeaderAfterLogin/index.jsx';
import PersonIcon from '../../assets/images/icon-person.svg';
import Back from '../../assets/images/back_button.svg';
import CheckIcon from '../../assets/images/check.png';
import Server from './../../services/server.js';
import './styleAccount.css';

function Account() {
  const history = useHistory();
  const cookie = document.cookie.split('=')[1];
  const cookieDecoded = jwt.decode(cookie);
  // console.log(cookieDecoded);

  const url = "http://localhost:8080/userdelete";
  const urlViewSale = "http://localhost:8080/viewsale";

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

  Server.post(urlViewSale);

  const urlPassword = "http://localhost:8080/userupdate";
  const [newPassword, setNewPassword] = useState({
    new_password: "",
    update_date: "NOW()"
  });

  function handleUpdateSubmit(formData) {
    console.log(formData)
    formData.preventDefault();
    console.log(newPassword)
    Server.post(urlPassword, {
      new_password: newPassword.new_password,
      update_date: "NOW()"
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          console.log("Updated")
          document.getElementById("new_password").style.display = "none";
          document.getElementById("send-new-password").style.display = "none";
          document.getElementById("cancel-new-password").style.display = "none";
          document.getElementById("check-icon").style.display = "block";
        }
      })
      .catch(() => {
        document.getElementById('error-message').textContent = "Something went wrong";
        console.log("Error trying to update")
      })
  }

  function handleUpdateChange(data) {
    // console.log(data.target.id)
    // console.log(data.target.value)
    const newData = { ...newPassword };
    newData[data.target.id] = data.target.value;
    console.log(newData)
    setNewPassword(newData);
  }

  function openModalNewPassword() {
    document.getElementById("new-password-modal").style.visibility = "visible"
    document.getElementById("new_password").style.display = "block";
    document.getElementById("send-new-password").style.display = "block";
    document.getElementById("cancel-new-password").style.display = "block";
    document.getElementById("check-icon").style.display = "none";
  }

  return (
    <React.Fragment>
      <div id="new-password-modal">
        <form id="update-form" onSubmit={(formData) => handleUpdateSubmit(formData)}>
          <span>Change password</span>
          <input type="password" onChange={(data) => handleUpdateChange(data)} id="new_password" value={newPassword.new_password} placeholder="New password" required />
          <button type="submit" id="send-new-password">Send</button>
          <button type="button" id="cancel-new-password" onClick={() => document.getElementById("new-password-modal").style.visibility = "hidden"}>Cancel</button>
          <span id="error-message"></span>
          <img src={CheckIcon} alt="Check icon" id="check-icon" onClick={() => document.getElementById("new-password-modal").style.visibility = "hidden"} />
        </form>
      </div>
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
        <button onClick={() => openModalNewPassword()}>Change password</button>
        <button onClick={() => history.push('/history')}>History</button>
        <button id="delete-account" onClick={() => handleDeleteAccount(cookieDecoded.id)}>Delete account</button>
      </div>
    </React.Fragment >
  );
}

export default Account;