import React from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/index.jsx';
import Back from '../../assets/images/back_button.svg';
import Star from '../../assets/images/star.svg'
import './styleProduct.css';

function Product() {
  const history = useHistory();
  return (
    <React.Fragment>
      <Header />
      <div className="container-all">
        <div className="back-button" onClick={() =>  window.history.back()}>
          <img src={Back} alt="Back button" />
          <span>Back</span>
        </div>
        <span className="location-bar">home > processors</span>
        <div className="container-product">
          <div className="product-img">
          </div>
          <div className="product-info">
            <span className="product-name">Intel Core i5-10400F</span>
            <div>
              <span className="product-avaliation">Avaliation</span>
              <div className="container-avaliation-stars">
                <img src={Star} alt="Star icon" />
                <img src={Star} alt="Star icon" />
                <img src={Star} alt="Star icon" />
                <img src={Star} alt="Star icon" />
                <img src={Star} alt="Star icon" />
              </div>
            </div>
            <div className="product-description">
              <span className="product-label">Label: INTEL</span>
              <span className="product-quantity">Quantity: 10</span>
              <span className="product-group">Group: Processors</span>
            </div>
          </div>
        </div>
        <span className="product-price">R$1000.00</span>
        <div className="product-buttons">
          <button className="button-list">Car List</button>
          <button className="button-buy">Buy</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Product;