import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container maxWidth="x1" align="center" sx={{ pt: 8 }}>
        <Suspense fallback={null}>{children}</Suspense>
      </Container>
    </>
  );
};

export default Layout;
