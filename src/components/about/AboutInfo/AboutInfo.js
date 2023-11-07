import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              Phoenyx Restaurant is a culinary gem that aims to elevate
              gastronomy to new heights. 🍽️✨ With a passion for exquisite
              flavors and innovative techniques, Phoenyx offers a dining
              experience that is both refined and unforgettable. <span></span>
            </h2>

            <h4>Our mission</h4>

            <p>
              Phoenyx Restaurant's mission is to redefine the culinary landscape
              by pushing the boundaries of gastronomy. Through their dedication
              to creativity, quality ingredients, and impeccable service, they
              strive to create a dining experience that leaves a lasting
              impression on every guest. 🌟🍽️✨{" "}
              <span className="special-word"></span>
            </p>

            <blockquote>
              Sure, Phoenyx Restaurant also offers a convenient takeaway service
              so you can enjoy their exquisite cuisine in the comfort of your
              own home. 🥡🏠 Simply place your order and savor their delicious
              dishes wherever you choose. Bon appétit! 😄🍽️{" "}
            </blockquote>

            <h4>Events</h4>

            <p>
              Of course! Phoenyx Pub is not just your average pub—it's a vibrant
              hub of entertainment and excitement! 🍻🎉 With an array of events,
              from live music performances to trivia nights and karaoke parties,
              Phoenyx Pub guarantees a fantastic time for all. Grab a drink,
              join in on the fun, and let the good times roll! 🎶🎤🎊
              <span className="special-word"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
