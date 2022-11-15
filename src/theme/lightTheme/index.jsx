import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    blueButton: {
      main: '#66ACEA' ,
      dark: '#2F73C1',
      contrastText: 'black'
    },
    lightBlueButton: {
      main: '#E3F2FF',
      dark: '#8196A8',
      contrastText: 'black'
    },
    nav: {
        main: '#F9C74F',
        contrastText: 'rgba(0,0,0)',
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
      default: '#0971BD',
      paper: '#212A31',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
      hint: 'rgba(255,255,255,0.38)',
    },
  }
})

export default lightTheme;
