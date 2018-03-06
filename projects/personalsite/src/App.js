import React, {Component} from "react";
import axios from "axios"
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Rules from "./Rules";
import Credits from "./Credits";


class App extends Component {

render(){
  return(
    <div>
     <Header/>
     <Switch>
       <Route exact path ="/" component = {Home} />
       <Route path = "/Rules" component = {Rules} />
       <Route path ="/Credits" component = {Credits} />
     </Switch>
     <Footer  />
    </div>
  )



  }
}


export default App;
