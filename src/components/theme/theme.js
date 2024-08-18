import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xxs: 320, 
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      custom2: 2600
    }
  }
});

export default theme;
