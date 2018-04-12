import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageOne from "./PageOne";
import Home from "./Home";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar / >
        <Switch>

        <Route path ="/PageOne" component = {PageOne} />
        <Route Path = "/" component = {Home} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
