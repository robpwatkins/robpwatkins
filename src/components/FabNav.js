import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import './FabNav.css';
import { NavLink } from 'react-router-dom';

const FabNav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [height, setHeight] = useState('0');
  const [display, setDisplay] = useState('none');
  const [transform, setTransform] = useState('none');
  // state = {
  //   clicked: false,
  //   height: '0',
  //   display: 'none',
  //   transform: 'none'
  // }

  const handleClick = () => {
    let newIsClicked = !isClicked;
    if (newIsClicked) {
      setHeight('100%')
      setDisplay('flex')
      setTransform('rotate(45deg')
    } else {
      setHeight('0');
      setDisplay('none');
      setTransform('none');
    }
    setIsClicked(newIsClicked);
  }

  return (
    <div className="fab-nav-box">
      <div className="background" 
        style={{height: `${height}`}}>
        <ul 
          style={{display: `${display}`}}>
          <NavLink 
            exact
            to="/"
            onClick={handleClick}
            activeStyle={{transform: "scale(1.5)"}} 
            >
            <li>Home</li>
          </NavLink>
          <NavLink 
            to="/about"
            onClick={handleClick}
            activeStyle={{transform: "scale(1.5)"}} 
            >
            <li>About</li>
          </NavLink>
          <NavLink 
            to="/projects"
            onClick={handleClick}
            activeStyle={{transform: "scale(1.5)"}} 
            >
            <li>Projects</li>
          </NavLink>
          <NavLink 
            to="/blog"
            onClick={handleClick}
            activeStyle={{transform: "scale(1.5)"}} 
            >
            <li>Blog</li>
          </NavLink>
          <NavLink 
            to="/contact"
            onClick={handleClick}
            activeStyle={{transform: "scale(1.5)"}} 
            >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <Fab className="fabby" onClick={handleClick}>
        <Add className="plusSign" 
          style={{
            transform: `${transform}`,
            transition: "transform .175s ease-in-out"
          }}
        />
      </Fab>
    </div>
  )
}

export default FabNav;