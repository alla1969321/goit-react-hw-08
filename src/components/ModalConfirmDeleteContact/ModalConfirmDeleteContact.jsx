import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { MdDeleteForever } from "react-icons/md";
import css from "./ModalConfirmDeleteContact.module.css";

export default function ModalConfirmDeleteContact({ id }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 210,
    bgcolor: "background.paper",
    boxShadow: 14,
    borderRadius: "10px",
    p: 4,
    textAlign: "center",
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlDeleteContact = () => {
    setOpen(false);
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.modalContainer}>
      <Button className={css.openBtn} onClick={handleOpen}>
        <MdDeleteForever className={css.trashBtn} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you absolutely sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This action cannot be undone. This will permanently delete your
            contact
          </Typography>

          <div className={css.btnContainer}>
            <Button className={css.btnYes} onClick={handlDeleteContact}>
              Yes
            </Button>
            <Button className={css.btnNo} onClick={handleClose}>
              No
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}