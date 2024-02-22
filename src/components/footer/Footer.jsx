import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
    <div className="footer-section">
      <h1>Docs</h1>
      <a
        href="https://reactnavigation.org/docs/getting-started"
        target="_blank" rel="noreferrer"
      >
        Getting Started
      </a>
      <a
        href="https://reactnavigation.org/docs/custom-navigators"
        target="_blank" rel="noreferrer"
      >
        Building your own Navigator
      </a>
      <a
        href="https://reactnavigation.org/docs/contributing"
        target="_blank" rel="noreferrer"
      >
        Contributing
      </a>
    </div>

    <div className="footer-section">
      <h1>Support</h1>
      <a
        href="https://reactnavigation.org/docs/contributing"
        target="_blank" rel="noreferrer"
      >
        Chat in our Discord channel
      </a>
      <a
        href="https://stackoverflow.com/questions/tagged/react-navigation"
        target="_blank" rel="noreferrer"
      >
        Get help on Stack Overflow
      </a>
      <a
        href="https://react-navigation.canny.io/feature-requests"
        target="_blank" rel="noreferrer"
      >
        Request a feature on Canny
      </a>
      <a
        href="https://github.com/react-navigation/react-navigation/issues/new/choose"
        target="_blank" rel="noreferrer"
      >
        Report a bug on GitHub
      </a>
    </div>

    <div className="footer-section">
      <h1>Social</h1>
      <a href="https://reactnavigation.org/blog" target="_blank" rel="noreferrer">
        Blog
      </a>
      <a
        href="https://github.com/react-navigation/react-navigation"
        target="_blank" rel="noreferrer"
      >
        GitHub
      </a>
      <a href="https://twitter.com/reactnavigation" target="_blank" rel="noreferrer">
        Twitter
      </a>
    </div>

    <div className="footer-section">
      <h1>Build with</h1>
      <a href="https://docusaurus.io/" target="_blank" rel="noreferrer">
        Docusaurus
      </a>
      <a href="https://pages.github.com/" target="_blank" rel="noreferrer">
        GitHub Pages
      </a>
      <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
        Netlify
      </a>
    </div>
  </section>
  )
}

export default Footer