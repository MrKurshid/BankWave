import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 BankWave. All rights reserved.
          <br />
          Made with ❤️ Just_Coder
        </p>
      </div>
    </footer>
  );
};

export default Footer;
