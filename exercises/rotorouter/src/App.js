import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"


class App extends Component {
  constructor(){
  super();
  this.state = {

  }

  }




  render(){

    return(
      <div>
      < Navbar />
      <Switch>
      <Route exact path="/" component = {Home} />
      <Route path = "/About" component = {About} />
      <Route path = "/Contact" component = {Contact} />
      </Switch>
      < Footer />
      </div>

  )}

}

export default App;
