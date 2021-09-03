import React from 'react';
import Header from '../../components/Header/index.jsx';
import { useHistory } from "react-router-dom";
import HeaderAfterLogin from '../../components/HeaderAfterLogin/index.jsx';
import PackIcon from '../../assets/images/pack-icon.png';
import Server from './../../services/server.js';
import Back from '../../assets/images/back_button.svg';
import { useCart } from '../../context/cart.js';
import './styleCart.css';

function Cart() {
  const { cart, removeCart } = useCart();

  const history = useHistory();

  const url = "http://localhost:8080/sale";

  function getHeader() {
    if (document.cookie) {
      return <HeaderAfterLogin />
    } else { return <Header /> }
  }

  function handleBuyItem(item_price, item_id) {
    if (document.cookie) {
      Server.post(url, {
        total_bought: item_price,
        due_date: "NOW()",
        shipping: "0",
        delivery_time: "NOW()",
        confirmation: "1",
        creation_date: "NOW()",
        pay_method: "1",
        line_id: "1",
        product_id: item_id,
        product_quantity: "1"
      })
        .then(res => {
          if (res.status === 200) {
            console.log("Sale signed with success")
            removeCart(item_id);
          }
        })
        .catch(() => {
          console.log("Error trying to signed sale")
        })
    } else { history.push(`/login`); }

  }

  return (
    <React.Fragment>
      {getHeader()}
      <div className="container-cart">
        <div className="container-title-back">
          <div className="back-button" onClick={() => window.history.back()}>
            <img id="back-button-img" src={Back} alt="Back button" />
            <span>Back</span>
          </div>
        </div>
        <h1>Shopping Cart</h1>
        {cart.map(item => {
          return (
            <div className="product-in-cart">
              {(item.img_path === null ? <img src={PackIcon} alt="product-icon" /> : <img src={`${item.img_path}`} alt="product-icon" />)}
              <span>{item.product_name}</span>
              <span>{item.product_price}</span>
              <span>1</span>
              <button className="remove-item" onClick={() => removeCart(item.id)}>Remove</button>
              <button className="buy-item" onClick={() => handleBuyItem(item.product_price.replace("R$", ""), item.id)}>Buy</button>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Cart;