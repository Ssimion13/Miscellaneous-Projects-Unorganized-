import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import mainBody from "./mainBody";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Resume from "./Resume/Resume";
import ResumePage from "./ResumePage";


class App extends Component {



  render() {

    return (
      <div className="mainBackground">
        <Navbar />
        <Switch>
        <Route exact path = "/" component = {mainBody} />
        <Route path="/About" component = {About} />
        <Route path="/Projects" component = {Projects} />
        <Route path="/Resume" component = {Resume} />
        <Route path="/ResumePage" component = {ResumePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
