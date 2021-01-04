import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const dark = createMuiTheme({
  palette: {
    primary: {
      main: '#252526',
    },
    secondary: {
      main: '#737372',
    },
    error: {
      main: '#f77f00',
    },
    background: {
      default: '#F2F2F2',
    },
  },
});



// Create a theme instance.
const light = createMuiTheme({
  palette: {
    primary: {
      main: '#9ABBF9',
    },
    secondary: {
      main: '#4F8AF7',
    },
    error: {
      main: '#C7605D',
    },
    background: {
      default: '#4A5A78',
    },
  },
});

export const darkTheme  =dark;
export const lightTheme =light;