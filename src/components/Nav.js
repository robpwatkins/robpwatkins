import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  state = {
    color: 'rgba(255, 255, 255, 0.404)'
  }

  handleMouseEnter = () => {
    this.setState({ color: 'white' });
  }

  handleMouseLeave = () => {
    this.setState({ color: 'rgba(255, 255, 255, 0.404)'})
  }

  render() {
    return (
      <nav 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <ul>
          <Link to="/" style={{color: `${this.state.color}`}}>
            <li className="home">Home</li>
          </Link>
          <Link to="/about"style={{color: `${this.state.color}`}}>
            <li className="about">About</li>
          </Link>
          <Link to="/projects"style={{color: `${this.state.color}`}}>
            <li className="projects">Projects</li>
          </Link>
          <Link to="/blog"style={{color: `${this.state.color}`}}>
            <li className="blog">Blog</li>
          </Link>
          <Link to="/contact"style={{color: `${this.state.color}`}}>
            <li className="contact">Contact</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav;