import React from "react";
import "./Project3.css";

class Project3 extends React.Component {
  render() {
    return (
      <section className="page project3">
        <div className="hero1">
          <img
            id="project-img-left"
            className="hero1-img hero1-left"
            src={require("../../../Images/Playlistify1.png")}
            alt="playlistify project"
          />
          <img
            id="project-img-right"
            className="hero1-img hero1-right"
            src={require("../../../Images/Playlistify2.png")}
            alt="playlistify project"
          />
        </div>
        <div className="details">
          <div className="title-git">
            <h1>Playlistify</h1>

            <a href="https://github.com/RoboC0de/playlistify1" target="_blank">
              <img
                className="github"
                src={require("../../../Images/github.png")}
                id="github Roboc0de"
              />
            </a>
          </div>

          <h2>Project on Spotify API</h2>
          <p>
            It allows you to create a playlist and add it to you Spotify
            account.
          </p>
        </div>
      </section>
    );
  }
}

export default Project3;
