import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function NavBar(props){
  return(
  <header className = "Navbar">
    <Link to="/"> Home </Link>
    <Link to="/about"> About </Link>
    <Link to="/contact"> contact </Link>
    <Link to= "/services"> services </Link>
  )
}

export default NavBar;
