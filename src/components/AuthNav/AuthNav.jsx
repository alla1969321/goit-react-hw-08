import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import CustomButton from '../CustomButton/CustomButton';

const paddings = {
  paddingRight: '16px',
  paddingLeft: '16px',
  paddingTop: '6px',
  paddingBottom: '6px',
};

const activeLink = ({ isActive }) => {
  return {
    color: isActive ? '#f0ac00' : 'white',
    ...paddings,
  };
};

const AuthNav = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
      <CustomButton variant="outlined">
        <NavLink to="/register" style={activeLink}>
          Register
        </NavLink>
      </CustomButton>
      <CustomButton variant="outlined">
        <NavLink to="/login" style={activeLink}>
          Log In
        </NavLink>
      </CustomButton>
    </Box>
  );
};

export default AuthNav;
