import React from "react";
import "./About.css";
import Occupation1 from "./Occupations/Occupation1";
import Occupation2 from "./Occupations/Occupation2";
import Occupation3 from "./Occupations/Occupation3";
import Occupation4 from "./Occupations/Occupation4";
import Occupation5 from "./Occupations/Occupation5";

import hoverEffect from "hover-effect";
import { TimelineMax } from "gsap/all";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    return (
      <div className="portfolio">
        <div className="imgSection">
          <div className="aboutImg">
            <img src={require("../../Images/side2-new.png")} />
          </div>
          <p>
            'My strongest ability, is my ability to learn.
            <br />I learn fast and a lot.' <br />
            <br /> Sawiz Ahmadi
          </p>
        </div>
        <div className="info-section">
          <Occupation5 />
          <Occupation4 />
          <Occupation3 />
          <Occupation2 />
          <Occupation1 />
        </div>
      </div>
    );
  }
}

export default About;
