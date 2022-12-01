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
        <div class="mask">
          <span data-show className="firstSpan">
            iPhone.
          </span>
          <span>Samsung.</span>
          <span>Huawei.</span>
          <span>Now.</span>
        </div>
      </h2>

      <Footer />
    </div>
  );
};

export default HomePage;
