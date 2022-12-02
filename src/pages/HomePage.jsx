import React from "react";
import Footer from "../components/Footer/Footer";
import "../styles/HomePage.css";
import "../styles/HomePage.js";

const HomePage = () => {
  return (
    <div>
      <div className="home_box"></div>

      <h2 id="home-text">
        Buy your dream
        <div className="mask">
          <span data-show className="firstSpan">
            iPhone.
          </span>
          <span>Samsung.</span>
          <span>Xiaomi.</span>
          <span>Now.</span>
        </div>
      </h2>
      <div>
        <p>
          Buy our equipment at the lowest price and with the highest quality on
          the market
        </p>
      </div>
      <button className="rainb-btn">Start Shopping</button>
      <div>
        <ul>
          <li>1M+</li>
          <li>5M</li>
          <li>15%</li>
        </ul>
      </div>
      <div>
        <p>Users</p>
        <p>Sales</p>
        <p>Credit</p>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
