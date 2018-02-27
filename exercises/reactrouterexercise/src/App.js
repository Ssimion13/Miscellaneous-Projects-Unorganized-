import React from "react";
import NavBar from "./NavBar";
import Home from "./Home"
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./Footer";
import Contact from "./Contact";
import Services from "./Services";
import {Switch, Route, Link} from "react-router-dom";
import About from "./About";

const App = (props) => {
  return(
    <div>
     <Navbar />
     <Switch>
         <Route exact path ="/" component = {Home}/>
          <Route exact path = "/about" component = {About} />
          <Route exact path = "/contact" component = {Contact} />
          <Route exact path = "/services" component = {Services} />

     </Switch>
     <Footer />
    </div>
  )
}


export default App;
