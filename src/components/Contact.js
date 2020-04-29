import React from 'react';
import './Contact.css';
import { TextField, Button } from '@material-ui/core';
import { withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: grey
  }
})

const Contact = () => {
  // const classes = useStyles();

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
            <ThemeProvider theme={theme}>
              <form action="">
                <TextField 
                  color="primary"
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
                  rows={11}
                  variant="outlined"
                  ></TextField>
                <Button
                  variant="contained"
                  style={{width: "15%", marginTop: "20px"}}
                  >Send</Button>
              </form>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;