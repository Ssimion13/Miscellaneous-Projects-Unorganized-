import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <Link className="links" to='/'> Home </Link>
      <Link className="links" to='/About'> About </Link>
      <Link className="links" to='Projects'> Projects </Link>
      <Link className="links" to='Contact'> Resume </Link>


    </div>
  )
}

export default Navbar;
