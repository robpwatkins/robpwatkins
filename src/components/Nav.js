import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  state = {
    color: 'rgba(255, 255, 255, 0.605)',
  }

  handleMouseEnter = () => {
    this.setState({ color: 'white' });
  }
  
  handleMouseLeave = () => {
    this.setState({ color: 'rgba(255, 255, 255, 0.404)' })
  }

  render() {
    return (
      <nav 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <ul>
          <NavLink 
            exact 
            to="/" 
            style={{color: `${this.state.color}`}}
            activeStyle={{color: "white", transform: "scale(1.5)"}}
            activeClassName="link-active"
            >
            <li>Home</li>
          </NavLink>
          <NavLink 
            to="/about" 
            style={{color: `${this.state.color}`}}
            activeStyle={{color: "white", transform: "scale(1.5)"}}
            activeClassName="link-active"
            >
            <li>About</li>
          </NavLink>
          <NavLink 
            to="/projects" 
            style={{color: `${this.state.color}`}}
            activeStyle={{color: "white", transform: "scale(1.5)"}}
            activeClassName="link-active"
            >
            <li>Projects</li>
          </NavLink>
          <NavLink 
            to="/blog" 
            style={{color: `${this.state.color}`}}
            activeStyle={{color: "white", transform: "scale(1.5)"}}
            activeClassName="link-active"
            >
            <li>Blog</li>
          </NavLink>
          <NavLink 
            to="/contact" 
            style={{color: `${this.state.color}`}}
            activeStyle={{color: "white", transform: "scale(1.5"}}
            activeClassName="link-active"
            >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    )
  }
}

export default Nav;