import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registr } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import * as Yup from "yup";
export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(registr(values))
      .unwrap()
      .then(() => {
        toast.success("Success");
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Oops, something went wrong. Try again");
      });
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div className={css.registrationContainer}>
      <h2 className={css.registrationTitle}>Registration Form</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validation}
      >
        <Form>
          <div className={css.inputContainer}>
            <div className={css.nameContainer}>
              <label htmlFor={nameId}>Name</label>
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>
            <Field name="name" type="text" id={nameId} />
          </div>
          <div className={css.inputContainer}>
            <div className={css.nameContainer}>
              <label htmlFor={emailId}>Email</label>
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </div>

            <Field name="email" type="text" id={emailId} />
          </div>
          <div className={css.inputContainer}>
            <div className={css.nameContainer}>
              <label htmlFor={passwordId}>Password</label>
              <ErrorMessage
                className={css.error}
                name="password"
                component="span"
              />
            </div>
            <Field name="password" type="password" id={passwordId} />
          </div>
          <button className={css.registrBtn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}