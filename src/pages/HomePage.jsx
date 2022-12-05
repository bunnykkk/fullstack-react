import React from "react";
import Footer from "../components/Footer/Footer";
import "../styles/HomePage.css";
import "../styles/HomePage.js";
import phone from "../img/phone.png";

const HomePage = () => {
  return (
    <div>
      <img src={phone} alt="vghhh" className="phone" />

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
      <div className="text3">
        <p>
          Buy our equipment at the lowest price and with the highest quality on
          the market
        </p>
      </div>
      <button className="rainb_btn">Start Shopping</button>
      <div className="text1">
        <ul className="testUl">
          <li className="li">1M+</li>
          <li className="li">5M</li>
          <li className="li">15%</li>
        </ul>
      </div>
      <div className="text2">
        <p className="p">Users</p>
        <p className="p">Sales</p>
        <p className="p">Credit</p>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
