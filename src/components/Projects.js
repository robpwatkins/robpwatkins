import React from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import { Grid } from '@material-ui/core';
import ProjectImg1 from '../img/REPLACEproject-thumb1.png';
import ProjectImg2 from '../img/PuppyAPI.png';
import ProjectImg3 from '../img/Tequila512.png';
import ProjectImg4 from '../img/BuddhaBlessings.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-nav">
          <ul>
            <li className="react-li">React</li>
            <li>Node/MySQL</li>
            <li>Full Stack</li>
          </ul>
        </div>
        <Grid 
          container 
          direction="row"
          justify="center"
          spacing={2}
          // wrap
          style={{width: '75%', height: 'auto'}}
          className="projects-grid"
          >
          <Grid item xs={12} sm={6} xl={3} className="projects-item">
            <ProjectModal projectImg={ProjectImg2} projectName="Fetchable API" />
          </Grid>
          <Grid item xs={12} sm={6} xl={3} className="projects-item">
            <ProjectModal projectImg={ProjectImg1} projectName="Redux Thunk" />
          </Grid>
          <Grid item xs={12} sm={6} xl={3} className="projects-item">
            <ProjectModal projectImg={ProjectImg3} projectName="Website Rebuild" />
          </Grid>
          <Grid item xs={12} sm={6} xl={3} className="projects-item">
            <ProjectModal projectImg={ProjectImg4} projectName="Buddha Blessings" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Projects;