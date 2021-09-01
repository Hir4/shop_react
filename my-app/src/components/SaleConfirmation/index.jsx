import React from 'react';
// import Server from './../../services/server.js';
import './styleSale.css';

function SaleConfirmation({ cart }) {
  // const url = "http://localhost:8080/paymethods";
  // const payment = [];

  // Server.get(url)
  //   .then(res => {
  //     if (res.status === 200) {
  //       payment.push(res.data)
  //     }
  //   })
  //   .catch(() => {
  //     console.log("Error trying to get")
  //   })

  function closeModalConfirmation() {
    document.getElementById("container-sale").style.display = "none";
  }

  return (
    <div id="container-sale">
      <form>

        <div className="inputs-information-item">
          <label>Payment
            <input type="text" idOfMethod="1" value="Pix" readOnly />
          </label>
          <label>Quantity
            <input type="number" value={1} placeholder="Quantity" readOnly />
          </label>
          <label>Due Date
            <input type="text" placeholder="Due date" value={`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`} readOnly />
          </label>
          <label>Delivery
            <input type="text" placeholder="Delivery time" value={`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`} readOnly />
          </label>
          <label>Line Id
            <input type="number" placeholder="Line id" value={1} readOnly />
          </label>
          <label>Product Id
            <input type="number" placeholder="Product id" value={cart[0].id} readOnly />
          </label>
          <label>Shipping
            <input type="text" placeholder="Shipping" value={`R$ ${0}`} readOnly />
          </label>
          <label>Total
            <input type="text" placeholder="Total bought" value={cart[0].product_price} readOnly />
          </label>
        </div>

        <button type="submit">Confirme</button>
        <button type="button" onClick={() => closeModalConfirmation()}>Cancel</button>
      </form>
    </div>
  );
}

export default SaleConfirmation;