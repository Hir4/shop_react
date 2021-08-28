import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Server from './../../services/server.js';
import PackIcon from '../../assets/images/pack-icon.png';

function Products() {
  const history = useHistory();
  
  const url = "http://localhost:8080/getproducts";

  const [products, setProducts] = useState([])
  console.log("data")

  useEffect(() => {
    async function loadDataProduct() {
      try {
        const { data } = await Server.get(url);

        if (Array.isArray(data)) {
          setProducts(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    loadDataProduct()
  }, [])

  function getProduct(product_id) {
    history.push(`/product/${product_id}`)
  }

  return (
    <div className="list-products">
      {products.map(product => (
        <div className="product" key={product.id} onClick={() => getProduct(product.id)}>
          <img src={PackIcon} alt="product-icon" />
          <span>{product.product_name}</span>
        </div>
      ))}
    </div>
  );
}

export default Products;