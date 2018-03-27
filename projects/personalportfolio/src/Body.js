import React from "react";
import {Link} from "react-router-dom"

function Body() {
  return (

    <div className = "body">
      <div className="title">
        <h1 className="Name"> Scott Simion </h1>
      </div>

      <div className="thumbnailDiv">

       <div className="thumbnailHolder">

         <div className="thumbnail">
           <Link to='/About'>
           <img className="thumbnailImage" src="http://jaredryanwork.space/static/media/aboutMeIcon.9ff65225.jpg" />
           <div> Click here to learn more about me. </div>
           </Link>
         </div>

         <div className="thumbnail">
           <Link to='/Projects' >
           <img className="thumbnailImage" src='http://jaredryanwork.space/static/media/resumeHomeIcon.85a721f4.png' />
           <div> Here are a list of projects I have worked on! </div>
           </Link>
         </div>

         <div className="thumbnail">
             <Link to='/Resume' >
               <img className="thumbnailImage" src='http://trantor.sheridanc.on.ca/student/nguypatr/resume%20button.png' />
               <div>  Here is my Resume! </div>
             </Link>
         </div>

       </div>
      </div>
    </div>
  )
}

export default Body;
