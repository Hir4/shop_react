import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import HeaderAfterLogin from '../../components/HeaderAfterLogin/index.jsx';
import PersonIcon from '../../assets/images/icon-person.svg';
import Back from '../../assets/images/back_button.svg';
import CheckIcon from '../../assets/images/check.png';
import Server from './../../services/server.js';
import './styleAccount.css';

function Account() {
  const history = useHistory();

  const url = "http://localhost:8080/userdelete";
  const urlPassword = "http://localhost:8080/userupdate";
  const urlViewSale = "http://localhost:8080/viewsale";
  const urlGetClient = "http://localhost:8080/getclientinfo";

  const [clientInfo, setclientInfo] = useState([]);

  useEffect(() => {
    Server.post(urlGetClient)
      .then(res => {
        if (res.status === 200) {
          setclientInfo(res.data);
          console.log(res.data);
        }
      })
      .catch(() => {
        console.log("Error trying to signed sale")
      })
  }, [])

  console.log(clientInfo)

  function handleDeleteAccount() {
    Server.post(url, {
      delete_date: "NOW()",
      update_date: "NOW()"
    })
      .then(res => {
        if (res.status === 200) {
          document.cookie = "cookieId=;expires=" + new Date().toUTCString() + ";path=/";
          history.push(`/`);
          console.log("Deleted Account")
        }
      })
      .catch(() => {
        console.log("Error trying to delete")
      })
  }

  Server.post(urlViewSale);


  const [newPassword, setNewPassword] = useState({
    new_password: "",
    update_date: "NOW()"
  });

  function handleUpdateSubmit(formData) {
    formData.preventDefault();
    Server.post(urlPassword, {
      new_password: newPassword.new_password,
      update_date: "NOW()"
    })
      .then(res => {
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
    const newData = { ...newPassword };
    newData[data.target.id] = data.target.value;
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
        {clientInfo.map(client => {
          return (
            <div className="organization-options-informations">
              <div className="container-perfil-options">
                <img src={PersonIcon} alt="Person icon" />
                <h2>{client.first_name}</h2>
                <button onClick={() => openModalNewPassword()}>Change password</button>
                <button onClick={() => history.push('/history')}>History</button>
                <button id="delete-account" onClick={() => handleDeleteAccount()}>Delete account</button>
              </div>
              <div className="container-perfil-informations">
                <input type="text" value={client.email} size="20" readOnly />
                <input type="text" value={client.document} size="30" readOnly />
                <input type="text" value={client.address} size="20" readOnly />
                <input type="text" value={client.city} size="30" readOnly />
                <input type="text" value={client.state} size="10" readOnly />
                <input type="text" value={client.zip_code} size="10" readOnly />
                <input type="text" value={client.phone_ddd} size="5" readOnly />
                <input type="text" value={client.phone_number} size="10" readOnly />
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment >
  );
}

export default Account;