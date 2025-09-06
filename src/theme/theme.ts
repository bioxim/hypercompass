import { createTheme } from '@mui/material/styles';

// Palette remains the same
const palette = {
  primary: { main: '#00b767ff' },
  secondary: { main: '#007625ff' },
  background: { default: '#171616ff', paper: '#1a1a1a' },
  text: { primary: '#E0E0E0', secondary: '#A0A0A0' },
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    ...palette,
  },
  // Update the typography section to use Poppins
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 900,
    },
    h5: {
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    }
  },
});
