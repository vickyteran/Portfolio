import React from 'react';
import "./Footer.css";




const Footer = () => {

  return (
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
      <h2>Victoria Teran</h2>
    </div>
    {/* <div class="footer-links">
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div> */}
    <div class="footer-social">
      <a href="https://github.com/vickyteran" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/victoriamariateran" target="_blank">LinkedIn</a>
      {/* <a href="https://twitter.com/tu-twitter" target="_blank">Twitter</a> */}
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Victoria Teran. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer