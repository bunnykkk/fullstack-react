import React from "react";
import "../styles/HomePage.css";
import "../styles/HomePage.js";
import phone from "../components/img/phone.png";
import gradi2 from "../components/img/gradi2.png";

const HomePage = () => {
  return (
    <div>
      <img src={phone} alt="vghhh" className="phone" />
      <img src={gradi2} alt="jhk" className="gardi2" />
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
      <form action="/products">
        <button style={{ cursor: "pointer" }} className="rainb_btn">
          Start Shopping
        </button>
      </form>
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
    </div>
  );
};

export default HomePage;
