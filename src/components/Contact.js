import React from 'react';
import './Contact.css';
import { TextField, Button } from '@material-ui/core';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="postcard-container">
        <div className="postcard">
          <div className="postcard-left">
            <div className="mountain-man">
              <div className="mountain-man-overlay"></div>
            </div>
          </div>
          <div className="postcard-right">
            <form action="">
              <TextField 
                label="Name"
                style={{marginBottom: "5px"}}
                ></TextField>
              <TextField 
                style={{marginBottom: "45px"}} 
                label="Email"
                ></TextField>
              <TextField 
                label="Message" 
                multiline 
                rows={13}
                variant="outlined"
                ></TextField>
              <Button
                variant="contained"
                style={{width: "15%", marginTop: "20px"}}
                >Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;