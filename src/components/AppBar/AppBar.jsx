import { useAuth } from '../../hooks';
import ResponsiveAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import MobileMenu from '../MobileMenu/MobileMenu';
import AppBarText from '../AppBarText/AppBarText';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ResponsiveAppBar position="fixed">
      <Toolbar
        component="nav"
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0px 16px',
        }}
      >
        <MobileMenu />
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Navigation />
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <AppBarText />

          <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Box>
      </Toolbar>
    </ResponsiveAppBar>
  );
};

export default AppBar;
