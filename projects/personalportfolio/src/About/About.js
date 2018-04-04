import React from "react";
import Title from "../Title";
import AboutBody from "./AboutBody"


function About (){
  return (
    <div className="body">
      <Title title="About Me" image="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5244707255001_5214913279001-vs.jpg?pubId=5104226627001&videoId=5214913279001" color="white" />
      <AboutBody />
    </div>
  )

}

export default About;
