import { Box, Paper, Typography } from '@mui/material';
import DocumentTitle from '../../components/DocumentTitle';
import { useColorTheme } from '../../hooks';

const HomePage = () => {
  const { mode } = useColorTheme();

  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Paper component="section">
        <DocumentTitle>HomePage</DocumentTitle>

        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontSize: { xs: 32, sm: 44, md: 56 },
            pt: 4,
            fontWeight: 600,
            backgroundImage:
              mode === 'light'
                ? 'url(/static/an-old-rusty-telephone-inside-an-abandoned-building.jpg)'
                : 'url(/static/unnamed.jpg)',
            backgroundSize: '200px',
            backgroundRepeat: 'repeat',
            color: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Contacts book application
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: 16, sm: 18, md: 20 },
            maxWidth: { xs: 400, md: 650 },
            mb: 1,
          }}
        >
          We take care of your information in the best traditions of Swiss banks
        </Typography>

        <Box
          sx={{
            height: '70vh',
            mt: 0,
            backgroundImage:
              'url(/static/an-old-rusty-telephone-inside-an-abandoned-building.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></Box>
        <Box sx={{ mt: 10 }}></Box>
      </Paper>
    </Box>
  );
};

export default HomePage;
