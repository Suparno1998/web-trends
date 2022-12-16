import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer container">
          <div className="footer-info">
            <a href="/#" className="logo">
              Company Logo
            </a>
            <h1></h1>
            <p>
            We simplify the meal planning process. Our tools equip households to eat better food, eat together, save money at the grocery store, and have a less stressful cooking experience.
            </p>
          </div>

          <div className="footer-info">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <h5>Our Location</h5>
              <span>14-10 Mill Creek Road, Cambridge</span>
            </div>
            <div className="contact-info">
              <h5>Phone</h5>
              <a href="tel:519-771-1379">519-771-1379</a>
            </div>
            <div className="contact-info">
              <h5>Email</h5>
              <a href="mailto:mshaikh@conestogac.on.ca">info@info.com</a>
            </div>
            
          </div>

          <div className="footer-info">
            <h4>Quick Links</h4>
            <div className="quick-links contact-info">
              <h5><a href="#">Home</a></h5>
              <h5><a href="#">Meal Plans</a></h5>
              <h5><a href="#">Registration</a></h5>
              <h5><a href="#">Contact Us</a></h5>
            </div>
          </div>
          
          
        </div>
        <div className="copyright">
          <div className="container">
            <span>&copy; Web Trends Group Project Fall - 2022</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
