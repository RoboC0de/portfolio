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

  contactSlide() {
    const contact = document.querySelector(".contact");
    const burger = document.querySelector(".burger");
    const logo = document.querySelector(".logo");
    const contactOpen = document.querySelector(".contact-open");
    const mail = document.querySelector(".mail");
    const phone = document.querySelector(".phone");

    const tl = new TimelineMax({ paused: true, reversed: true });

    tl.to(contactOpen, 0.5, { y: "0%" })
      .fromTo(
        mail,
        0.5,
        { opacity: 0, y: "10%" },
        { opacity: 1, y: "0%" },
        "-=0.1"
      )
      .fromTo(
        phone,
        0.5,
        { opacity: 0, y: "10%" },
        { opacity: 1, y: "0%" },
        "-=0.5"
      )
      .fromTo(logo, 0.2, { color: "white" }, { color: "black" }, "-=1")
      .fromTo(
        burger,
        0.2,
        { opacity: 1, pointerEvents: "all" },
        { opacity: 0, pointerEvents: "none" },
        "-=1.4"
      )
      .fromTo(contact, 0.2, { color: "white" }, { color: "black" }, "-=1.1");

    contact.addEventListener("click", () => {
      tl.reversed() ? tl.play() : tl.reverse();
    });
  }

  componentDidMount() {
    this.activeNavLink();
    this.navSlide();
    this.contactSlide();
  }
  componentDidUpdate() {
    this.activeNavLink();
    this.navSlide();
    this.contactSlide();
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
          <div className="contact-open">
            <div className="mail">
              <h2>Mail</h2>
              <h3>sawizahmadi@gmail.com</h3>
            </div>
            <div className="phone">
              <h2>Phone</h2>
              <h3>+31 6 225 29 201</h3>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
