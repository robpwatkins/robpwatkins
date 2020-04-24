import React from 'react';
import { Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import './FabNav.css';
import { NavLink } from 'react-router-dom';

class FabNav extends React.Component {
  state = {
    clicked: false,
    height: '0',
    display: 'none',
    transform: 'none'
  }

  handleClick = () => {
    const newClicked = !this.state.clicked;
    newClicked ? 
      this.setState({ 
        height: '100%',
        display: 'flex',
        transform: 'rotate(45deg)'
      }) :
      this.setState({ 
        height: '0',
        display: 'none',
        transform: 'none'
      })
    this.setState({
      clicked: newClicked
    })
  }

  render() {
    return (
      <div className="fab-nav-box">
        <div className="background" 
          style={{height: `${this.state.height}`}}>
          <ul 
            style={{display: `${this.state.display}`}}>
            <NavLink 
              exact
              to="/"
              onClick={this.handleClick}
              activeStyle={{transform: "scale(1.5)"}} 
              >
              <li>Home</li>
            </NavLink>
            <NavLink 
              to="/about"
              onClick={this.handleClick}
              activeStyle={{transform: "scale(1.5)"}} 
              >
              <li>About</li>
            </NavLink>
            <NavLink 
              to="/projects"
              onClick={this.handleClick}
              activeStyle={{transform: "scale(1.5)"}} 
              >
              <li>Projects</li>
            </NavLink>
            <NavLink 
              to="/blog"
              onClick={this.handleClick}
              activeStyle={{transform: "scale(1.5)"}} 
              >
              <li>Blog</li>
            </NavLink>
            <NavLink 
              to="/contact"
              onClick={this.handleClick}
              activeStyle={{transform: "scale(1.5)"}} 
              >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <Fab className="fabby" onClick={this.handleClick}>
          <Add className="plusSign" 
            style={{
              transform: `${this.state.transform}`,
              transition: "transform .175s ease-in-out"
            }}
          />
        </Fab>
      </div>
    )
  }
}

export default FabNav;