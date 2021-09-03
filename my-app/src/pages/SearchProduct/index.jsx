import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Server from './../../services/server.js';
import Header from '../../components/Header/index.jsx';
import HeaderAfterLogin from '../../components/HeaderAfterLogin/index.jsx';
import PackIcon from '../../assets/images/pack-icon.png';

function SearchProduct() {

  function getHeader(){
  if(document.cookie){
    return <HeaderAfterLogin />
  } else{return <Header />}}

  const history = useHistory();
  
  const url = "http://localhost:8080/searchproduct";

  const { search_product } = useParams();

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadDataProduct() {
      try {
        const { data } = await Server.post(url, {search: search_product});

        if (Array.isArray(data)) {
          setProducts(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    loadDataProduct()
  }, [search_product])

  function getProduct(product_id) {
    history.push(`/product/${product_id}`)
  }

  return (
    <React.Fragment>
      {getHeader()}
      <div className="list-products">
      {products.map(product => (
        <div className="product" key={product.id} onClick={() => getProduct(product.id)}>
          {(product.img_path === null ? <img src={PackIcon} alt="product-icon" /> : <img src={`${product.img_path}`} alt="product-icon" />)}
          <span className="product-list-name">{product.product_name}</span>
          <span className="product-list-price">{product.product_price}</span>
        </div>
      ))}
    </div>
    </React.Fragment>
  );
}

export default SearchProduct;