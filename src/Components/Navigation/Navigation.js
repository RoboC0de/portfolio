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

  navSlide() {}

  componentDidMount() {
    this.activeNavLink();
  }
  componentDidUpdate() {
    this.activeNavLink();
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
            <li id="contact">Contact</li>
          </ul>
          <div className="burger">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
