import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <h2>
          <a href="#header">Home</a>
        </h2>
        <h2>
          <a href="#about">About</a>
        </h2>
        <h2>
          <a href="#portfolio">Portfolio</a>
        </h2>
        <h2>
          <a href="#contact">Contact</a>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
