import EditContactForm from '../EditContactForm/EditContactForm';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({
  openInfo,
  closeInfo,
  openDeleteModal,
  openEditModal,
  closeDeleteModal,
  closeEditModal,
  deleteContact,
  name,
  number,
  id,
}) => {
  return (
    <>
      <Dialog
        fullWidth
        open={openEditModal}
        keepMounted
        onClose={closeEditModal}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          variant="h6"
          id="alert-dialog-title"
          sx={{ fontSize: { xs: '16px', sm: '20px' } }}
        >
          Do u want edit {name}?
        </DialogTitle>
        <DialogContent>
          <EditContactForm
            name={name}
            number={number}
            id={id}
            onClose={closeEditModal}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditModal}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDeleteModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeDeleteModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Do u want delete {name}?</DialogTitle>

        <DialogActions>
          <Button onClick={deleteContact}>Yes</Button>
          <Button onClick={closeDeleteModal}>No</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth
        open={openInfo}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeInfo}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle variant="h6" sx={{ fontSize: '20px' }}>
          Contact information
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ fontSize: '20px' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                color: 'primary.main',
              }}
            >
              <span>Name: {name}</span> <span>Number: {number}</span>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeInfo}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
