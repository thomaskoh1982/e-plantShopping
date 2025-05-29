import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  // State to toggle between landing page and product list
  const [showProductList, setShowProductList] = useState(false);

  // Handler for "Get Started" button
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // Handler to return to landing page
  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {/* Landing page with fade-out effect when product list is shown */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      {/* Product list container with slide-in effect */}
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default App;