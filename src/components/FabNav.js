import React from 'react';
import { Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import './FabNav.css';

class FabNav extends React.Component {
  state = {
    clicked: false,
    height: '0',
    display: 'none'
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    this.state.clicked ? 
      this.setState({ 
        height: "100%",
        display: "flex"
      }) :
      this.setState({ 
        height: "0",
        display: "none"
      })
  }

  render() {
    return (
      <div className="fab-nav-box">
        <div className="background" 
        style={{height: `${this.state.height}`}}>
          <ul 
            style={{display: `${this.state.display}`}}>
            <li className="home">Home</li>
            <li className="about">About</li>
            <li className="projects">Projects</li>
            <li className="blog">Blog</li>
            <li className="contact">Contact</li>
          </ul>
        </div>
        <Fab onClick={this.handleClick}>
          <Add />
        </Fab>
      </div>
    )
  }
}

export default FabNav;