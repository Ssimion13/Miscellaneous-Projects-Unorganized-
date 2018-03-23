import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Doggos from "./Doggos";
import RickAstley from "./RickAstley";
import DadJokes from "./DadJokes";
import DoggoFavs from "./DoggoFavs"
import dadJokeFavs from "./dadJokeFavs"



class App extends Component {
  render() {
    return (
      <div className="app">
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/Doggos" component = {Doggos} />
        <Route path = "/DadJokes" component = {DadJokes} />
        <Route path = "/RickAstley" component = {RickAstley} />
        <Route path = "/DoggoFavs" component = {DoggoFavs} />
        <Route path = "/dadJokeFavs" component = {dadJokeFavs} />
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
