import React from 'react';
import Header from '../../components/Header/index.jsx';
import GraphicVideo from '../../assets/images/graphic_video.svg';
import './styleHome.css';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="container-banner">
        <div id="container-banner-content">
          <h1>Everything you need for your setup.</h1>
          <p>You can find here processors, ram, graphic board and others. Come check!</p>
          <button>Buy</button>
        </div>
        <img src={GraphicVideo} alt="Graphic video" />
      </div>
      <div className="list-products">
        <div className="product">
          <img src="#" alt="product" />
        </div>
        <div className="product">
          <img src="#" alt="product" />
        </div>
        <div className="product">
          <img src="#" alt="product" />
        </div>
        <div className="product">
          <img src="#" alt="product" />
        </div>
        <div className="product">
          <img src="#" alt="product" />
        </div>
        <div className="product">
          <img src="#" alt="product" />
        </div>
        <div className="product">
          <img src="#" alt="product" />
        </div>
        <div className="product">
          <img src="#" alt="product" />
        </div>
        <div className="product">
          <img src="#" alt="product" />
        </div>
        <div className="product">
          <img src="#" alt="product" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;