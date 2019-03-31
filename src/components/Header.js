import React, { useState } from "react";
import logo from "../images/header-logo2.png";
import "../styles/Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobile-menu");
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("menu-opened");
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1000 && isMenuOpen === true) {
      const burger = document.getElementById("burger");
      const mobileMenu = document.getElementById("mobile-menu");
      burger.classList.remove("active");
      mobileMenu.classList.remove("menu-opened");
      setIsMenuOpen(false);
    }
  });

  function menuMobileClick(section) {
    if (isMenuOpen) {
      const burger = document.getElementById("burger");
      const mobileMenu = document.getElementById("mobile-menu");
      burger.classList.remove("active");
      mobileMenu.classList.remove("menu-opened");
      setIsMenuOpen(!isMenuOpen);
    }
    let whereToScroll = document.getElementById(section).offsetTop;
    window.scrollTo(0, whereToScroll);
  }

  var i = 0;
  var text = "We make future";

  function writer() {
    if (i < text.length) {
      document.getElementById("type-writer").innerHTML += text.charAt(i);
      i++;
      setTimeout(writer, 200);
    }
  }

  window.addEventListener("load", writer);

  return (
    <header id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-8">
            <img
              onClick={() => {
                menuMobileClick("header");
              }}
              className="logo"
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="col-sm-8 col-4">
            <nav className="header-nav">
              <p
                className="menu-item"
                onClick={() => {
                  menuMobileClick("about");
                }}
              >
                About
              </p>
              <p
                className="menu-item"
                onClick={() => {
                  menuMobileClick("projects");
                }}
              >
                Portfolio
              </p>
              <p
                className="menu-item"
                onClick={() => {
                  menuMobileClick("testimonials");
                }}
              >
                Testimonials
              </p>
              <p
                className="menu-item"
                onClick={() => {
                  menuMobileClick("services");
                }}
              >
                Services
              </p>
              <p
                className="menu-item"
                onClick={() => {
                  menuMobileClick("team");
                }}
              >
                Our Team
              </p>
              <p
                className="menu-item"
                onClick={() => {
                  menuMobileClick("contact");
                }}
              >
                Contact Us
              </p>
            </nav>
            <div id="burger" className="burger-menu" onClick={toggleMenu}>
              <span className="burger-1" />
              <span className="burger-2" />
              <span className="burger-3" />
            </div>
          </div>
        </div>
      </div>
      <nav id="mobile-menu" className="mobile-menu">
        <ul>
          <li className="mobile-menu-item">
            <p
              onClick={() => {
                menuMobileClick("about");
              }}
            >
              About
            </p>
          </li>
          <li className="mobile-menu-item">
            <p
              onClick={() => {
                menuMobileClick("projects");
              }}
            >
              Portfolio
            </p>
          </li>
          <li className="mobile-menu-item">
            <p
              onClick={() => {
                menuMobileClick("testimonials");
              }}
            >
              Testimonials
            </p>
          </li>
          <li className="mobile-menu-item">
            <p
              onClick={() => {
                menuMobileClick("services");
              }}
            >
              Services
            </p>
          </li>
          <li className="mobile-menu-item">
            <p
              onClick={() => {
                menuMobileClick("team");
              }}
            >
              Our Team
            </p>
          </li>
          <li className="mobile-menu-item">
            <p
              onClick={() => {
                menuMobileClick("contact");
              }}
            >
              Contact Us
            </p>
          </li>
        </ul>
      </nav>
      <div className="container bottom-header">
        <div className="row">
          <div className="col-sm-12 header-column">
            <h1 id="type-writer"> </h1>
            <span className="heart"> ♥ </span>
          </div>
          <div className="col-sm-8 offset-sm-2">
            <div className="header-description">
              We provide the newest technology in our projects and make
              everything prettier. We have ten years of exeprience in giving
              satisfacion to our clients.
            </div>
            <button className="big-header-button">Start with us</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
