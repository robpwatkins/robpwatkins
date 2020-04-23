import React from 'react';
import { Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import './FabNav.css';
import { Link } from 'react-router-dom';

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
          style={{height: `${this.state.height}`
          }}>
          <ul 
            style={{display: `${this.state.display}`
            }}>
            <Link onClick={this.handleClick} to="/">
              <li className="home">Home</li>
            </Link>
            <Link onClick={this.handleClick} to="/about">
              <li className="about">About</li>
            </Link>
            <Link onClick={this.handleClick} to="/projects">
              <li className="projects">Projects</li>
            </Link>
            <Link onClick={this.handleClick} to="/blog">
              <li className="blog">Blog</li>
            </Link>
            <Link onClick={this.handleClick} to="/contact">
              <li className="contact">Contact</li>
            </Link>
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