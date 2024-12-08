import { Box, Paper, Typography } from '@mui/material';
import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Paper component="section" sx={{ pb: '20px' }}>
        <DocumentTitle>Login</DocumentTitle>
        <Typography
          component="h1"
          variant="h1"
          gutterBottom
          sx={theme => ({
            fontSize: { xs: 38, sm: 44, md: 56 },
            pt: 4,
            fontWeight: 600,
            color: `${theme.palette.primary.main}`,
            textShadow:
              theme.palette.mode === 'light'
                ? ` 2px 2px 0 ${theme.palette.primary.light},
                        2px -2px 0 ${theme.palette.primary.light},
                        -2px 2px 0 ${theme.palette.primary.light},
                        -2px -2px 0 ${theme.palette.primary.light},
                        2px 0px 0 ${theme.palette.primary.light},
                        0px 2px 0 ${theme.palette.primary.light},
                        -2px 0px 0 ${theme.palette.primary.light},
                        0px -2px 0 ${theme.palette.primary.light}
            `
                : ` 2px 2px 0 ${theme.palette.primary.dark},
                        2px -2px 0 ${theme.palette.primary.dark},
                        -2px 2px 0 ${theme.palette.primary.dark},
                        -2px -2px 0 ${theme.palette.primary.dark},
                        2px 0px 0 ${theme.palette.primary.dark},
                        0px 2px 0 ${theme.palette.primary.dark},
                        -2px 0px 0 ${theme.palette.primary.dark},
                        0px -2px 0 ${theme.palette.primary.dark}
            `,
          })}
        >
          Login page
        </Typography>

        <LoginForm />
      </Paper>
    </Box>
  );
};

export default LoginPage;
