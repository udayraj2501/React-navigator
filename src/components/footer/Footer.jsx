import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
    <div className="footer-section">
      <h1>Docs</h1>
      <a
        href="https://reactnavigation.org/docs/getting-started"
        target="_blank"
      >
        Getting Started
      </a>
      <a
        href="https://reactnavigation.org/docs/custom-navigators"
        target="_blank"
      >
        Building your own Navigator
      </a>
      <a
        href="https://reactnavigation.org/docs/contributing"
        target="_blank"
      >
        Contributing
      </a>
    </div>

    <div className="footer-section">
      <h1>Support</h1>
      <a
        href="https://reactnavigation.org/docs/contributing"
        target="_blank"
      >
        Chat in our Discord channel
      </a>
      <a
        href="https://stackoverflow.com/questions/tagged/react-navigation"
        target="_blank"
      >
        Get help on Stack Overflow
      </a>
      <a
        href="https://react-navigation.canny.io/feature-requests"
        target="_blank"
      >
        Request a feature on Canny
      </a>
      <a
        href="https://github.com/react-navigation/react-navigation/issues/new/choose"
        target="_blank"
      >
        Report a bug on GitHub
      </a>
    </div>

    <div className="footer-section">
      <h1>Social</h1>
      <a href="https://reactnavigation.org/blog" target="_blank">
        Blog
      </a>
      <a
        href="https://github.com/react-navigation/react-navigation"
        target="_blank"
      >
        GitHub
      </a>
      <a href="https://twitter.com/reactnavigation" target="_blank">
        Twitter
      </a>
    </div>

    <div className="footer-section">
      <h1>Build with</h1>
      <a href="https://docusaurus.io/" target="_blank">
        Docusaurus
      </a>
      <a href="https://pages.github.com/" target="_blank">
        GitHub Pages
      </a>
      <a href="https://www.netlify.com/" target="_blank">
        Netlify
      </a>
    </div>
  </section>
  )
}

export default Footer