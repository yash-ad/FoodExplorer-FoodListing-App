import React from "react";
import { LOGO_URL } from "../utilities/config";

const Footer = () => {
  return (
    <div className="footer">
      <div id="top">
        <div id="top-left"></div>
      </div>
      <div id="bottom">
        <div id="fifth-section">
          <img className="logoTwo" src={LOGO_URL} alt="" />
          <div id="fifth-section-top">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>
        <div id="first-section">
          <h3>COMPANY</h3>
          <h4>About</h4>
          <h4>Team</h4>
          <h4>FoodExplorer Blog</h4>
          <h4>Bug Bounty</h4>
          <h4>FoodExplorer One</h4>
          <h4>FoodExplorer Corporate</h4>
          <h4>FoodExplorer Instamart</h4>
        </div>
        <div id="second-section">
          <h3>CONTACT</h3>
          <h4>Help & Support</h4>
          <h4>Feeding India</h4>
          <h4>Hyperpure</h4>
          <h4>Ride with us</h4>
        </div>
        <div id="third-section">
          <div id="third-section-top">
            <h3>FOR RESTAURANTS</h3>
            <h4>Partner With Us</h4>
          </div>
          <div id="third-section-bottom">
            <h3>FOR ENTERPRISES</h3>
            <h4>FoodExplorer For Enterprise</h4>
          </div>
        </div>
        <div id="fourth-section">
          <h3>LEARN MORE</h3>
          <h4>Privacy</h4>
          <h4>Security</h4>
          <h4>Terms</h4>
          <h4>Sitemap</h4>
        </div>
      </div>
      <div id="line"></div>
      <div id="terms">
        <h4>
          All rights reserved., Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2023-2024 © FoodExplorer™ Ltd.
        </h4>
      </div>
    </div>
  );
};

export default Footer;



