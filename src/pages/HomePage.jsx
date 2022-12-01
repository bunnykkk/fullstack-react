import React from "react";
import Footer from "../components/Footer/Footer";
import "../styles/HomePage.css";
import "../styles/HomePage.js";

const HomePage = () => {
  return (
    <div>
      <h2 id="home-text">
        Turn your living room into
        <div class="mask">
          <span data-show className="firstSpan">
            a theater.
          </span>
          <span>a gym.</span>
          <span>a movie.</span>
          <span>an arcade.</span>
        </div>
      </h2>
      <Footer />
    </div>
  );
};

export default HomePage;
