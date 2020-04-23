import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li className="home">Home</li>
        </Link>
        <Link to="/about">
          <li className="about">About</li>
        </Link>
        <Link to="/projects">
          <li className="projects">Projects</li>
        </Link>
        <Link to="/blog">
          <li className="blog">Blog</li>
        </Link>
        <Link to="/contact">
          <li className="contact">Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;