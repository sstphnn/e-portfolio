import React from 'react';
import './home.css';

import { images } from '../../constants';

const Home = () => {
  return (
    <div className="home-content section__padding">
      <div className="home-container">
        <h1>Stephen Macaraeg</h1>
        <p>Frontend Developer</p>
      </div>
      <div className="home-image">
        <img src={images.steph} alt="steph" />
      </div>
    </div>
  );
};

export default Home;
