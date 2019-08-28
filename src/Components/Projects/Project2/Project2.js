import React from "react";
import "./Project2.css";

class Project2 extends React.Component {
  render() {
    return (
      <section className="page project2">
        <div className="hero1">
          <a href="https://roboc0de.github.io/destination-api/" target="_blank">
            <img
              id="project-img-left"
              className="hero1-img hero1-left"
              src={require("../../../Images/Destination1.png")}
              alt="destination project"
            />
            <img
              id="project-img-right"
              className="hero1-img hero1-right"
              src={require("../../../Images/Destination2.png")}
              alt="destination project"
            />
          </a>
        </div>
        <div className="details">
          <div className="title-git">
            <h1>Destination</h1>
            <a
              href="https://github.com/RoboC0de/destination-api"
              target="_blank"
            >
              <img
                className="github"
                src={require("../../../Images/github.png")}
                id="github Roboc0de"
              />
            </a>
          </div>

          <h2>Weather and Attractions</h2>
          <p>
            It shows you the weather and the local attractions of your travel
            destination.
          </p>
        </div>
      </section>
    );
  }
}

export default Project2;
