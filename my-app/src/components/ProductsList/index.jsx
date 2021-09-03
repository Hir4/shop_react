import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Server from './../../services/server.js';
import PackIcon from '../../assets/images/pack-icon.png';
import './styleProductsList.css';

function Products() {
  const history = useHistory();
  
  const url = "http://localhost:8080/getproducts";

  const [products, setProducts] = useState([])

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

  console.log(products);
  return (
    <div className="list-products">
      {products.map(product => (
        <div className="product" key={product.id} onClick={() => getProduct(product.id)}>
          {(product.img_path === null ? <img src={PackIcon} alt="product-icon" /> : <img src={`${product.img_path}`} alt="product-icon" />)}
          <span className="product-list-name">{product.product_name}</span>
          <span className="product-list-price">{product.product_price}</span>
        </div>
      ))}
    </div>
  );
}

export default Products;