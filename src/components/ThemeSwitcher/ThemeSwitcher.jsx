import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorTheme } from '../../hooks/';

const ThemeSwitcher = () => {
  const { mode } = useColorTheme();

  return (
    <IconButton
      size="medium"
      aria-label="theme"
      sx={{
        padding: 0,
        color: mode !== 'dark' ? 'primary.main' : '#f0ac00',
        ':hover': { color: mode !== 'dark' && 'primary.dark' },
      }}
    >
      {mode !== 'dark' ? (
        <DarkModeIcon fontSize="medium" />
      ) : (
        <LightModeIcon fontSize="medium" />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
