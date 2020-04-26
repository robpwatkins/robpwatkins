import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
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
    color: 'hotpink',
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3, 4)
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
      <div 
        onClick={handleOpen} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '350px', 
          height: '275px', 
          justifyContent: 'center',
          alignItems: 'center',
          color: 'hotpink',
          background: 'white'}}>
            Yup.
        </div>
      <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        // closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        {/* <Fade in={open}> */}
          <div className={classes.paper}>
            <h2>YUUUUUUUUP</h2>
          </div>
        {/* </Fade> */}
      </Modal>
    </div>
  )
}

export default ProjectModal;