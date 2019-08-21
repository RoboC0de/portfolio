import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import {
  TimelineMax,
  CSSPlugin,
  ScrollToPlugin,
  Draggable,
  Power2
} from "gsap/all";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.linkStyle = {
      color: "white",
      textDecoration: "none"
    };
  }
  activeNavLink() {
    const links = document.querySelectorAll(".Link-links");

    links.forEach((link, index) => {
      link.addEventListener("click", function() {
        changeNav(this);
      });
    });
    function changeNav(nav) {
      links.forEach(link => {
        link.classList.remove("active-nav");
      });
      nav.classList.add("active-nav");
    }
  }

  navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const contact = document.querySelector(".contact");

    burger.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("nav-active");
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.3}s`;
        }
      });
      // Burger Animation
      burger.classList.toggle("toggle");
      contact.classList.toggle("contact-toggle");
    });
  }

  componentDidMount() {
    this.activeNavLink();
    this.navSlide();
  }
  componentDidUpdate() {
    this.activeNavLink();
    this.navSlide();
  }

  render() {
    return (
      <div className="body-nav">
        <nav className="nav">
          <div className="logo">
            <h4>RoboC0de</h4>
          </div>

          <ul className="nav-links">
            <Link style={this.linkStyle} to="/">
              <li className="Link-links ">Home</li>
            </Link>
            <Link style={this.linkStyle} to="/Projects">
              <li className="Link-links">Projects</li>
            </Link>
            <Link style={this.linkStyle} to="/About">
              <li className="Link-links">About Me</li>
            </Link>
          </ul>
          <div className="contact-burger">
            <div className="contact">
              <p id="contact">Contact</p>
            </div>

            <div className="burger">
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
