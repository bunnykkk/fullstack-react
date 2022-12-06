import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <div id="blur-about">
        <h2 className="about-main">About Apparat</h2>
        <div className="about-us">
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "300",
              margin: "auto",
              width: "50%",
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            illo rem quam facere repudiandae saepe deserunt, cum impedit facilis
            ratione ullam amet assumenda! Inventore doloribus harum tempora,
            veritatis facere, quibusdam soluta blanditiis, quia pariatur
            accusantium recusandae saepe! Molestias, rerum ut.
          </p>
        </div>
        <div id="about-page">
          <div>
            <h3 style={{ textShadow: "rgba(51,0,255,0.9) 0px 0px 31px" }}>
              2003
            </h3>
            <p>
              Apparat shoping services was founded by Matt Heaton and Danny
              Ashworth in Provo, Utah.
            </p>
          </div>
          <div>
            <h3 style={{ textShadow: "rgba(51,0,255,0.9) 0px 0px 31px" }}>
              5M+
            </h3>
            <p>
              We power websites all over the world and support thousands more
              every day.
            </p>
          </div>
          <div>
            <h3 style={{ textShadow: "rgba(51,0,255,0.9) 0px 0px 31px" }}>
              750+
            </h3>
            <p>
              Our vast team is dedicated to helping our customers around the
              clock, 24/7 so we can be the best web hosting company to our
              customers at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
