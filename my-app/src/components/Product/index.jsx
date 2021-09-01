import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Server from './../../services/server.js';
import Header from '../../components/Header/index.jsx';
import HeaderAfterLogin from '../../components/HeaderAfterLogin/index.jsx';
import Back from '../../assets/images/back_button.svg';
import Star from '../../assets/images/star.svg';
import PackIcon from '../../assets/images/pack-icon.png';
import { useCart } from '../../context/cart.js';

function ProductClicked() {
  const { addCart } = useCart();
  const { product_id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(['load']);
  const url = "http://localhost:8080/getproductwithid";
  const urlSale = "http://localhost:8080/sale";

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await Server.post(url, { id: product_id });

        if (Array.isArray(data)) {
          setProduct(data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    loadData()
  }, [product_id])

  function getHeader() {
    if (document.cookie) {
      return <HeaderAfterLogin />
    } else { return <Header /> }
  }

  function handleBuyItem(item_price, item_id) {
    console.log(item_price)
    console.log(item_id)
    if (document.cookie) {
      Server.post(urlSale, {
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
            history.push(`/`)
            console.log("Sale signed with success");
          }
        })
        .catch(() => {
          // document.getElementById('error-message').textContent = "Check your info again";
          console.log("Error trying to signed sale")
        })
    } else { history.push(`/login`) }
  }

  return (
    <React.Fragment>
      {getHeader()}
      <div className="container-all">
        <div className="back-button" onClick={() => window.history.back()}>
          <img src={Back} alt="Back button" />
          <span>Back</span>
        </div>
        <span className="location-bar">home {'>'} {product[0].product_type}</span>
        <div className="container-product">
          <img src={PackIcon} alt="Pack icon" />
          <div className="product-info">
            <span className="product-name">{product[0].product_name}</span>
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
              <span className="product-label">Label: {product[0].label}</span>
              <span className="product-quantity">Quantity: {product[0].product_quantity}</span>
              <span className="product-group">Group: {product[0].product_type}</span>
            </div>
          </div>
        </div>
        <span className="product-price">{product[0].product_price}</span>
        <div className="product-buttons">
          <button onClick={() => { addCart(product[0]) }} className="button-list">Car List</button>
          <button className="button-buy" onClick={() => handleBuyItem(product[0].product_price.replace("R$", ""), product_id)}>Buy</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductClicked;