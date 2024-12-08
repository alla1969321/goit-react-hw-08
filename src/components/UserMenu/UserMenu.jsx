import { useDispatch } from 'react-redux';
import { authOps } from '../../redux';
import { useState } from 'react';
import { useAuth, useColorTheme } from '../../hooks';
import Box from '@mui/material/Box';
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { setMode } = useColorTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar
              sx={theme => ({
                width: 32,
                height: 32,
                color:
                  theme.palette.mode === 'dark' && theme.palette.primary.dark,
                backgroundColor: '#f0ac00',
              })}
            >
              {user.name[0].toUpperCase()}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 24,
                height: 24,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <Avatar
              fontSize="medium"
              sx={{
                backgroundColor: 'primary.main',
                ':hover': { backgroundColor: 'primary.dark' },
              }}
            />
          </ListItemIcon>
          {user.email}
        </MenuItem>
        <MenuItem onClick={() => setMode.toggleThemeMode()}>
          <ListItemIcon>
            <ThemeSwitcher />
          </ListItemIcon>
          Theme
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/"
            style={{
              display: 'inline-flex',
              flexBasis: 'auto',
              flexGrow: 1,
            }}
          >
            <ListItemIcon>
              <HomeIcon
                fontSize="medium"
                sx={{
                  color: 'primary.main',
                  ':hover': { color: 'primary.dark' },
                }}
              />
            </ListItemIcon>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(authOps.logout());
          }}
        >
          <ListItemIcon>
            <LogoutIcon
              fontSize="medium"
              sx={{
                color: 'primary.main',
                ':hover': { color: 'primary.dark' },
              }}
            />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
