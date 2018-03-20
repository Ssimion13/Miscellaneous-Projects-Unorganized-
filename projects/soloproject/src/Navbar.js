import React from "react"
import {Link} from "react-router-dom"

function NavBar(props){
  return(
  <div className = "navbar">
    <Link className="link" to="/"> Home </Link>
    <Link className="link" to="/Doggos"> Doggos </Link>
    <Link className="link" to="/DadJokes"> Dad Jokes! </Link>
    <Link className="link" to= "/RickAstley"> ???? </Link>
  </div>
  )
}

export default NavBar;
