import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import Layout from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth, useColorTheme } from '../hooks';
import { authOps } from '../redux';

import { CssBaseline, ThemeProvider, Typography } from '@mui/material';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  const { theme } = useColorTheme();

  useEffect(() => {
    dispatch(authOps.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Typography
      component="h3"
      variant="h6"
      sx={{ textAlign: 'center', pt: 3, color: 'primary.main' }}
    >
      Refreshing user...
    </Typography>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
