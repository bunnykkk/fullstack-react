import React from "react";
import "../../styles/NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h1 id="error-message">Ooops, something was wrong</h1>
      <p class="zoom-area"></p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <a href="/" class="more-link">
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
