import React from 'react';
import { Fab } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import './FabNav.css';

class FabNav extends React.Component {
  state = {
    clicked: false,
    height: '0'
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    this.state.clicked ? 
      this.setState({ height: "100%"}) :
      this.setState({height: "0"})
  }

  render() {
    return (
      <div className="fab-nav-box">
        <div className="background" 
        style={{height: `${this.state.height}`}}></div>
        <Fab onClick={this.handleClick}>
          <Add />
        </Fab>
      </div>
    )
  }
}

export default FabNav;