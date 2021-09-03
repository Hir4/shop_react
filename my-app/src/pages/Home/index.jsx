import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/index.jsx';
import HeaderAfterLogin from '../../components/HeaderAfterLogin/index.jsx';
import GraphicVideo from '../../assets/images/graphic_video.svg';
import Products from '../../components/ProductsList/index.jsx'
import './styleHome.css';

function Home() {
  const history = useHistory();
  function getHeader(){
  if(document.cookie){
    return <HeaderAfterLogin />
  } else{return <Header />}}

  return (
    <React.Fragment>
      {getHeader()}
      <div className="container-banner">
        <div id="container-banner-content">
          <h1>Everything you need for your setup.</h1>
          <p>You can find here processors, ram, graphic board and others. Come check!</p>
          <button onClick={() => history.push('/product/7')}>Buy</button>
        </div>
        <img src={GraphicVideo} alt="Graphic video" />
      </div>
     <Products />
    </React.Fragment>
  );
}

export default Home;