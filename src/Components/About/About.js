import React from "react";
import "./About.css";
import Occupation1 from "./Occupations/Occupation1";
import Occupation2 from "./Occupations/Occupation2";
import Occupation3 from "./Occupations/Occupation3";
import Occupation4 from "./Occupations/Occupation4";
import Occupation5 from "./Occupations/Occupation5";

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
          <div className="skill-section">
            <div className="skills list-section">
              <h1>Skills</h1>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Html/ CSS</li>
                <li>Sass/ less</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
            <div className="languages list-section">
              <h1>Languages</h1>
              <ol>
                <li>Dutch (Native)</li>
                <li>English (Fluent)</li>
                <li>Dari (Fluent)</li>
                <li>Arabic (Fluent)</li>
              </ol>
            </div>
          </div>
          <div className="occupations">
            <Occupation5 />
            <Occupation4 />
            <Occupation3 />
            <Occupation2 />
            <Occupation1 />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
