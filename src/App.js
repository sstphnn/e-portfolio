import React, { useState, useEffect } from 'react';
import './App.css';

import { Home, About, Portfolio, Contact } from './containers';
import { Header, Navbar, Footer } from './components';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-wrapper" id="loader-wrapper">
          <div className="newtons-cradle">
            <div className="newtons-cradle__letter">
              <h1>S</h1>
            </div>
            <div className="newtons-cradle__letter">
              <h1>S</h1>
            </div>
            <div className="newtons-cradle__letter">
              <h1>T</h1>
            </div>
            <div className="newtons-cradle__letter">
              <h1>P</h1>
            </div>
            <div className="newtons-cradle__letter">
              <h1>H</h1>
            </div>
            <div className="newtons-cradle__letter">
              <h1>N</h1>
            </div>
            <div className="newtons-cradle__letter">
              <h1>N</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="container" id="container">
          <Header />
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
