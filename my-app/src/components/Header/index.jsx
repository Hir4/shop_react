import React from 'react';
import { useHistory, Link } from "react-router-dom";
import BoxIcon from '../../assets/images/box.svg';
import Logo from '../../assets/logo/logo_white.svg';
import Mgnf_glass from '../../assets/images/magnifying_glass.svg';
import Cart from '../../assets/images/cart.svg';
import {useCart} from '../../context/cart.js';
import './styleHeader.css';

function Header() {
  const { cart } = useCart();
  
  const history = useHistory();
  return (
    <div className="container-header">
      <header>
        <div className="header-login">
          <div className="box-message">
            <img src={BoxIcon} alt="Box icon" />
            <span>Free shipping on orders with PIX</span>
          </div>
          <button onClick={() => { history.push(`/login`) }}>LOGIN / SIGN IN</button>
        </div>
        <div className="main-header">
          <Link to="/">
            <img id="logo" src={Logo} alt="Logo icon" />
          </Link>
          <form>
            <select id="electronics">
              <option value="processors">Processors</option>
              <option value="graphic_video">Graphic Video</option>
              <option value="hd">HD</option>
            </select>
            <input id="search_input" type="search" placeholder="Search something..." />
            <button id="button_submit" type="submit"><img src={Mgnf_glass} alt="Magnifying glass icon" /></button>
          </form>
          <div className="account-cart">
            <Link className="link-decoration" to="/account">
              <span className="account-option">Account</span>
            </Link>
            <span>|</span>
            <Link className="link-decoration" to="/cart">
              <div className="cart-option">
                <img src={Cart} alt="Cart icon" />
                <span>Cart</span>
                <span id="cart-counter">{Object.keys(cart).length}</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>);
}

export default Header;