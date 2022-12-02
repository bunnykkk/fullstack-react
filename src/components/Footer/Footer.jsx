import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <ul class="menu">
          <li class="menu__item">
            <a class="menu__link" href="/">
              Home
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="/about">
              About
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="/services">
              Services
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="/team">
              Team
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2022 CORSA™ | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
