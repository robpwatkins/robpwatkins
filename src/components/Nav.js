import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="home">Home</li>
        <li className="about">About</li>
        <li className="projects">Projects</li>
        <li className="blog">Blog</li>
        <li className="contact">Contact</li>
      </ul>
    </nav>
  )
}

export default Nav;