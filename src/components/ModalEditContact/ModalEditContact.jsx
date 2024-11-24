import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import css from "./ModalEditContact.module.css";
import { editContact } from "../../redux/contacts/operations";

import { Field, Form, Formik } from "formik";

export default function ModalEditContact({ name, number, id }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 14,
    borderRadius: "10px",
    p: 3,
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlEditContact = (values, actions) => {
    setOpen(false);
    dispatch(editContact(values));
    actions.resetForm();
  };

  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name,
    number,
    id,
  };

  return (
    <div className={css.modalContainer}>
      <Button className={css.openBtn} onClick={handleOpen}>
        <MdModeEdit className={css.editBtn} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Edit contact</h2>
          <Formik initialValues={initialValues} onSubmit={handlEditContact}>
            <Form className={css.formContainer}>
              <div className={css.inputContainer}>
                <label htmlFor={nameId}>Name</label>
                <Field
                  className={css.inputFormEdit}
                  name="name"
                  type="text"
                  id={nameId}
                />
              </div>
              <div className={css.inputContainer}>
                <label htmlFor={numberId}>Number</label>
                <Field
                  className={css.inputFormEdit}
                  name="number"
                  type="text"
                  id={numberId}
                />
              </div>
              <div className={css.btnContainer}>
                <Button className={css.btnYes} type="submit">
                  Save
                </Button>
                <Button className={css.btnNo} onClick={handleClose}>
                  Close
                </Button>
              </div>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}