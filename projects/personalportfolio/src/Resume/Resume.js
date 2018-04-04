import React from "react";
import Title from "../Title";
import ResumeBody from "./ResumeBody"

function Resume () {
  return (
    <div className="body">
     <Title title="My Resume" image="https://www.site123.ca/wp-content/uploads/tasks-page.jpeg" color="#383838" />
     <ResumeBody />
    </div>
  )
}

export default Resume;
