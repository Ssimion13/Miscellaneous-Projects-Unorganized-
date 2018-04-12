import React from "react";
import {Link} from "react-router-dom"
import DownloadLink from "react-download-link";
import Resume from "./Resume.docx"

function ResumeBody (){
  return (
    <div className="resumeBody">
      <div className = "downloadButtonDiv">
        <div className="resumeDownloadButton">
          <Link  className="buttonText"  to="../ResumePage"> View My Resume </Link>
        </div>
        <div className ="resumeDownloadButton">
          <a  className="buttonText" href={Resume} download="Resume.docx"> Download </a>
        </div>
      </div>
    </div>
  )
}

export default ResumeBody;
