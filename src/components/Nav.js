import React, { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  // handleMouseMove = () => {
  //   this.state.navHovered &&
  //   this.setState({ color: 'white' });
  // }

  // handleClick = () => {
  //   this.setState({ color: 'rgba(255, 255, 255, 0.404)' });
  // }

  return (
    <nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // onMouseMove={this.handleMouseMove}
    >
      <ul>
        <NavLink 
          exact 
          to="/"
          // onClick={handleClick}
          className={isHovered ? 'nav-link hovered' : 'nav-link'}
          // style={{color: `${this.state.color}`}}
          activeStyle={{color: "white", transform: "scale(1.5)"}}
          activeClassName="link-active"
          >
          <li>Home</li>
        </NavLink>
        <NavLink 
          to="/about"
          // onClick={handleClick}
          className={isHovered ? 'nav-link hovered' : 'nav-link'}
          // style={{color: `${this.state.color}`}}
          activeStyle={{color: "white", transform: "scale(1.5)"}}
          activeClassName="link-active"
          >
          <li>About</li>
        </NavLink>
        <NavLink 
          to="/projects"
          // onClick={handleClick}
          className={isHovered ? 'nav-link hovered' : 'nav-link'}
          // style={{color: `${this.state.color}`}}
          activeStyle={{color: "white", transform: "scale(1.5)"}}
          activeClassName="link-active"
          >
          <li>Projects</li>
        </NavLink>
        {/* <NavLink 
          to="/blog"
          onClick={this.handleClick}
          style={{color: `${this.state.color}`}}
          activeStyle={{color: "white", transform: "scale(1.5)"}}
          activeClassName="link-active"
          >
          <li>Blog</li>
        </NavLink>
        <NavLink 
          to="/contact"
          onClick={this.handleClick}
          style={{color: `${this.state.color}`}}
          activeStyle={{color: "white", transform: "scale(1.5"}}
          activeClassName="link-active"
          >
          <li>Contact</li>
        </NavLink> */}
      </ul>
    </nav>
  )
}

export default Nav;