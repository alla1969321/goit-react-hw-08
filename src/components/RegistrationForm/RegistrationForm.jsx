import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authOps } from '../../redux';
import { Box, Button, TextField } from '@mui/material';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]{1}/, 'First symbol must be letter')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .matches(
      /([a-zA-Z]\w+[0-9])/,
      'The password must consist of numbers and letters'
    )
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: registerUserSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(authOps.register(values));
      resetForm();
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
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          variant="filled"
          fullWidth
          id="password"
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegistrationForm;
