import React from "react";
import "../../styles/NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h1 id="error-message">Ooops, something was wrong</h1>
      <p className="zoom-area"></p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <a href="/" className="more-link">
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
