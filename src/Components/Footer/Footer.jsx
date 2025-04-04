import React from "react";
import "./Footer.css"; // Import CSS
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>SS</h1>
          <p>
          Passionate about building clean, modern web experiences. Let's connect and create something amazing!
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-top-right">
          <div className="social-icons">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Shailendra. All Rights Reserved</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
