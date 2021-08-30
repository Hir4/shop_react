import React from 'react';
import Header from '../../components/Header/index.jsx';
import HeaderAfterLogin from '../../components/HeaderAfterLogin/index.jsx';
import PackIcon from '../../assets/images/pack-icon.png';
// import Back from '../../assets/images/back_button.svg';
import { useCart } from '../../context/cart.js';
import './styleCart.css';

function Cart() {
  const { cart, removeCart } = useCart();

  function getHeader() {
    if (document.cookie) {
      return <HeaderAfterLogin />
    } else { return <Header /> }
  }
  console.log(cart)
  return (
    <React.Fragment>
      {getHeader()}
      <div className="container-cart">
        <h1>Shopping Cart</h1>
        {cart.map(item => {
          return (
            <div className="product-in-cart">
              <img src={PackIcon} alt="Pack icon" />
              <span>{item.product_name}</span>
              <span>1</span>
              <button className="remove-item" onClick={() => removeCart(item.id)}>Remove</button>
              <button className="buy-item">Buy</button>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Cart;