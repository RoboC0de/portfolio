import React from "react";
import "./Project1.css";

class Project1 extends React.Component {
  render() {
    return (
      <section className="page project1">
        <div className="hero1">
          <a href="https://roboc0de.github.io/ta-aam/" target="_blank">
            <img
              id="project-img-left"
              className="hero1-img hero1-left"
              src={require("../../../Images/Ta-aam1.png")}
              alt="ta-aam project"
            />
            <img
              id="project-img-right"
              className="hero1-img hero1-right"
              src={require("../../../Images/Ta-aam2.png")}
              alt="ta-aam project"
            />
          </a>
        </div>
        <div className="details">
          <div className="title-git">
            <h1>Ta'aam</h1>
            <a href="https://github.com/RoboC0de/ta-aam" target="_blank">
              <img
                className="github"
                src={require("../../../Images/github.png")}
                id="github Roboc0de"
              />
            </a>
          </div>

          <h2>Project on Yelp API</h2>
          <p>It allows you to search for a bussiness in a location.</p>
        </div>
      </section>
    );
  }
}

export default Project1;
