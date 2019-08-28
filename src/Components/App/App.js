import React from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
import About from "../About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route path="/" exact component={Landing} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/About" exact component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
