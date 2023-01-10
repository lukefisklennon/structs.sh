import { createTheme, ThemeOptions } from '@mui/material';

const baseOptions: ThemeOptions = {
  typography: {
    fontFamily: 'AtlassianText',
  },
  palette: {
    primary: {
      main: '#614d96',
    },
    secondary: {
      main: '#916BBF',
    },
  },
};

export const structsTheme = createTheme({
  typography: {
    ...baseOptions.typography,
  },
  palette: {
    ...baseOptions.palette,
    background: {
      default: '#292a35',
      paper: '#292a35',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
});
