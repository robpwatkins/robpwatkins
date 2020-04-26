import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();
//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`
//   }
// }

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: 450,
  }
}))

const SimpleModal = () => {
  const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <h1>SimpleModal, here.</h1>
      <Button variant="contained" onClick={handleOpen}>Click ME!</Button>
      <Modal
        aria-labelledby="simple modal title"
        aria-describedby="simple modal description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2>Simple React Modal</h2>
          <p>simpl ereact p</p>
        </div>
      </Modal>
    </div>
  )
}

export default SimpleModal;