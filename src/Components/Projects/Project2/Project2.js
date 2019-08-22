import React from "react";
import "./Project2.css";

class Project2 extends React.Component {
  render() {
    return (
      <section className="page project2">
        <div className="hero1">
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
        </div>
        <div className="details">
          <h1>Destination</h1>
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
