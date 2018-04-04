import React from "react";
import {Link} from "react-router-dom"
import Title from "./Title"

function mainBody() {
  return (
      <div className = "body">
        <Title title="Scott Simion" image="http://igazabolszerelem.hu/images/images/959762414548d2b39f33ef.jpg" color="white"/>
        <div className="thumbnailDiv">

         <div className="thumbnailHolder">

           <div className="thumbnail">
             <Link to='/About'>
             <img className="thumbnailImage" src="http://jaredryanwork.space/static/media/aboutMeIcon.9ff65225.jpg" />
             <div className="anchorText"> Click here to learn <br/> more about me. </div>
             </Link>
           </div>

           <div className="thumbnail">
             <Link to='/Projects' >
             <img className="thumbnailImage" src='http://jaredryanwork.space/static/media/resumeHomeIcon.85a721f4.png' />
             <div className="anchorText"> Here are a list of projects <br/> I have worked on! </div>
             </Link>
           </div>

           <div className="thumbnail">
           
               <Link to='/Resume' >
                 <img className="thumbnailImage" src='http://trantor.sheridanc.on.ca/student/nguypatr/resume%20button.png' />
                 <div className="anchorText">  Here is my Resume! </div>
               </Link>
           </div>

         </div>
        </div>
        </div>
  )
}

export default mainBody;
