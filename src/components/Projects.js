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
          style={{width: '85%', height: '572px'}}
          className="projects-grid"
          >
          <Grid item xs={12} sm={6} md={4} lg={3} className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className="projects-item">
            <ProjectModal />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className="projects-item">
            <ProjectModal />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Projects;