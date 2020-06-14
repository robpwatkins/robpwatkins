import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import { Grid } from '@material-ui/core';
// import ProjectImg2 from '../img/PuppyAPI.png';
import ProjectImg1 from '../img/ReactSolitaire.png';
import ProjectImg2 from '../img/SmallBusiness.png';
import ProjectImg3 from '../img/Tequila512.png';
// import ProjectImg4 from '../img/BuddhaBlessings.png';

const Projects = () => {

  // const handleClick = (event) => {
  //   const navClicked = event.currentTarget.getAttribute('value');
  //   this.setState({ projectType: navClicked })
  // }

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-nav">
          {/* <ul>
            <li 
              value="all" 
              onClick={(event) => this.handleClick(event)}
              style={{color: `${this.state.projectType === 'all' ? 'white' : ''}`}}
              >
                All
            </li>
            <li 
              value="react" 
              onClick={(event) => this.handleClick(event)}
              style={{color: `${this.state.projectType === 'react' ? 'white' : ''}`}}
              >
                React
            </li>
            <li 
              value="static" 
              onClick={(event) => this.handleClick(event)}
              style={{color: `${this.state.projectType === 'static' ? 'white' : ''}`}}
              >
                Static
            </li>
            <li 
              value="javascript" 
              onClick={(event) => this.handleClick(event)}
              style={{color: `${this.state.projectType === 'javascript' ? 'white' : ''}`}}
              >
                JavaScript
            </li>
          </ul> */}
        </div>
        {/* {this.state.projectType === 'all' && */}
          <Grid 
            container 
            justify="center"
            spacing={2}
            // wrap
            style={{width: '75%', height: 'auto'}}
            className="projects-grid"
            >
            <Grid item xs={12} sm={6} xl={3} className="projects-item">
              <ProjectModal 
                projectImg={ProjectImg1} 
                projectName="Solitaire w/ Hooks" 
                blurb="Classic solitaire game built completely from scratch using hooks."
                link="https://robpwatkins.github.io/solitaire-final/"  
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3} className="projects-item">
              <ProjectModal 
                projectImg={ProjectImg2} 
                projectName="Redux Small Business App" 
                blurb="Example of a small business app with global state management using Redux and cookies to maintain logged-in state."
                link="https://robpwatkins.github.io/small-business" 
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3} className="projects-item">
              <ProjectModal 
                projectImg={ProjectImg3} 
                projectName="Website Rebuild"
                blurb="An exercise in recreating a live website visually to resemble it as precicely as possible (original: www.tequila512.com)."
                link="https://robpwatkins.github.io/ACA_web101_Rob_Watkins/src/checkpoint-2/landing.checkpoint-2-2.html"
            />
            </Grid>
            {/* <Grid item xs={12} sm={6} xl={3} className="projects-item">
              <ProjectModal projectImg={ProjectImg4} projectName="Click Counter" />
            </Grid> */}
          </Grid>
        {/* } */}
        {/* {
          this.state.projectType === 'react' &&
          <Grid 
            container 
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
          </Grid>
        }
        {
          this.state.projectType === 'static' &&
          <Grid 
            container 
            justify="center"
            spacing={2}
            // wrap
            style={{width: '75%', height: 'auto'}}
            className="projects-grid"
            >
            <Grid item xs={12} sm={6} xl={3} className="projects-item">
              <ProjectModal projectImg={ProjectImg3} projectName="Website Rebuild" />
            </Grid>
          </Grid>
        }
        {
          this.state.projectType === 'javascript' &&
          <Grid 
            container 
            justify="center"
            spacing={2}
            // wrap
            style={{width: '75%', height: 'auto'}}
            className="projects-grid"
            >
            <Grid item xs={12} sm={6} xl={3} className="projects-item">
              <ProjectModal projectImg={ProjectImg4} projectName="Buddha Blessings" />
            </Grid>
          </Grid>
        } */}
      </div>
    </div>
  )
}

export default Projects;