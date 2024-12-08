import { Typography } from '@mui/material';
import { useAuth } from '../../hooks';

const AppBarText = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Typography
          component="p"
          variant="h6"
          sx={theme => ({
            display: 'flex',
            textAlign: 'center',
            fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
            color:
              theme.palette.mode === 'dark' && `${theme.palette.primary.main}`,
          })}
        >
          Welcome, {user.name}!
        </Typography>
      ) : (
        <Typography
          component="p"
          variant="h6"
          sx={theme => ({
            fontSize: { xs: 14, sm: 16, md: 19 },
            color:
              theme.palette.mode === 'dark' && `${theme.palette.primary.main}`,
          })}
        >
          You need to register 
        </Typography>
      )}
    </>
  );
};

export default AppBarText;
