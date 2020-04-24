import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-nav">
        <ul>
          <li className="react-li">React</li>
          <li>Node/MySQL</li>
          <li>Something</li>
        </ul>
      </div>
      <div className="projects-box">
        <div className="project project1"></div>
        <div className="project project2"></div>
        <div className="project project3"></div>
        <div className="project project4"></div>
      </div>
    </div>
  )
}

export default Projects;