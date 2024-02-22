import React from 'react';
import logo from "../../images/spiro.svg";
import "./navbar.css";
import App from "../../App";

const Navbar = () => {
  return (
    <div className="navbar">
          <div className="navbar-left">
            <div className="navbar-logo">
              <a href={App}>
                <img src={logo} alt="logo" />
              </a>

              <a href={App}>
                <h1>React Navigation</h1>
              </a>
            </div>

            <div className="navbar-contain">
              <a
                href="https://reactnavigation.org/docs/getting-started"
                target="_blank" rel="noreferrer"
              >
                Docs
              </a>
              <a href="https://reactnavigation.org/blog" target="_blank" rel="noreferrer">
                Blog
              </a>
              <a href="https://reactnavigation.org/help" target="_blank" rel="noreferrer">
                Help
              </a>

              <div className="dropdown-menu">
                <div className="current-version">
                  <li className="dropdown-item">7.x</li>
                  <i class="fa-solid fa-caret-down"></i>

                  <div className="explore-versions">
                    <a
                      href="https://reactnavigation.org/docs/7.x/getting-started"
                      target="_blank" rel="noreferrer"
                      className="dropdown-list"
                    >
                      7.x
                    </a>
                    <a
                      href="https://reactnavigation.org/docs/getting-started"
                      target="_blank" rel="noreferrer"
                      className="dropdown-list"
                    >
                      6.x
                    </a>
                    <a
                      href="https://reactnavigation.org/docs/5.x/getting-started"
                      target="_blank" rel="noreferrer"
                      className="dropdown-list"
                    >
                      5.x
                    </a>
                    <a
                      href="https://reactnavigation.org/docs/4.x/getting-started"
                      target="_blank" rel="noreferrer"
                      className="dropdown-list"
                    >
                      4.x
                    </a>
                    <a
                      href="https://reactnavigation.org/docs/3.x/getting-started"
                      target="_blank" rel="noreferrer"
                      className="dropdown-list"
                    >
                      3.x
                    </a>
                    <a
                      href="https://reactnavigation.org/docs/2.x/getting-started"
                      target="_blank" rel="noreferrer"
                      className="dropdown-list"
                    >
                      2.x
                    </a>

                    <a
                      href="https://reactnavigation.org/docs/1.x/getting-started"
                      target="_blank" rel="noreferrer"
                      className="dropdown-list"
                    >
                      1.x
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-right">
            <div className="github-link">
              <a href="https://github.com/react-navigation" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <i class="fa-solid fa-arrow-up-right-from-square" rel="noreferrer"></i>
            </div>

            <div className="theme-mode">
              <i className="fa-regular fa-moon"></i>
            </div>

            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Search" />
            </div>
          </div>
        </div>
  )
}

export default Navbar