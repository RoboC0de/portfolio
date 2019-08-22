import React from "react";
import "./Project1.css";

class Project1 extends React.Component {
  render() {
    return (
      <section className="page project1">
        <div className="hero1">
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
        </div>
        <div className="details">
          <h1>Ta'aam</h1>
          <h2>Project on Yelp API</h2>
          <p>It allows you to search for a bussiness in a location.</p>
        </div>
      </section>
    );
  }
}

export default Project1;
