import React from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
function ProjectBody (){

  return (
    <div className="projectDiv">
        <div className="projects">
          <MuiThemeProvider>
          <ProjectOne />
          </MuiThemeProvider>
          <MuiThemeProvider>
          <ProjectTwo />
          </MuiThemeProvider>

        </div>
      </div>
  )
}

export default ProjectBody;
