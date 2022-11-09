import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
  palette: {
    nav: {
        main: '#0E1C26',
        contrastText: 'rgba(255,255,255,0.87)',
    },
    type: 'dark',
    primary: {
      main: '#2F73C1',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#66ACEA',
    },
    background: {
      default: '#2C373F',
      paper: '#212A31',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
      hint: 'rgba(255,255,255,0.38)',
    },
  }
})

export default appTheme;
