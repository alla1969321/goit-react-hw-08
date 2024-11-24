import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Too Short!")
      .max(9, "Too Long!")
      .required("Required"),
  });

  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.formContainer}>
        <div className={css.formContainerItem}>
          <div className={css.errorContainer}>
            <label htmlFor={nameId}>Name</label>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <Field
            className={css.inputFormName}
            type="text"
            name="name"
            id={nameId}
          />
        </div>
        <div className={css.formContainerItem}>
          <div className={css.errorContainer}>
            <label htmlFor={numberId}>Number</label>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <Field
            className={css.inputFormNumber}
            type="number"
            name="number"
            id={numberId}
          />
        </div>
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}