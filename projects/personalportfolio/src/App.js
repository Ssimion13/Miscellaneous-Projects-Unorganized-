import React, { Component } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";
import Projects from "./Projects";
import About from "./About";


class App extends Component {


  render() {

    return (
      <div className="mainBackground">
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
