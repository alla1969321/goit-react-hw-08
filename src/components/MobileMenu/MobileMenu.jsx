import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpen from '@mui/icons-material/MenuOpen';

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isLoggedIn } = useAuth();
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? '#f0ac00' : '000000DE',
    };
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: 'flex', sm: 'none' }, mr: 2 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {open ? <MenuOpen /> : <MenuIcon />}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ display: { xs: 'flex', sm: 'none' } }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/" style={activeLink}>
            Home
          </NavLink>
        </MenuItem>
        {isLoggedIn ? (
          <div>
            <MenuItem onClick={handleClose}>
              <NavLink to="/contacts" style={activeLink}>
                Contacts
              </NavLink>
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={handleClose}>
              <NavLink to="/register" style={activeLink}>
                Register
              </NavLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <NavLink to="/login" style={activeLink}>
                Log in
              </NavLink>
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
};

export default MobileMenu;
