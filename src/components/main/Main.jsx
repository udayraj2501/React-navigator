import React from "react";
import body1 from "../../images/1nd.png";
import body2 from "../../images/2nd.png";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-section">
        <div className="main-left">
          <img src={body1} alt="" />
        </div>

        <div className="main-middle">
          <h1>React Navigation</h1>

          <p>Routing and navigation for Expo and React Native apps.</p>

          <div className="main-buttons">
            <button className="main-button1">
              <a
                href="https://reactnavigation.org/docs/getting-started/"
                target="_blank"rel="noreferrer"
              >
                Read Docs
              </a>
            </button>
            <button className="main-button2">
              <a
                href="https://github.com/react-navigation/react-navigation/tree/main/example" rel="noreferrer"
                target="_blank"
              >
                Try It
              </a>
            </button>
          </div>
        </div>

        <div className="main-shadow"></div>

        <div className="main-right">
          <img src={body2} alt="" />
        </div>
      </div>

      <div className="check-guide">
        <p>
          💡Coming from an older version? Check out our
          <a
            href="https://reactnavigation.org/docs/migration-guides"
            target="_blank" rel="noreferrer"
          >
            migration guide
          </a>
        </p>
      </div>
    </div>
  );
};

export default Main;
