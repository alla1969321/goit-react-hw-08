import { useContacts } from '../../hooks';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { ContactSchema } from '../../schemas/contactSchema';
import { contactsOps } from '../../redux';
import { Box, Button } from '@mui/material';
import toast from 'react-hot-toast';

const EditContactForm = ({ name, number, id, onClose }) => {
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  const initialValues = {
    name,
    number,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values, { resetForm }) => {
      const [name, number] = Object.values(values);
      const validateName = contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim() &&
          contact.id !== id
      );
      const validateNumber = contacts.find(
        contact => contact.number === number && contact.id !== id
      );

      try {
        if (validateName) {
          throw new Error(`Name "${name}" is already used in contacts`);
        }
        if (validateNumber) {
          throw new Error(`Number ${number} is already saved in contacts`);
        }

        if (
          name.toLowerCase().trim() ===
            initialValues.name.toLowerCase().trim() &&
          number === initialValues.number
        ) {
          toast.error(`You need make changes before update`);

          return;
        }

        resetForm();
        const updatedContact = { id, ...values };

        dispatch(contactsOps.editContact(updatedContact));
        toast.success(`${name} was updated`);

        onClose();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Box width="95%">
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          variant="filled"
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          variant="filled"
          fullWidth
          id="number"
          name="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button
          variant="text"
          type="submit"
          sx={theme => ({
            boxShadow: `0 2px 1px ${
              theme.palette.mode === 'dark'
                ? 'rgba(0, 0, 0, 0.5)'
                : 'rgba(45, 45, 60, 0.2)'
            }, inset 0 1.5px 1px ${
              theme.palette.primary.light
            }, inset 0 -2px 1px ${theme.palette.primary.dark}`,
            color: 'white',
            backgroundColor: `primary.main`,
            transition:
              'backgroundColor 250ms cubicBezier(0.4, 0, 0.2, 1) 0ms, boxShadow 250ms cubicBezier(0.4, 0, 0.2, 1) 0ms, borderColor 250ms cubicBezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubicBezier(0.4, 0, 0.2, 1) 0ms',
            borderRadius: '8px',
            ':active': {
              backgroundColor: `${theme.palette.primary.dark}`,
              boxShadow: 'none',
              transform: 'scale(0.99)',
            },
          })}
        >
          Edit contact
        </Button>
      </form>
    </Box>
  );
};

export default EditContactForm;
