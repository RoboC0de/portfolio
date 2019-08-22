import React from "react";
import "./Landing.css";
import {
  TimelineMax,
  CSSPlugin,
  ScrollToPlugin,
  Draggable,
  Power2
} from "gsap/all";
import Typer from "../Typer/Typer";

class Landing extends React.Component {
  animation() {
    const hero = document.querySelector(".hero");
    const slider = document.querySelector(".slider");
    const headline = document.querySelector(".headline");

    const tl = new TimelineMax();
    tl.fromTo(
      hero,
      1,
      { height: "0%" },
      { height: "70%", ease: Power2.easeInOut }
    )
      .fromTo(
        hero,
        1.2,
        { width: "100%" },
        { width: "90%", ease: Power2.easeInOut }
      )
      .fromTo(
        slider,
        1.2,
        { y: "-100%" },
        { y: "0%", ease: Power2.easeInOut },
        "-=1.2"
      )
      .fromTo(
        headline,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=0.5"
      );
  }
  componentDidMount() {
    this.animation();
  }

  componentDidUpdate() {
    this.animation();
  }
  render() {
    return (
      <div>
        <section>
          <div className="hero">
            <img src={require("../../Images/LandingPageImg1.jpg")} />
            <Typer />
          </div>
        </section>

        <div className="slider" />
      </div>
    );
  }
}

export default Landing;
