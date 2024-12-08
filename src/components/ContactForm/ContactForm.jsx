import { useContacts } from '../../hooks';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';
import { ContactSchema } from '../../schemas/contactSchema';
import { contactsOps } from '../../redux';

import { Box, Button } from '@mui/material';
import toast from 'react-hot-toast';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values, { resetForm }) => {
      const [name, number] = Object.values(values);
      try {
        contacts.some(contact => {
          if (contact.name.toLowerCase() === name.toLowerCase()) {
            throw new Error(`Name "${name}" is already used in contacts`);
          }
          if (contact.number === number) {
            throw new Error(`Number ${number} is already saved in contacts`);
          }
        });

        dispatch(contactsOps.addContact(values));
        toast.success(`${values.name} was added to your contacts`);

        resetForm();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Box sx={{ width: { xs: '95%', sm: '85%', md: '70%' }, mb: 1 }}>
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
          variant="contained"
          type="submit"
          sx={theme => ({
            width: { xs: '170px' },
            boxShadow: `0 2px 1px ${
              theme.palette.mode === 'dark'
                ? 'rgba(0, 0, 0, 0.5)'
                : 'rgba(45, 45, 60, 0.2)'
            }, inset 0 1.5px 1px ${
              theme.palette.primary.light
            }, inset 0 -2px 1px ${theme.palette.primary.dark}`,
            color: theme.palette.mode === 'dark' && 'white',
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
          Add contact
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
