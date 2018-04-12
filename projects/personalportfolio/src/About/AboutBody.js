import React from "react";
import ScottSuit from "./ScottSuit.jpg"

function AboutBody (){
  return (
    <div className="aboutBodies">
      <div className="personalInformation">
        <div className="infoDivider">
          <img className="portrait" src={ScottSuit} />
          <div className="contactInfo">
            <h4> Email: ScottSimion@gmail.com </h4>
            <h5> Telephone: (561) 632-9726 </h5>
          </div>
        </div>
      </div>
    <div className ="aboutProfile"> About Me </div>

    </div>
  )
}

export default AboutBody;
