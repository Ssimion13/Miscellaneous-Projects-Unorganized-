import React from "react";
import {Switch} from "react-router-dom";

const Services = (props) => {
  return(
    <div>
      <h2> Services </h2>
      <Link to="/services/dog-walking" > Dog Walking </Link>
      <Link to="/services/lawn-care"> Lawn Care </Link>
      <Link to="/services/toilet-unclogging"> Toilet Unclogging </Link>
      <Switch>
         <Route path="/services/:ServiceID" component={ServiceDetail}/>

      </Switch>
    </div>
  )
}
