import React, { useEffect, useState } from 'react';
import HeaderAfterLogin from '../../components/HeaderAfterLogin/index.jsx';
import Server from './../../services/server.js';
import PackIcon from '../../assets/images/pack-icon.png';
import Back from '../../assets/images/back_button.svg';
import './styleHistory.css';

function History() {
  const url = "http://localhost:8080/viewsale";
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  Server.post(url);

  useEffect(() => {
    Server.get(url)
      .then(res => {
        if (res.status === 200) {
          setPurchaseHistory(res.data);
        }
      })
      .catch(() => {
        console.log("Error trying to signed sale")
      })
  }, [])

  return (
    <React.Fragment>
      <HeaderAfterLogin />
      <div className="container-history">
        <div className="container-title-back">
          <div className="back-button" onClick={() => window.history.back()}>
            <img id="back-button-img" src={Back} alt="Back button" />
            <span>Back</span>
          </div>
        </div>
        <h1>Purchase History</h1>
        {purchaseHistory.map(item => {
          return (
            <div className="container-product-sale">
              {(item.img_path === null ? <img src={PackIcon} alt="product-icon" /> : <img src={`${item.img_path}`} alt="product-icon" />)}
              <span>{item.product_name}</span>
              <span>{item.method_type}</span>
              <span>{item.total_bought}</span>
              <span>{item.creation_date}</span>
              <span>1</span>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default History;