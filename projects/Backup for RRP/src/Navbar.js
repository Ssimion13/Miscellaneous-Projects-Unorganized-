import React from "react";
import { Link } from "react-router-dom"

function Navbar (props){

  return(
    <div className = "heading">
    <h2 className = "title"> Thrift Store Blackjack </h2>
      <Link className = "link" to="/"> Home </Link>
      <Link className = "link2" to="/About"> About </Link>
      <Link className = "link3" to="/Contact"> Contact </Link>


    </div>
  )




}


export default Navbar;
