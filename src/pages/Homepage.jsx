import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Store</h1>
        <p>Discover the best products at amazing prices.</p>
        <Link to="/shop" className="shop-btn">
          Start Shopping
        </Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your products delivered quickly.</p>
        </div>

        <div className="feature-card">
          <h3>💳 Secure Payment</h3>
          <p>100% safe and secure transactions.</p>
        </div>

        <div className="feature-card">
          <h3>⭐ Best Quality</h3>
          <p>Premium products at affordable prices.</p>
        </div>
      </section>

    </div>
  );
};

export default Homepage;