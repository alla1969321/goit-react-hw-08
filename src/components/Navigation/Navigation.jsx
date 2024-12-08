import { useAuth } from '../../hooks';
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

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <CustomButton
        variant="outlined"
        sx={theme => ({
          // padding: 0,
          border:
            theme.palette.mode !== 'dark'
              ? '1px solid white'
              : `1px solid ${theme.palette.primary.dark}`,
          outline: 'transparent',
        })}
      >
        <NavLink to="/" style={activeLink}>
          Home
        </NavLink>
      </CustomButton>

      {isLoggedIn && (
        <CustomButton
          variant="outlined"
          sx={theme => ({
            padding: 0,
            border:
              theme.palette.mode !== 'dark'
                ? '1px solid white'
                : `1px solid ${theme.palette.primary.main}`,
            outline: 'transparent',
          })}
        >
          <NavLink to="/contacts" style={activeLink}>
            Contacts
          </NavLink>
        </CustomButton>
      )}
    </Box>
  );
};

export default Navigation;
