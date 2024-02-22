import React from 'react';
import feature1 from "../../images/home_smile.svg";
import feature2 from "../../images/home_devices.svg";
import feature3 from "../../images/home_star.svg";
import feature4 from "../../images/home_extend.svg";
import "./feature.css";

const Feature = () => {
  return (
    <section className="features-section">
            <div className="feature">
              <img src={feature1} alt="" />
              <h1>Easy to use</h1>
              <p>
                Start quickly with built-in navigators that deliver a seamless
                out-of-the-box experience.
              </p>
            </div>

            <div className="feature">
              <img src={feature2} alt="" />
              <h1>Components built for iOS and Android</h1>
              <p>
                Platform-specific look-and-feel with smooth animations and
                gestures.
              </p>
            </div>

            <div className="feature">
              <img src={feature3} alt="" />
              <h1>Completely customizable</h1>
              <p>
                If you know how to write apps using JavaScript you can customize
                any part of React Navigation.
              </p>
            </div>

            <div className="feature">
              <img src={feature4} alt="" />
              <h1>Extensible platform</h1>
              <p>
                React Navigation is extensible at every layer— you can write
                your own navigators or even replace the user-facing API.
              </p>
            </div>
          </section>
  )
}

export default Feature