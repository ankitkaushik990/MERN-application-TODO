import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in nisi elit.
            </p>
          </div>
          <div class="footer-section">
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div class="footer-section">
            <h3>Follow Us</h3>
            <ul class="social-icons">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
