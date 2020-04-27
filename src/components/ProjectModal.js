import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';
import '../components/ProjectModal.css';
import ProjectImg from '../img/REPLACEproject-thumb1.png';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '75vw',
    height: '95vh',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'cover',
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 3, 4)
  }
}))

const ProjectModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <div className="background-thumb">
        <div className="project-thumb">
          <Button 
            variant="contained"
            onClick={handleOpen}
            >
              VIEW SITE
          </Button>
        </div>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        >
        <div className={classes.paper}>
          <div className="modal-content">
            <img src={ProjectImg} alt=""/>
            <div className="project-info">
              <h2>Project 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo nobis dolores maxime debitis laboriosam molestias, deleniti unde sint cupiditate ratione esse iure amet repellendus quisquam omnis et, possimus sit.</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ProjectModal;