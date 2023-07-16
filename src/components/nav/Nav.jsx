import React from "react";
import "./nav.css";
import logoImage from "./images/logo.jpg";

function Nav() {
  return (
    <>
      <div className="nav_body">
        <nav>
          <div className="navbar">
            <a className="logo" href="#">
              <img src={logoImage} alt="Logo" />{" "}
              {/* Add the image element with the logo image */}
            </a>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
