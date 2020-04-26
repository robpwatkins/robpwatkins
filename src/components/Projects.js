import React from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

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
        <ProjectModal />
      </div>
    </div>
  )
}

export default Projects;