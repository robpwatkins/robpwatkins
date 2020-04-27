import React from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import { Grid } from '@material-ui/core';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-nav">
          <ul>
            <li className="all-li">All</li>
            <li>React</li>
            <li>Node/MySQL</li>
            <li>Full Stack</li>
          </ul>
        </div>
        <Grid 
          container 
          direction="row"
          justify="center" 
          spacing={3}
          style={{width: '95vw', height: '76vh'}}
          className="projects-grid"
          >
          <Grid item className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item className="projects-item">
            <ProjectModal />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Projects;