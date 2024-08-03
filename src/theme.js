import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#e84f20',
    },
    secondary: {
      main: '#1ec74e',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
