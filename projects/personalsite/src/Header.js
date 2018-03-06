import React from "react";
import {Link} from "react-router-dom"



function Header(){
  return (
    <div className = "header">
     <h2 className = "title" > Jeopardy </h2>
       <Link className = "link" to = "/"> Home </Link>
       <Link className = "link2" to = "/Rules"> Rules </Link>
       <Link className = "link3" to = "/Credits"> Credits </Link>
    </div>
  )
}

export default Header;
